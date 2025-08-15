import { Link } from "react-router-dom";
import "./GlowingBorderBox.css";
import BlurImage from "./BlurImage";

const Hero = () => {
  return (
    <section
      className="primary-border bg-[#050a11] min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-8 gap-20 py-24 "
    >
      {/* Sol tərəf - Yazılar */}
      <div className="flex-1 space-y-8 hero-text-glow">
  <h1 className="text-5xl md:text-7xl font-bold text-white leading-snug max-w-3xl drop-shadow-lg">
    Rəqəmsal Gələcəyə <span className="text-[#28b6ff]">Saytınızla </span> Addım Atın
  </h1>

  <p className="text-gray-300 max-w-xl text-xl md:text-2xl leading-relaxed">
    Peşəkar veb saytlar, sürətli yüklənmə və müasir dizayn — hamısı bir yerdə.
  </p>

  <div className="flex gap-4">
   <div className="flex flex-col sm:flex-row items-center gap-4">
  <Link
    to="/portfolio"
    className="bg-[#28b6ff] hover:bg-[#1a8cff] text-black font-semibold py-4 px-6 rounded-lg shadow-md transition duration-300 text-lg md:text-base text-center w-full sm:w-auto"
  >
    İşlərimiz
  </Link>
  <Link
    to="/faq"
    className="border border-[#28b6ff] text-[#28b6ff] hover:bg-[#28b6ff] hover:text-black font-semibold py-3 px-5 rounded-lg transition duration-300 text-lg md:text-base text-center w-full sm:w-auto"
  >
    Daha çox öyrən
  </Link>
</div>


  </div>
</div>


      {/* Sağ tərəf - Şəkil */}
      <div className="flex-1 md:flex justify-center">
        <BlurImage
          img="/hero side.webp"
          alt="Developer illustration"
          className="w-[380px] md:w-[480px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
