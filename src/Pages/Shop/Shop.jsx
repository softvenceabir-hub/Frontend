import React, {  useEffect, useState } from 'react'
import CategoryCard from '../Common/CategoryCard'
import Product from '../../components/Product/Product'
import axios from 'axios';

const Shop = () => {
    const [catageoryShow,setCategoryShow]=useState([])
    const [allProduct,setallProduct]=useState([])

    // getAll Products
function getAllProducts() {
    axios.get("https://dummyjson.com/products").then((res)=>{
       setallProduct(res.data.products)   
    })
    .catch((err)=>{
        console.log(err)    
    })
}
useEffect(() => {
    getAllProducts()
}, []);
  return (
   <main className='lg:pt-40 w-full pt-50'>
    <div className='grid grid-cols-12 lg:gap-8'>
        <div className='col-span-12 lg:col-span-2 h-fit'>
            <CategoryCard></CategoryCard>

        </div>
        <div className="lg:col-span-10 mr-0 col-span-12">
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-5 lg:gap-x-7 lg:gap-y-7 p-5 lg:p-0'>
             {
                allProduct.map((item,index)=><Product key={index} productinfo={item}></Product>)
             }
             
        </div>
        </div>

    </div>
   </main>
  )
}

export default Shop