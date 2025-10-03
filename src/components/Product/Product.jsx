import { Button } from "@/components/ui/button";
import { HeartIcon, PlusIcon } from "lucide-react";
import { IoEyeSharp } from "react-icons/io5";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
const Product = ({productinfo}) => {
 
  return (
  // <section className="">
  //     <div className="group relative space-y-4 dark:shadow-gray-700 shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl p-4">
  //     <a href="#">
  //       <figure className="group-hover:opacity-90 relative">
  //         <Button
  //           variant="ghost"
  //           size="icon"
  //           className="bg-white/70 absolute top-2 right-2 rounded-full dark:text-black hover:bg-red-100"
  //         >
  //           <HeartIcon className="size-4 text-[#00786f]" />
  //         </Button>
  //         <img
  //           className="w-full rounded-lg aspect-square object-cover"
  //       src={productinfo?.thumbnail} alt={productinfo?.title || "No Image"}
        
  //         />
  //       </figure>
        
  //       <div className="flex flex-col lg:flex-row justify-between mt-2">
  //         <div>
  //           <h3 className="text-[14px] lg:text-lg lg:font-medium">
  //             <span className="absolute inset-0" aria-hidden="true" />
  //    {productinfo?.title}
              
  //           </h3>
           
  //         </div>
         
         
  //       </div>
  //       <div className="lg:flex justify-between mt-3">
  //          <p className="lg:text-lg font-[500] text-primary pb-4">${productinfo?.price}</p>
  //         <Button  className=" text-[14px]  dark:text-white font-medium">
  //           Add to Cart
  //         </Button>
  //       </div>
  //     </a>
  //   </div>
  // </section>
<section>
  <div className="group relative space-y-4 dark:shadow-gray-700 shadow-lg rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl p-3 sm:p-4 w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px]">
    <a href="#">
      {/* Image Section */}
     <figure className="relative">
  <img
    className="w-full h-[160px] sm:h-[200px] lg:h-[240px] rounded-lg object-cover object-center"
    src={productinfo?.thumbnail}
    alt={productinfo?.title || "No Image"}
  />

  {/* Desktop Icons (right side, vertical, hover only) */}
  <div className="hidden lg:flex absolute top-2 right-2 flex-col space-y-2
                  transform translate-x-6 group-hover:translate-x-0
                  opacity-0 group-hover:opacity-100 transition-all duration-300">

    {/* Wishlist Icon */}
    <div className="relative group">
      <TooltipProvider>
<Tooltip>
  <TooltipTrigger>
      <Button
        variant="ghost"
        size="icon"
        className="
        bg-red-100
        rounded-full dark:bg-gray-800 dark:text-white dark:hover:bg-yellow-50 hover:bg-black transition-colors"
      >
        <HeartIcon className="size-4 text-[#00786f]" />
      </Button>
       <TooltipContent side="left" className="text-[12px] font-light" >
          <p>Wishlist</p>
        </TooltipContent>
  </TooltipTrigger>
      
</Tooltip>
      </TooltipProvider>
        

 
    </div>

    {/* Quick View Icon */}
    <div className="relative group">
        <TooltipProvider>
<Tooltip>
  <TooltipTrigger>
      <Button
        variant="ghost"
        size="icon"
        className="  bg-red-100 rounded-full dark:bg-gray-800 dark:hover:bg-yellow-50 dark:text-white hover:bg-black transition-colors"
      >
        <IoEyeSharp className="size-4 text-[#00786f]" />
      </Button>
    
       <TooltipContent side="left" className="text-[12px] font-light" >
          <p>Quick View</p>
        </TooltipContent>
  </TooltipTrigger>
      
</Tooltip>
      </TooltipProvider>
    
    </div>
  </div>

  {/* Mobile / Tablet Icons */}
  <div className="flex lg:hidden absolute bottom-2 left-1/2 -translate-x-1/2 space-x-2">
    <Button
      variant="ghost"
      size="icon"
      className="bg-white/70 rounded-full dark:bg-gray-800 dark:text-white hover:bg-red-100 transition-colors"
    >
      <HeartIcon className="size-4 text-[#00786f]" />
    </Button>
    <Button
      variant="ghost"
      size="icon"
      className="bg-white/70 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 transition-colors"
    >
      <IoEyeSharp className="size-4 text-[#00786f]" />
    </Button>
  </div>
</figure>


      {/* Title + Divider */}
      <div className="flex flex-col justify-between mt-2">
        <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-600 mb-2"></div>
        <h3 className="text-[14px] sm:text-[14px] lg:text-lg font-medium relative line-clamp-1">
          {productinfo?.title || "No Title"}
        </h3>
      </div>

      {/* Price + Button */}
      <div className="flex justify-between items-center mt-3">
        <p className="text-[14px] sm:text-[15px] lg:text-lg font-[500] text-primary">
          ${productinfo?.price}
        </p>
        <Button className="text-[12px] sm:text-[14px] lg:text-[15px] px-2 sm:px-3 lg:px-4 py-1 lg:py-2 dark:text-black font-semibold">
          Add To Cart
        </Button>
      </div>
    </a>
  </div>
</section>

  );
};

export default Product;
