"use client";
import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";

const testimonialsData = [
  {
    id: 1,
    name: "Nigar Məmmədova",
    role: "Biznes sahibi",
    comment: "Websunny ilə işləmək çox xoş idi. Saytımız sürətli və gözəl oldu!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 2,
    name: "Elçin Əliyev",
    role: "Marketinq meneceri",
    comment: "Peşəkar komandadır, işlərini vaxtında və yüksək səviyyədə gördülər.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Aysel Hüseynova",
    role: "Qrafik dizayner",
    comment: "Sayt dizaynı mükəmməl idi. İstədiyim hər şey nəzərə alındı.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 4,
    name: "Rəşad Məlikov",
    role: "Startap təsisçisi",
    comment: "Startapımız üçün əla landing page hazırladılar. Tövsiyə edirəm!",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg"
  },
  {
    id: 5,
    name: "Günel Qasımova",
    role: "SMM Mütəxəssisi",
    comment: "Komanda çox mehriban və cavabdehdir. Əməkdaşlıqdan razı qaldım.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg"
  },
  {
    id: 6,
    name: "Kamal Cəfərov",
    role: "E-ticarət sahibi",
    comment: "Sayt satışlarımızı artırdı. Websunny-yə təşəkkür edirəm!",
    avatar: "https://randomuser.me/api/portraits/men/29.jpg"
  }
];

export default function TestimonialMarquee() {
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  // 1-ci sıra sola doğru
  useEffect(() => {
    const marquee = marqueeRef1.current;
    if (!marquee) return;
    let position = 0;
    let animationFrame;
    const speed = 0.5;
    const step = () => {
      position -= speed;
      const totalWidth = marquee.scrollWidth / 2;
      if (Math.abs(position) >= totalWidth) position = 0;
      marquee.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(step);
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // 2-ci sıra sağa doğru
  // 2-ci sıra sağa doğru loop
useEffect(() => {
  const marquee = marqueeRef2.current;
  if (!marquee) return;

  let position = - (marquee.scrollWidth / 2); // başlanğıcı ortadan başlat
  let animationFrame;
  const speed = 0.5;

  const step = () => {
    position += speed;

    const totalWidth = marquee.scrollWidth / 2;

    if (position >= 0) {
      position = -totalWidth; // başa çatanda ortadan yenidən başlasın
    }

    marquee.style.transform = `translateX(${position}px)`;
    animationFrame = requestAnimationFrame(step);
  };

  animationFrame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(animationFrame);
}, []);


  const Card = ({ name, role, comment, avatar }) => (
    <div className="primary-border w-80 shrink-0 bg-gradient-to-br from-[#0f1c3e] to-[#000000] border border-[#2463eb]/30 rounded-xl p-6 shadow-md hover:shadow-[#28b6ff]/50 transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-[#28b6ff]"
        />
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-200 italic line-clamp-2">"{comment}"</p>
      <div className="flex mt-4 text-[#28b6ff]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="drop-shadow-[0_0_4px_#28b6ff]" />
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Müştəri Rəyləri - Websunny</title>
        <meta
          name="description"
          content="Websunny müştərilərinin rəyləri və təcrübələri. Peşəkar veb sayt hazırlanmasında müştərilərimizin fikirləri."
        />
      </Helmet>

      <div className="container mx-auto p-4 pt-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3">
          Müştəri rəyləri
        </h2>
      </div>

      {/* 1-ci sıra */}
     <div className="primary-border rounded-xl " >
       <section className="w-full pt-12  rounded-t-xl overflow-hidden bg-black py-6">
        <div
          className="flex w-max gap-6 px-4"
          ref={marqueeRef1}
          style={{ willChange: "transform" }}
        >
          {[...testimonialsData, ...testimonialsData].map(
            (item, i) => <Card key={`${item.id}-${i}`} {...item} />
          )}
        </div>
      </section>

      {/* 2-ci sıra */}
      <section className="w-full rounded-b-xl  overflow-hidden bg-black py-6 pb-12">
        <div
          className="flex w-max gap-6 px-4"
          ref={marqueeRef2}
          style={{ willChange: "transform" }}
        >
          {[...testimonialsData, ...testimonialsData].map(
            (item, i) => <Card key={`${item.id}-b-${i}`} {...item} />
          )}
        </div>
      </section>
     </div>
    </>
  );
}
