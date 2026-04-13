import { useState, useEffect } from "react";
import { navigation, siteConfig } from "../../data/site";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = "hidden"; } else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`lg:hidden relative z-[60] w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? "bg-gray-100" : ""}`}
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isOpen}
      >
        <div className="flex flex-col gap-1.5">
          <span className={`block w-5 h-0.5 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2 bg-dark" : "bg-dark"}`}/>
          <span className={`block w-5 h-0.5 transition-all duration-300 ${isOpen ? "opacity-0" : "bg-dark"}`}/>
          <span className={`block w-5 h-0.5 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2 bg-dark" : "bg-dark"}`}/>
        </div>
      </button>

      <div className={`fixed inset-0 bg-dark/40 backdrop-blur-sm z-[55] transition-opacity duration-300 lg:hidden ${isOpen?"opacity-100":"opacity-0 pointer-events-none"}`} onClick={()=>setIsOpen(false)} aria-hidden="true"/>

      <nav className={`fixed top-0 right-0 w-full h-[100dvh] bg-white z-[55] shadow-2xl transition-transform duration-300 ease-out lg:hidden ${isOpen?"translate-x-0":"translate-x-full"}`} aria-label="Navegación móvil">
        <div className="flex items-center justify-between px-8 pt-5 pb-4 border-b border-gray-100">
          <a href="#" onClick={()=>setIsOpen(false)}>
            <img src="/logo-center.png" alt={siteConfig.name} className="h-10 w-auto" />
          </a>
        </div>
        <div className="flex flex-col px-8 pt-6 pb-12 gap-2 bg-white h-full">
          {navigation.map(item=>(
            <a key={item.href} href={item.href} onClick={()=>setIsOpen(false)} className="text-lg font-semibold text-dark py-3 border-b border-gray-100 hover:text-olive transition-colors">{item.label}</a>
          ))}
          <button onClick={()=>{setIsOpen(false);setTimeout(()=>window.dispatchEvent(new CustomEvent("open-booking")),150);}} className="mt-6 inline-flex items-center justify-center bg-terracotta text-white font-semibold rounded-full px-7 py-3.5 text-sm hover:bg-terracotta-dark transition-colors">
            Agendar Cita
          </button>
        </div>
      </nav>
    </>
  );
}
