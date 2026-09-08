const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null 
// get all properties
const getProperties = async () => {
  try {
    // handle in case domain not avail yet 
    if(!apiDomain) {
      return []
    }

    const res = await fetch(`${apiDomain}/properties`, { cache: 'no-store' })
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

const getSingleProperty = async (id) => {
  try {
    // handle in case domain not avail yet 
    if(!apiDomain) {
      return null
    }

    const res = await fetch(`${apiDomain}/properties/${id}`, { cache: 'no-store' })
    
    if (!res.ok) {
      console.error('Error fetching properties:', res.status, res.statusText)
      return []
    }
    
    const data = await res.json()
    return data || []
  } catch (error) {
    console.error('getProperties error:', error)
    return null
  }
}

export { getProperties, getSingleProperty }