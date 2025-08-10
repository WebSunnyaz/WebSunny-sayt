"use client";
import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { Helmet } from "react-helmet";

const team = [
  {
    name: "Rövşən",
    role: "Founder & Full-stack Developer",
    img: "/men.jpeg",
    website: "https://rovshan-madatov-portfolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/rovsen-medetov/",
    instagram: "https://www.instagram.com/rovsen_512",
  },
  {
    name: "Aysel",
    role: "Back-end Developer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    website: "https://aysel.dev",
    linkedin: "https://linkedin.com/in/aysel",
    instagram: "https://instagram.com/rovshen",
  },
  {
    name: "Elçin",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    website: "https://elcin.dev",
    linkedin: "https://linkedin.com/in/elcin",
    instagram: "https://instagram.com/rovshen",
  },
];

const About = () => {

  const [openIndex, setOpenIndex] = useState(null);
  const toggleLinks = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Helmet>
        <title>Haqqımızda - Websunny</title>
        <meta name="description" content="Websunny şirkətinin tarixi, missiyası və komandası haqqında məlumat." />
      </Helmet>
    <div className="container mx-auto p-4 pt-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Haqqımızda
      </motion.h2>

      <motion.div
        className="bg-black p-10 md:p-16 rounded-2xl primary-border space-y-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.p
          className="text-white leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Websunny — 5 ilə yaxın təcrübəyə sahib, müasir texnologiyalar və yaradıcı yanaşma ilə seçilən peşəkar veb həllər komandasıdır. <br />
          Missiyamız — müştərilərimizin rəqəmsal aləmdə özlərini peşəkar və fərqli şəkildə ifadə edə bilmələri üçün mobil uyğun, sürətli, SEO optimizasiya olunmuş və funksional saytlar yaratmaqdır.
        </motion.p>

        <motion.p
          className="text-white leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          5 illik fəaliyyətimiz ərzində 100-dən çox fərdi və korporativ layihəni uğurla tamamlamışıq. İstər bir startap, istər yerli biznes, istərsə də beynəlxalq brend olsun — hər bir müştəriyə individual yanaşaraq onların ehtiyaclarına uyğun unikal həllər təklif edirik.<br/>
          Əməkdaşlığımız yalnız bir layihə ilə bitmir — biz həm də davamlı texniki dəstək, təkmilləşdirmə xidmətləri və rəqəmsal məsləhətlər təqdim edirik.
        </motion.p>

        <div className="h-1 w-24 bg-[#28b6ff] mx-auto rounded-full my-8 animate-pulse"></div>

        <motion.h3
          className="text-2xl font-semibold mb-6 text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Komandamız
        </motion.h3>

        {/* Mobil: slider, Desktop: grid */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="min-w-[80%] md:min-w-0 snap-center bg-[#0e162e] primary-border hover:bg-[#18263f] transition rounded-2xl p-6 text-center shadow-md shadow-[#28b6ff]/10 hover:shadow-[#28b6ff]/40 transform hover:-translate-y-2 hover:scale-105 duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24  h-24 mx-auto  object-cover rounded-full mb-4 border-4 border-[#28b6ff]"
              />
              <h4 className="text-white font-semibold text-lg">{member.name}</h4>
              <p className="text-gray-400 mb-4">{member.role}</p>

              <button
                onClick={() => toggleLinks(index)}
                className="text-sm text-[#28b6ff] border border-[#28b6ff] px-4 py-2 rounded-full hover:bg-[#28b6ff] hover:text-black transition duration-300"
              >
                {openIndex === index ? "Bağla" : "Ətraflı bax"}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <m.div
                    key="links"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-4 flex justify-center gap-4 text-[#28b6ff] text-xl"
                  >
                    {member.website && (
                      <a href={member.website} target="_blank" rel="noopener noreferrer">
                        <FaGlobe className="hover:text-white transition" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-white transition" />
                      </a>
                    )}
                    {member.instagram && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-white transition" />
                      </a>
                    )}
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
     </>
  );
};

export default About;
