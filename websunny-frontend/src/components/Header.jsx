import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-black primary-border text-white rounded-xl w-full py-6 px-6 md:px-12 lg:px-24 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative flex items-center space-x-3 cursor-pointer select-none">
          <Link to="/" className="relative">
            <img
              src="/logo-mavi.webp"
              alt="WebSunny Logo"
              className="h-32 w-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[21px] bg-black rounded-b-full"></div>
          </Link>
        </div>

        {/* Naviqasiya */}
        <nav className="hidden [@media(min-width:1360px)]:flex space-x-8 text-xl font-medium justify-center flex-1">
          {[
            { href: "/", label: "Ana Səhifə" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/testimonials", label: "Rəylər" },
            { href: "/about", label: "Haqqımızda" },
            { href: "/contact", label: "Əlaqə" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:border-b-2 transition-all duration-400 pb-1 "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Sağ tərəf */}
        <div className="flex items-center space-x-6 [@media(min-width:1360px)]:gap-8">
          {/* Telefon ikonu */}
          <a
            href="tel:+994513997969"
            className="flex items-center text-[#3c82f6]"
            title="Zəng et"
          >
            <img src="./phone-call (2).svg" alt="Zəng et" />
          </a>


          {/* Başla düyməsi - yalnız 1250px-dən yuxarı */}
          <Link
            to="/contact"
            className="hidden [@media(min-width:1250px)]:inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-12 rounded-lg transition-all duration-200"
          >
            Başla
          </Link>

          {/* Hamburger menyu */}
          <button
            ref={buttonRef}
            className="[@media(min-width:1250px)]:hidden p-2 rounded-lg bg-[#0c1537] border-2 border-blue-400 hover:bg-blue-800 transition-all duration-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-blue-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobil menyu */}
      <div
        className={`
          [@media(min-width:1250px)]:hidden
          bg-[#0b1437] border-2 rounded-xl border-blue-400 text-center text-white px-6
          transition-all duration-300 ease-in-out overflow-hidden
          ${menuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"}
        `}
        ref={dropdownRef}
      >
        <div className="space-y-4">
          {[
            { href: "/", label: "Ana Səhifə" },
            { href: "/portfolio", label: "Portfolio" },
            { href: "/testimonials", label: "Rəylər" },
            { href: "/about", label: "Haqqımızda" },
            { href: "/contact", label: "Əlaqə" },
            { href: "/faq", label: "FAQ" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block transition-all duration-200 pb-1 rounded-lg hover:bg-[#0d1a4d]"
              onClick={() => setMenuOpen(false)} // Klikdə menyunu bağlamaq üçün
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
