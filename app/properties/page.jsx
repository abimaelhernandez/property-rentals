'use client'
import React from 'react'
import propertiesData from '@/properties.json'
import PropertyCard from '@/components/PropertyCard'


const PropertiesPage = () => {
  console.log('PropertiesPage index')
  return (

    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured Properties
        </h2>
        {propertiesData.length === 0 ? (
          <p>
            No properties Found
          </p>
        ):(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertiesData.map((property, index) => (
                <PropertyCard key={index} property={property}/>
            ))}
          </div>
        ) 
        }
      </div>
    </section>
  )
}

export default PropertiesPage