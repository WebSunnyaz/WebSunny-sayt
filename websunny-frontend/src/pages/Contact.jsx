import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Əlaqə - Websunny</title>
        <meta
          name="description"
          content="Websunny ilə əlaqə saxlayın. Peşəkar veb sayt hazırlığı və rəqəmsal həllər üçün bizə yazın və ya zəng edin."
        />
      </Helmet>

      <section className="container mx-auto p-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3">
          Əlaqə
        </h2>

        <div className="flex  flex-col md:flex-row gap-6 bg-black primary-border p-8 sm:p-6 md:p-12 rounded-2xl">
          {/* Sol tərəf */}
          <div className="flex flex-col gap-6 md:w-1/2">
            <div>
              <h3 className="text-2xl font-bold mb-2">Birlikdə uğurlu layihələrə imza ataq!</h3>
              <p className="text-gray-300">
                Layihənizlə bağlı sizi dinləməyə və ehtiyaclarınıza uyğun innovativ həllər təklif etməyə hazırıq.
                Gəlin birlikdə fərq yaradaq!
              </p>
            </div>

            <div className="flex items-start gap-4 mt-6">
              <MapPin className="text-[#28b6ff]" />
              <div>
                <h4 className="font-semibold text-white">Ünvan</h4>
                <p className="text-gray-300">Bakı şəhəri, Azərbaycan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-[#28b6ff]" />
              <div>
                <h4 className="font-semibold text-white">E-poçt</h4>
                <p className="text-gray-300">info@websunny.az</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-[#28b6ff]" />
              <div>
                <h4 className="font-semibold text-white">Telefon</h4>
                <p className="text-gray-300">+994 51 399 79 69</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-4">Sosial şəbəkələr</h4>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href="https://www.instagram.com/websunny.az"
                  target="_blank"
                  aria-label="Instagram hesabımız"
                  rel="noopener noreferrer"
                  className="bg-[#0a0f2c] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
                >
                  <FaInstagram className="text-[#28b6ff]" />
                </a>
                <a
                  href="https://www.linkedin.com/company/websunny"
                  target="_blank"
                  aria-label="Linkedin hesabımız"
                  rel="noopener noreferrer"
                  className="bg-[#0a0f2c] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
                >
                  <FaLinkedinIn className="text-[#28b6ff]" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61573026174019"
                  target="_blank"
                  aria-label="Facebook hesabımız"
                  rel="noopener noreferrer"
                  className="bg-[#0a0f2c] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
                >
                  <FaFacebookF className="text-[#28b6ff]" />
                </a>
                <a
                  href="https://wa.me/994513997969"
                  target="_blank"
                  aria-label="Whatsapp nömrəmiz"
                  rel="noopener noreferrer"
                  className="bg-[#0a0f2c] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg hover:scale-110 transition"
                >
                  <FaWhatsapp className="text-[#28b6ff]" />
                </a>
              </div>
            </div>
          </div>

          {/* Sağ tərəf – Form */}
          <form className="bg-[#0b122d] p-4 sm:p-6 rounded-2xl flex flex-col gap-4 md:w-1/2">
  <div className="flex flex-col">
    <label htmlFor="name" className="sr-only">
      Adınız
    </label>
    <input
      id="name"
      type="text"
      placeholder="Adınız"
      className="bg-[#0a0f2c] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2463eb] w-full"
      required
      aria-required="true"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="sr-only">
      E-poçtunuz
    </label>
    <input
      id="email"
      type="email"
      placeholder="E-poçtunuz"
      className="bg-[#0a0f2c] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2463eb] w-full"
      required
      aria-required="true"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="sr-only">
      Mesajınız
    </label>
    <textarea
      id="message"
      placeholder="Mesajınız"
      className="bg-[#0a0f2c] text-white p-3 rounded-lg outline-none focus:ring-2 focus:ring-[#2463eb] h-40 sm:h-56 resize-none w-full"
      required
      aria-required="true"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-gradient-to-r from-[#2463eb] to-[#28b6ff] text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
  >
    Göndər
  </button>
</form>

        </div>
      </section>
    </>
  );
};

export default Contact;
