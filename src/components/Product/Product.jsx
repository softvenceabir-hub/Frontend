import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { IoEyeSharp } from "react-icons/io5";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router";

const Product = ({ productinfo }) => {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <div className="group relative space-y-4 border rounded-xl transform transition duration-300 lg:hover:scale-100 lg:hover:shadow-lg p-3 sm:p-4 w-full max-w-[180px] sm:max-w-[220px] lg:max-w-[260px]">
        <a href="#">
          <figure className="relative">
            <Link to={`/singleProduct/${productinfo?.id || ""}`}>
              <img
                className="w-full h-[160px] sm:h-[200px] lg:h-[240px] rounded-lg object-cover object-center"
                src={
                  productinfo?.thumbnail ||
                  "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
                }
                alt={productinfo?.title || "No Image"}
              />
            </Link>

            {/* 💻 Desktop Icons */}
            <div
              className="hidden lg:flex absolute top-2 right-2 flex-col space-y-2
                  transform translate-x-6 group-hover:translate-x-0
                  opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              {/* Wishlist */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-red-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-black transition-colors"
                    >
                      <HeartIcon className="size-4 text-[#00786f]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="text-[12px] font-light">
                    <p>Wishlist</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              {/* Quick View */}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setOpen(true)}
                      className="bg-red-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-black transition-colors"
                    >
                      <IoEyeSharp className="size-4 text-[#00786f]" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left" className="text-[12px] font-light">
                    <p>Quick View</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Mobile Icons */}
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
                onClick={() => setOpen(true)} 
                className="bg-white/70 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 transition-colors"
              >
                <IoEyeSharp className="size-4 text-[#00786f]" />
              </Button>
            </div>
          </figure>

          {/* Title */}
          <Link to={`/singleProduct/${productinfo?.id || ""}`}>
      <div className="flex flex-col justify-between mt-2">
  {/* Divider line */}
  <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-600 mb-2" />

  {/* Product title centered */}
  <h3 className="text-[14px] sm:text-[14px] lg:text-lg font-medium text-center line-clamp-1">
    {productinfo?.title || "No Title"}
  </h3>
</div>


          </Link>

          {/* Price + Add to Cart */}
   <div className="mt-3 flex justify-center">
  <p className="text-[16px] font-semibold text-[#00786f] text-center">
    ৳ {productinfo?.price}
  </p>
</div>
<div className="lg:mt-3">
  <Button className="w-full mt-2 text-[12px] sm:text-[14px] lg:text-[15px] px-3 py-2 dark:text-white hover:dark:text-black font-semibold">
    Add To Cart
  </Button>
</div>

        </a>
      </div>

      {/* Quick View Modal (Works on Mobile too) */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[95%] sm:max-w-3xl bg-white dark:bg-black rounded-2xl">
        

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            
            <img
              src={productinfo?.thumbnail}
              alt={productinfo?.title}
              className="rounded-lg object-cover w-full h-[220px] sm:h-[250px]"
            />
            
            <div>
                <DialogHeader>
            <DialogTitle className="text-lg lg:mb-10 sm:text-xl font-semibold text-gray-800 dark:text-white">
              {productinfo?.title}
            </DialogTitle>
          </DialogHeader>
              
              <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base">
                {productinfo?.description || "No description available."}
              </p>
              <p className="text-lg font-bold text-[#00786f] mb-4">
                ৳ {productinfo?.price}
              </p>
              <Button className="w-full dark:text-white hover:dark:text-black ">Add To Cart</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Product;
