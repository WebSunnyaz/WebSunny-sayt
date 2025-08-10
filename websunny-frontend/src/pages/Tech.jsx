import React from 'react';
import InfiniteScroll from '../components/infiniteScroll';
import {
  FaReact, FaCss3Alt, FaNodeJs, FaBootstrap, FaSass, FaTrello
} from "react-icons/fa";
import {
  SiJavascript, SiExpress, SiMongodb, SiRedux,
  SiTailwindcss, SiTypescript
} from "react-icons/si";

const About = () => {
  const items = [
   { icon: <FaReact style={{ color: "#28b6ff" }} size={48} />, name: "React", desc: "Framework" },
     { icon: <FaCss3Alt style={{ color: "#28b6ff" }} size={48} />, name: "CSS", desc: "İstifadəçi interfeysi" },
     { icon: <SiJavascript style={{ color: "#f7df1e" }} size={48} />, name: "JavaScript", desc: "İnteraktivlik" },
     { icon: <FaNodeJs style={{ color: "#28b6ff" }} size={48} />, name: "NodeJS", desc: "Web Server" },
     { icon: <SiExpress style={{ color: "#cccccc" }} size={48} />, name: "ExpressJS", desc: "Node Framework" },
     { icon: <SiMongodb style={{ color: "#00ed64" }} size={48} />, name: "MongoDB", desc: "Verilənlər bazası" },
     { icon: <SiRedux style={{ color: "#764abc" }} size={48} />, name: "Redux", desc: "State idarəetməsi" },
     { icon: <SiTailwindcss style={{ color: "#38bdf8" }} size={48} />, name: "TailwindCSS", desc: "İstifadəçi interfeysi" },
     { icon: <FaBootstrap style={{ color: "#7952b3" }} size={48} />, name: "Bootstrap", desc: "İstifadəçi interfeysi" },
     { icon: <SiTypescript style={{ color: "#3178c6" }} size={48} />, name: "TypeScript", desc: "Statik tipləmə" },
     { icon: <FaSass style={{ color: "#cf649a" }} size={48} />, name: "SCSS", desc: "İstifadəçi interfeysi" },
     { icon: <FaTrello style={{ color: "#0079bf" }} size={48} />, name: "Trello", desc: "Tapşırıq lövhəsi" },
  ];

  return (
    <div className="container mx-auto p-4 pt-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3  ">
  Texnologiyalar
</h2>
      <div className="bg-black p-8 lg:p-16 rounded-2xl primary-border">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
  {/* Sol tərəf */}
  <div className="lg:w-1/2 w-full space-y-6 z-20">
    <h3 className="text-white text-4xl font-semibold">Biz nə istifadə edirik?</h3>
    <p className="text-[#28b6ff] leading-relaxed">
      Websunny komandası olaraq biz sayt hazırlığında son texnologiyalardan istifadə edirik. Məqsədimiz müştərilərimizə mobil uyğun, sürətli və funksional həllər təqdim etməkdir.
    </p>
    <ul className="font-medium space-y-2  list-inside">
      <li>🔹 İstifadəçi mərkəzli dizayn yanaşması</li>
      <li>🔹 Çevik və mərhələli layihə idarəetməsi</li>
      <li>🔹 Yoxlamalardan keçmiş təmiz və optimallaşdırılmış kod</li>
      <li>🔹 Məlumat əsaslı qərarvermə üçün analitik inteqrasiya</li>
    </ul>
  </div>

  {/* Sağ tərəf */}
  <div className="lg:w-1/2 w-full h-[500px] relative z-20">
    <InfiniteScroll
      items={items}
      isTilted={true}
      tiltDirection="right"
      autoplay={true}
      autoplaySpeed={1}
      autoplayDirection="up"
    />
  </div>
</div>

      </div>
    </div>
  );
};

export default About;
