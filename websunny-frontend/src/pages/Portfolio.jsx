import PortfolioItem from '../components/PortfolioItem';
import { Helmet } from 'react-helmet';

const projects = [
   {
    id: 1,
    title: "Nexora Finance",
    description: "Nexora Finance üçün hazırlanan bu veb sayt, müasir maliyyə xidmətləri təklif edən bir şirkətin etibarlı və peşəkar imicini əks etdirir. İstifadəçi dostu interfeys, xidmət bölmələri, bloq və əlaqə forması ilə zənginləşdirilmişdir.",
    image: "./nexora-finance.png",
  },
  {
    id: 2,
    title: "Glorelle Cosmetics",
    description: "Glorelle Cosmetics təbii və keyfiyyətli dəriyə qulluq məhsulları təqdim edən gözəllik brendidir. Sayt zərif dizaynı və istifadəsi asan interfeysi ilə məhsulları vizual olaraq ön plana çıxarır.",
    image: "./glorelle.png",
  },
  {
    id: 3,
    title: "GreenPeak Travels",
    description: "GreenPeak Travels ekoloji və məsuliyyətli turizm təcrübələri təqdim edən səyahət agentliyidir. Sayt təbiət temalı dizaynı və istifadəçi yönümlü axtarış sistemi ilə rahat tur seçimi imkanı yaradır.",
    image: "./greenpeak.png",
  },
  {
    id: 4,
    title: "RisaCard",
    description: "Şəxsi əlaqə məlumatlarının paylaşılması üçün hazırlanmış NFC əsaslı profil sistemi. Sadə, sürətli və QR dəstəyi ilə təchiz olunmuş.",
    image: "./risacard.png",
  },
  {
    id: 5,
    title: "EduSpark Academy",
    description: "EduSpark Academy veb platforması, onlayn tədris sahəsində fəaliyyət göstərən təlim mərkəzi üçün hazırlanıb. Kurs siyahıları, müəllim profilləri və öyrənci rəyləri ilə interaktiv öyrənmə təcrübəsi yaradır.",
    image: "./eduspark.png",
  },
  {
    id: 6,
    title: "Qala Group",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./qala.png",
  },
   {
    id: 7,
    title: "Velo Fit",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./Vellofit.png",
  },
   {
    id: 8,
    title: "Caspian Art House ",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./art.png",
  },,
  {
    id: 9,
    title: "Trendora",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./trendora.png",
  },,
   {
    id: 10,
    title: "BakuFit Club",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./bakufit.png",
  },,
  {
    id: 11,
    title: "EkoPlan",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./ekoplan.png",
  },,
   {
    id: 12,
    title: "TechHive",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./techhive.png",
  },
];


const Portfolio = () => {
  return (
    <>
    <Helmet>
        <title>Websunny Portfolio - Peşəkar Veb Layihələr</title>
        <meta name="description" content="Websunny tərəfindən hazırlanmış yüksək keyfiyyətli veb sayt layihələrinin portfolio səhifəsi." />
      </Helmet>

       <section className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3  ">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((item, idx) => (
          <PortfolioItem
            key={idx}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </section>

    </>
   
  );
};

export default Portfolio;
