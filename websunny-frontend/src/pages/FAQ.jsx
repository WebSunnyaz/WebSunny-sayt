import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const faqs = [
  {
    question: "Websunny hansı xidmətləri təklif edir?",
    answer: "Biz veb sayt hazırlığı, dizayn, SEO, texniki dəstək və digər rəqəmsal həllər təqdim edirik."
  },
  {
    question: "Sayt neçəyə başa gəlir?",
    answer: "Qiymət layihənin tələblərinə görə dəyişir. Əlaqə saxlayın, sizə uyğun təklif verək."
  },
  {
    question: "İşə başlamaq üçün nə lazımdır?",
    answer: "Sadəcə bizimlə əlaqə saxlayın, ehtiyaclarınızı dinləyək və sizə uyğun plan hazırlayaq."
  },
  {
    question: "Sayt nə qədər müddətə hazırlanır?",
    answer: "Bu, layihənin mürəkkəbliyindən asılıdır. Adətən 7-15 iş günü ərzində tamamlanır."
  },
  {
    question: "Hazırlanan sayt mobil uyğun olur?",
    answer: "Bəli, bütün saytlarımız mobil cihazlara tam uyğun (responsive) şəkildə hazırlanır."
  },
  {
    question: "Sayt üçün domen və hosting siz təmin edirsiniz?",
    answer: "Bəli, istəyə əsasən domen və hosting xidmətlərini də təqdim edirik."
  },
  {
    question: "Saytı idarə etmək üçün panel olur?",
    answer: "Bəli, sizə uyğun idarəetmə paneli hazırlayırıq ki, rahat şəkildə saytınızı idarə edə biləsiniz."
  },
  {
    question: "Hazırladığınız saytlara sonradan dəyişiklik etmək mümkündür?",
    answer: "Bəli, sayt tam funksional şəkildə hazırlanır və istəyə uyğun dəyişikliklər etmək mümkündür."
  },
  {
    question: "SEO xidməti ayrıca təklif olunur?",
    answer: "Bəli, istəyə uyğun olaraq SEO (axtarış sistemlərinə uyğunlaşdırma) xidməti ayrıca təqdim olunur."
  },
  {
    question: "Saytdan satış edə bilərəmmi?",
    answer: "Əgər e-ticarət saytı istəyirsinizsə, sizə uyğun tam funksional onlayn mağaza hazırlaya bilərik."
  }
];

const FAQ = ({ isPreview = false }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Əgər preview-dursa yalnız ilk 5-ni göstər
  const shownFaqs = isPreview ? faqs.slice(0, 5) : faqs;

  return (
    <>

      <Helmet>
        <title>FAQ - Tez-tez Verilən Suallar - Websunny</title>
        <meta
          name="description"
          content="Websunny şirkətinə aid tez-tez verilən suallar və cavablar. Xidmətlərimiz, veb sayt hazırlığı, dəstək və digər mövzular haqqında ətraflı məlumat."
        />
      </Helmet>


      <section className="container max-w-7xl mx-auto p-4">

        <div className="rounded-xl py-12  text-white">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl  py-3">
            Tez-tez verilən suallar
          </h2>
          <div className="space-y-4 bg-black p-6 md:p-16 rounded-xl primary-border ">

            {shownFaqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-blue-800/30 border border-blue-600 rounded-md overflow-hidden transition-all duration-300 ${openIndex === index ? "shadow-lg" : "hover:bg-blue-800/50"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                >
                  <span className="text-base md:text-lg font-medium">{faq.question}</span>

                  <span className="text-2xl font-bold">{openIndex === index ? "−" : "+"}</span>
                </button>

                <div
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[200px] py-2" : "max-h-0"
                    }`}
                >

                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}

            {/* Əgər preview-dursa yönləndirmə düyməsi göstər */}
            {isPreview && (
              <div className="text-center mt-10">
                <button
                  onClick={() => navigate("/faq")}
                  className="text-[#28b6ff] border border-[#28b6ff] hover:bg-[#28b6ff] hover:text-black font-semibold py-3 px-8 rounded-lg transition duration-300"
                >
                  Daha çox sual
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>

  );
};

export default FAQ;
