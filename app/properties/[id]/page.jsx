'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getSingleProperty } from '@/utils/request'

const PropertyPage = () => {
  const {id} = useParams()
  const [property, setProperty ] = useState(null)
  const [loading, setLoading] = useState(true)

  
  useEffect(()=> {
    
    const getData = async()=>{
      if(!id) return
      
      try {
        const property = await getSingleProperty(id)
        setProperty(property)
      } catch (error) {
        console.error(error,'Error fetching property')  
      } finally {
        setLoading(false)
      }
    }

    if(property === null) {
      getData()
    }

    console.log('here lies property', property)

  }, [id, property])



  return (
    <div> PropertyPage single dynamic </div>
  )
}

export default PropertyPage