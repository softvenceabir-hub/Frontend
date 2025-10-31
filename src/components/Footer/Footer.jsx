
import logos from "../../assets/logo.jpg"
const Footer = ({
  logo = {
    src:logos,
    alt: "logos",
    title: "",
    url: "#"
  },

  tagline = "",

  menuItems = [
    {
      title: "Product",
      links: [
        { text: "Overview", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "Marketplace", url: "#" },
        { text: "Features", url: "#" },
        { text: "Integrations", url: "#" },
        { text: "Pricing", url: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { text: "About Us", url: "/aboutus" },
        { text: "Our Team", url: "/team" },
        { text: "Blog", url: "#" },
        { text: "Contact Us", url: "#" },
        { text: "Privacy", url: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { text: "Help", url: "#" },
        { text: "Sales", url: "#" },
        { text: "Advertise", url: "#" }
      ]
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" }
      ]
    }
  ],

  copyright = "© Md Sulayman Hosen Abir 2025",
}) => {
  return (
    <section className="lg:mt-14 mt-5 py-5 ">
      <div className="container ">
        <footer>
          <div className="grid grid-cols-2  gap-8 lg:grid-cols-6 md:grid-cols-6 ">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href="#">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10"
                  />
                </a>
                <p className="text-xl font-semibold">{logo.title}</p>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="lg:mt-10 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p className="mx-auto">{copyright}</p>
         
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Footer
