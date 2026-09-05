import PropertyCard from '@/components/PropertyCard'

async function getProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/properties`, { cache: 'no-store' })
    
    if (!res.ok) {
      console.error('Error fetching properties:', res.status, res.statusText)
      return []
    }

    const data = await res.json()
    return data || []
  } catch (error) {
    console.error('getProperties error:', error)
    return []
  }
}

const PropertiesPage = async () => {
  const propertiesData = await getProperties()

  propertiesData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort by createdAt descending

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">Featured Properties</h2>
        {(!propertiesData || propertiesData.length === 0) ? (
          <p>No properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertiesData.map((property, index) => (
              <PropertyCard key={property.id ?? index} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage