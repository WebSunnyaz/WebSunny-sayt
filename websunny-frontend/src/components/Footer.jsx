import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20 z-10">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        
        {/* Haqqımızda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Websunny</h3>
          <p className="text-gray-300 leading-relaxed text-sm">
            Veb sayt hazırlığı, dizayn və rəqəmsal həllər üzrə lider şirkət.  
            Müştərilərimizə yüksək keyfiyyətli, innovativ və effektiv veb xidmətlər təqdim edirik.
          </p>
        </div>

        {/* Əlaqə məlumatları */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Əlaqə</h3>
          <ul className="text-gray-300 space-y-2 text-sm">
            <li><strong>Ünvan:</strong> Bakı, Azərbaycan</li>
            <li><strong>Telefon:</strong> <a href="tel:+994501234567" className="hover:underline">+994 50 123 45 67</a></li>
            <li><strong>Email:</strong> <a href="mailto:info@websunny.az" className="hover:underline">info@websunny.az</a></li>
            <li><strong>İş saatları:</strong> B.e. - C.a. 09:00 - 18:00</li>
          </ul>
        </div>

        {/* Sürətli keçidlər */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Sürətli keçidlər</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:underline">Ana Səhifə</a></li>
            <li><a href="/services" className="hover:underline">Xidmətlərimiz</a></li>
            <li><a href="/portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="/about" className="hover:underline">Haqqımızda</a></li>
            <li><a href="/contact" className="hover:underline">Əlaqə</a></li>
          </ul>
        </div>

        {/* Sosial media */}
       <div className="flex flex-col gap-4 ">
         <h4 className="font-semibold text-white mb-4 text-xl">Sosial şəbəkələr</h4>
          
          <div className="flex gap-3 justify-center md:justify-start ">
             <a
             href="https://www.instagram.com/websunny.az"
             target="_blank"
             aria-label="Instagram hesabımız"
             rel="noopener noreferrer"
             className="bg-[#0a0f2c] w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
           >
             <FaInstagram className="text-white" />
           </a>
           <a
             href="https://www.linkedin.com/company/websunny"
             target="_blank"
             aria-label="Linkedin hesabımız"
             rel="noopener noreferrer"
             className="bg-[#0a0f2c] w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
           >
             <FaLinkedinIn className="text-white" />
           </a>
           <a
             href="https://www.facebook.com/profile.php?id=61573026174019"
             target="_blank"
             aria-label="Facebook hesabımız"
             rel="noopener noreferrer"
             className="bg-[#0a0f2c] w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
           >
             <FaFacebookF className="text-white" />
           </a>
           <a
             href="https://wa.me/994513997969"
             target="_blank"
             aria-label="Whatsapp nömrəmiz"
             rel="noopener noreferrer"
             className="bg-[#0a0f2c] w-12 h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
           >
             <FaWhatsapp className="text-white" />
           </a>
          </div>
         </div>
      </div>

      <div className="border-t border-blue-800 mt-8 py-4 text-center text-gray-400 text-xs select-none">
        © {new Date().getFullYear()} Websunny. Bütün hüquqlar qorunur.
      </div>
    </footer>
  );
};

export default Footer;
