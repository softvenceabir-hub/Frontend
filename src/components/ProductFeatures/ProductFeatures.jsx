import React from 'react'
import Product from '../Product/Product'


const ProductFeatures = () => {

 const FeaturesProducts = [
  {
    name: "Napa 500mg Tablet",
    href: "#",
    image: "https://bundui-images.netlify.app/medicines/napa.jpg",
    price: "$2",
    category: "Medicine"
  },
  {
    name: "Seclo 20mg Capsule",
    href: "#",
    image: "https://bundui-images.netlify.app/medicines/seclo.jpg",
    price: "$5",
    category: "Medicine"
  },
  {
    name: "Antacid Syrup",
    href: "#",
    image: "https://bundui-images.netlify.app/medicines/antacid.jpg",
    price: "$3",
    category: "Medicine"
  },
  {
    name: "Digital Thermometer",
    href: "#",
    image: "https://bundui-images.netlify.app/pharmacy/thermometer.jpg",
    price: "$12",
    category: "Health Devices"
  },
  {
    name: "Blood Pressure Monitor",
    href: "#",
    image: "https://bundui-images.netlify.app/pharmacy/bp-monitor.jpg",
    price: "$45",
    category: "Health Devices"
  },
  {
    name: "First Aid Kit",
    href: "#",
    image: "https://bundui-images.netlify.app/pharmacy/first-aid.jpg",
    price: "$18",
    category: "Health Care"
  },
  {
    name: "Surgical Face Mask (50 pcs)",
    href: "#",
    image: "https://bundui-images.netlify.app/pharmacy/mask.jpg",
    price: "$6",
    category: "Health Care"
  },
  {
    name: "Hand Sanitizer 100ml",
    href: "#",
    image: "https://bundui-images.netlify.app/pharmacy/sanitizer.jpg",
    price: "$2.5",
    category: "Health Care"
  }
];

  return (
   <section section className="container !mt-5 lg:!mt-10 lg:p-0">
     <h1 className="lg:text-3xl lg:pt-5 leading-[48px] text-[20px] text-center font-bold text-gray-900 dark:text-gray-100">
        Features Products
        </h1>
     <div className='grid mt-5 lg:grid-cols-5  lg:gap-10 gap-5 grid-cols-2 md:grid-cols-3'>
     {FeaturesProducts.map((product, index) => (
       <Product key={index} product={product} />
     ))}
    </div>
   </section>
  )
}

export default ProductFeatures