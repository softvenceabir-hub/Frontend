import { Menu, LayoutGrid } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({
  logo = { src: "", alt: "logo", title: "Shop By Category", url: "/" },
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
  auth = { login: { title: "Login", url: "/login" }, signup: { title: "Sign up", url: "/signup" } },
}) => {
  const location = useLocation();

  return (
    <section className="lg:py-4 pb-2">
      <div className="container mx-auto flex flex-col">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center justify-between w-full">
          {/* Logo */}
          <Link to={logo.url} className="flex items-center gap-2 w-[10%]">
            <LayoutGrid className="text-[#00786F]" size={20} />
            <span className="text-sm lg:text-base font-semibold hover:text-[#00786F]">
              {logo.title}
            </span>
          </Link>

          {/* Menu Items */}
          <div className="flex gap-10 w-[80%] justify-center">
            {menu.map((item) => (
              <MenuItem key={item.title} item={item} currentPath={location.pathname} />
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex gap-2 w-[10%] justify-end">
            <Button asChild variant="outline" size="sm">
              <Link to={auth.login.url}>{auth.login.title}</Link>
            </Button>
            <Button className="ml-2" asChild size="sm">
              <Link to={auth.signup.url}>{auth.signup.title}</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden flex items-center justify-between">
          <Link to={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-8 dark:invert" alt={logo.alt} />
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
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
              <div className="flex flex-col gap-4 p-4">
                <Accordion type="single" collapsible className="flex flex-col gap-4">
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <div className="flex flex-col gap-3 mt-4">
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
    </section>
  );
};

/* Desktop Menu Item with Hover + Active Underline */
const MenuItem = ({ item, currentPath }) => {
  const isActive = currentPath === item.url;

  return (
    <div className="relative group">
      <Link
        to={item.url}
        className={`
          text-sm lg:text-base font-semibold py-2 transition-colors
          ${isActive ? "text-[#00786F]" : "text-gray-800 dark:text-gray-200"}
          lg:hover:text-[#00786F]
        `}
      >
        {item.title}
      </Link>
      {/* Animated Underline */}
      <motion.div
        layoutId="underline"
        initial={{ width: 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        whileHover={{ width: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`absolute bottom-0 left-0 h-0.5 bg-[#00786F]`}
      />
    </div>
  );
};

/* Mobile Accordion Items */
const renderMobileMenuItem = (item) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-sm py-2 font-semibold">{item.title}</AccordionTrigger>
        <AccordionContent className="mt-2 flex flex-col gap-1">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              to={subItem.url}
              className="text-xs lg:text-sm p-2 rounded hover:text-[#00786F]"
            >
              {subItem.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link
      key={item.title}
      to={item.url}
      className="hover:text-[#00786F] text-sm font-semibold w-max flex select-none flex-row gap-4 rounded-md p-3 transition-colors"
    >
      {item.title}
    </Link>
  );
};

export default Navbar;
