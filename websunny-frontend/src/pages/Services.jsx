import GlowingBorderBox from '../components/GlowingBorderBox';
import { FaBullseye, FaPaintBrush, FaMobileAlt, FaSearch, FaBolt, FaShieldAlt } from 'react-icons/fa';

const services = [
  {
    title: "Peşəkar Yanaşma",
    description: "Hər layihəyə fərdi və diqqətli yanaşırıq.",
    icon: <FaBullseye className="text-[#28b6ff] text-4xl" />
  },
  {
    title: "Modern Dizayn",
    description: "Zamansız və cəlbedici interfeyslər hazırlayırıq.",
    icon: <FaPaintBrush className="text-[#28b6ff] text-4xl" />
  },
  {
    title: "Mobil Uyğunluq",
    description: "Saytlarınız bütün cihazlarda problemsiz işləyəcək.",
    icon: <FaMobileAlt className="text-[#28b6ff] text-4xl" />
  },
  {
    title: "SEO Optimizasiyası",
    description: "Google-da görünmək üçün texniki hazırlıq təmin edirik.",
    icon: <FaSearch className="text-[#28b6ff] text-4xl" />
  },
  {
    title: "Sürətli Yüklənmə",
    description: "İstifadəçilər saytınızı gözləmədən açacaq.",
    icon: <FaBolt className="text-[#28b6ff] text-4xl" />
  },
  {
    title: "Təhlükəsizlik",
    description: "Saytınız daim qorunur və texniki dəstək alırsınız.",
    icon: <FaShieldAlt className="text-[#28b6ff] text-4xl" />
  }
];



const Services = () => {
  return (
    <section className="relative   text-white rounded-xl py-10 ">
  <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <GlowingBorderBox
              key={idx}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
    </section>
  );
};

export default Services;
