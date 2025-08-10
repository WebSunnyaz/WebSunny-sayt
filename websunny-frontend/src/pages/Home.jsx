import About from './About';
import Contact from './Contact';
import FAQ from './FAQ';
import Services from './Services';
import Hero from '../components/Hero';
import Tech from './Tech';
import Carousel from '../components/Carousel';
import ReviewMarquee from '../components/marquee';



function Home() {
const imageArray = [
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    alt: "Laptop",
    href: "/portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    alt: "Code Screen",
    href: "/portfolio",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    alt: "Electronics Board",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    alt: "Code Editor",
  },
  {
    src: "https://images.unsplash.com/photo-1611923769934-b6c3c5b6e5a2",
    alt: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1605379399642-870262d3d051",
    alt: "Data Analysis",
  },
  {
    src: "https://images.unsplash.com/photo-1581090700227-1e8f1e48d84b",
    alt: "Software Development",
  },
  {
    src: "https://images.unsplash.com/photo-1526378722449-4b8967fc09a4",
    alt: "Mobile Design",
  },
  {
    src: "https://images.unsplash.com/photo-1580894894513-40a74f3b30f8",
    alt: "Desktop Setup",
  },
  {
    src: "https://images.unsplash.com/photo-1527430253228-e93688616381",
    alt: "Frontend UI",
  },
  {
    src: "https://images.unsplash.com/photo-1611979032375-1b2b8f7f4c51",
    alt: "UX Research",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    alt: "AI Concept",
  },
  {
    src: "https://images.unsplash.com/photo-1606760227092-72e0e3c5e642",
    alt: "Server Hardware",
  },
  {
    src: "https://images.unsplash.com/photo-1612178995721-6cfce88f47cd",
    alt: "Cyber Security",
  },
  {
    src: "https://images.unsplash.com/photo-1611078489935-b439c11c0147",
    alt: "Project Planning",
  },
  {
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166",
    alt: "DevOps Tools",
  },
];




  return (
    <div className="px-6 md:px-12 lg:px-24">
      <section id='hero'><Hero /></section>
      <section id="services"><Services /></section>
      <section id="car"><Carousel /></section>
      <section id="about"><About /></section>
      <section id="tech"><Tech images={imageArray}  /></section>
      <section id="testimonials"><ReviewMarquee /></section>
      <section id="faq"><FAQ isPreview={true} /></section>
      <section id="contact"><Contact /></section>


    </div>
  );
}

export default Home;
