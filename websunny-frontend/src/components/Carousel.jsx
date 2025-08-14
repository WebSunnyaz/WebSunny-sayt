import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Carousel.css"


const carousel = (slider) => {
  let z = window.innerWidth < 768 ? 270 : 350;

  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }

  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });

  slider.on("detailsChanged", rotate);
};


const cards = [
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
    title: "Tech Hive",
    description: "Tech Hive üçün hazırladığım bu sayt, müasir dizayn və funksionallıqla tam inteqrasiya olunmuşdur. Portfoliomdakı bu layihə, Texnologiya sahəsindəki bacarıqlarımı və kreativ yanaşmamı əks etdirir.",
    image: "./techhive.png",
  },
  {
    id: 5,
    title: "EduSpark Academy",
    description: "EduSpark Academy veb platforması, onlayn tədris sahəsində fəaliyyət göstərən təlim mərkəzi üçün hazırlanıb. Kurs siyahıları, müəllim profilləri və tələbə rəyləri ilə interaktiv öyrənmə təcrübəsi yaradır.",
    image: "./eduspark.png",
  },
  {
    id: 6,
    title: "Qala Group",
    description: "Qala Group müasir memarlıq və tikinti sahəsində innovativ və etibarlı həllər təklif edən aparıcı şirkətdir. Yaşayış, ofis və sənaye obyektləri üzrə peşəkar layihələrimizlə gələcəyin inşasına töhfə veririk.",
    image: "./qala.png",
  },
];



export default function Carousel() {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

 return (
  <div className="carousel-section">
  <h2 className="text-3xl font-bold text-center mb-12 text-[#28b6ff] border-2 border-[#28b6ff] rounded-3xl px-6 py-3">
    Portfolio
  </h2>

  <div className="carousel-grid">
    {/* Sol statistikalar */}
    <div className="stats-block">
      <div className="stat-box">
        <h3>50+</h3>
        <p>Layihələr</p>
      </div>
      <div className="stat-box">
        <h3>30+</h3>
        <p>Aktiv Müştəri</p>
      </div>
    </div>

    {/* Carousel */}
   <div className="flex flex-col gap-10">
     <div className="carousel-wrapper">
      <div className="scene">
        <div className="carousel keen-slider" ref={sliderRef}>
          {cards.map((card) => (
            <div className="carousel__cell" key={card.id}>
              <div className="card-title">{card.title}</div>
              <div
                className="card-image"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <div className="card-info">{card.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    


    <div className="more-button-wrapper">
  <a href="/portfolio" className="more-button">
    Daha çoxuna bax →
  </a>
</div>
   </div>


    {/* Sağ statistikalar */}
    <div className="stats-block">
      <div className="stat-box">
        <h3>98%</h3>
        <p>Məmnuniyyət</p>
      </div>
      <div className="stat-box">
        <h3>3 il</h3>
        <p>Təcrübə</p>
      </div>
    </div>
  </div>
</div>

)

}
