import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";
import "../../../src/index.css";

export default function SidebarSocial({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setVisible(false); // fecha a sidebar após clicar
    }
  };

  const servicesItems = [
    {
      label: "- Revisão de Benefícios",
      command: () => scrollToSection("service"),
    },
    { label: "- Aposentadoria", command: () => scrollToSection("service") },
    { label: "- BPC LOAS", command: () => scrollToSection("service") },
    {
      label: "- Benefícios por Incapacidade",
      command: () => scrollToSection("service"),
    },
    { label: "- Salário Maternidade", command: () => scrollToSection("service") },
    {
      label: "- Consultoria Jurídica",
      command: () => scrollToSection("service"),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="inset-0 z-10 flex">
      {/* Overlay */}
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* Hamburger */}
        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode ? "text-primary" : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px]"
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className={`${colorMode ? "text-primary" : "text-white"}`}
                    />
                  </span>
                </div>

                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-primary" />
                  <ul className="p-3 m-0 list-none">
                    {submenuVisible && (
                      <ul
                        className={`${
                          colorMode
                            ? "text-primary"
                            : "p-0 m-0 -mt-[16px] overflow-hidden font-medium text-white"
                        } list-none text-paragraph3 font-mainFont`}
                      >
                        {/* Home */}
                        <li>
                          <a
                            className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150"
                            onClick={() => scrollToSection("home")}
                          >
                            <HomeIcon />
                            <span className="ml-[8px]">
                              {content.texts.navbar.menuItems[0]}
                            </span>
                            <Ripple />
                          </a>
                        </li>

                        {/* Services com submenu */}
                        <li>
                          <a
                            className="flex items-center w-full p-3 cursor-pointer border-round hover:surface-100"
                            onClick={() => setServicesOpen(!servicesOpen)}
                          >
                            <ServerIcon />
                            <span className="ml-[8px]">
                              {content.texts.navbar.menuItems[1]}
                            </span>
                          </a>

                          {servicesOpen && (
                            <ul className="pl-6 list-none bg-black/10">
                              {servicesItems.map((item, idx) => (
                                <li key={idx}>
                                  <a
                                    className="flex items-center w-full p-2 cursor-pointer border-round hover:surface-100"
                                    onClick={item.command}
                                  >
                                    {item.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>

                        {/* About */}
                        <li>
                          <a
                            className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150"
                            onClick={() => scrollToSection("about")}
                          >
                            <UserSearch />
                            <span className="ml-[8px]">
                              {content.texts.navbar.menuItems[2]}
                            </span>
                            <Ripple />
                          </a>
                        </li>

                        {/* FAQ */}
                        <li>
                          <a
                            className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150"
                            onClick={() => scrollToSection("faq")}
                          >
                            <HelpCircle />
                            <span className="ml-[8px]">
                              {content.texts.navbar.menuItems[3]}
                            </span>
                            <Ripple />
                          </a>
                        </li>
                      </ul>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
