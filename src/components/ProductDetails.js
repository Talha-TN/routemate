import React from 'react'
import { useParams } from 'react-router-dom'
export const ProductDetails = () => {
  const params = useParams()
  console.log(params)
  return (
    <div>ProductDetails  {params.id}</div>
  )
}
