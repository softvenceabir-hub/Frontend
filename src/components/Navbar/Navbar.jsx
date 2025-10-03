import { Menu, LayoutGrid } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";

const Navbar = ({
  logo = {
    src: "",
    alt: "logo",
    title: "Shop By Category",
    url: "/",
  },
  menu = [
    { title: "Home", url: "/" },
    { title: "Shop", url: "/shop" },
    { title: "Medicine", url: "/medicine" },
    { title: "Health & Wellness", url: "/health" },
    { title: "Personal Care", url: "/personal-care" },
    { title: "Sexual Wellness", url: "/sexual-wellness" },
    { title: "Baby Care", url: "/baby-care" },
    { title: "Home Care", url: "/home-care" },
    { title: "Pet Care", url: "/pet-care" },
    { title: "Glossary", url: "/glossary" },
  ],
  auth = {
    login: { title: "Login", url: "/login" },
    signup: { title: "Sign up", url: "/signup" },
  },
}) => {
  return (
    <section className="lg:py-4 pb-2">
      <div className="container mx-auto flex flex-col">
        {/* Desktop Menu */}
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <div className="w-[20%]">
              <Link to={logo.url} className="flex items-center gap-2">
                <LayoutGrid className="text-[#00786F]" size={20} />
                <span className="text-sm w-full lg:text-base hover:text-[#00786F] font-semibold tracking-tighter">
                  {logo.title}
                </span>
              </Link>
            </div>

            {/* Menu */}
            <div className="mx-auto flex relative items-center w-full">
              <Carousel opts={{ align: "start" }} className="w-full">
                <CarouselContent className="flex gap-0.5">
                  {menu.map((item) => (
                    <CarouselItem
                      key={item.title}
                      className="flex items-center justify-center basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                    >
                      {item.items ? (
                        <div className="relative group w-full">
                          <button className="text-sm w-full border border-transparent group-hover:border-[#00786F] rounded-md py-2 transition-all duration-200 lg:text-base font-semibold hover:text-[#00786F]">
                            {item.title}
                          </button>
                          <div className="absolute top-full left-0 hidden group-hover:flex flex-col bg-white shadow-md p-2 z-20 min-w-[200px]">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.url}
                                className="px-3 py-2 text-sm hover:bg-gray-100"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.url}
                          className="text-sm font-[500] py-2 hover:text-[#00786F] transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      )}
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {/* Carousel Navigation */}
                <CarouselPrevious
                  className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
                  aria-label="Previous"
                />
                <CarouselNext
                  className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
                  aria-label="Next"
                />
              </Carousel>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="w-[20%] flex gap-2 text-sm lg:text-base">
            <div className="ml-auto">
              <Button asChild variant="outline" size="sm">
                <Link to={auth.login.url}>{auth.login.title}</Link>
              </Button>
              <Button className="ml-3" asChild size="sm">
                <Link to={auth.signup.url}>{auth.signup.title}</Link>
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
            </Link>

            {/* Mobile Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto scrollbar-hide">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Accordion Menu */}
                <div className="flex flex-col gap-6 p-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  {/* Auth Buttons */}
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <Link to={auth.login.url}>{auth.login.title}</Link>
                    </Button>
                    <Button asChild>
                      <Link to={auth.signup.url}>{auth.signup.title}</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Render Mobile Accordion Items */
const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-sm py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      to={item.url}
      className="hover:bg-muted hover:text-[#00786F] text-sm font-semibold w-max flex select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
    >
      {item.title}
    </Link>
  );
};

/* Submenu Links */
const SubMenuLink = ({ item }) => {
  return (
    <Link
      className="hover:bg-muted hover:text-[#00786F] w-max flex select-none flex-row gap-4 rounded-md p-3 text-xs lg:text-sm leading-none no-underline outline-none transition-colors"
      to={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="font-semibold">{item.title}</div>
      </div>
    </Link>
  );
};

export default Navbar;
