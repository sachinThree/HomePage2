import Slider from "react-slick";
import heroImg from "../assets/hero.png";


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: false,
    dotsClass: "slick-dots custom-dots",
  };

  const slides = [
    {
      id: 1,
      title: "NEED A MENTAL HEALTH PROVIDER?",
      subtitle: "No Look Further",
      desc: "Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.",
      img: heroImg,
    },
    {
      id: 2,
      title: "YOUR MENTAL WELLNESS MATTERS",
      subtitle: "We are here for you",
      desc: "Professional care and guidance for your mental health journey.",
      img: heroImg,
    },
  ];

  return (
    <section className="relative"> 
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div
              className="h-[85vh] md:h-[90vh] min-h-[400px] bg-cover bg-center relative flex items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
             
              <div className="absolute inset-0 bg-black/60"></div>

             
              <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-xl text-white">
                  
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-lg font-medium">
                    {slide.subtitle}
                  </p>

                  <p className="mt-3 text-sm md:text-base text-gray-200 leading-relaxed">
                    {slide.desc}
                  </p>

                  <button className="mt-6 bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] text-black px-6 py-3 rounded-full font-medium">
                    Learn More →
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))} 
      </Slider>

      {/* Custom Dots */}
      <style>
        {`
          .custom-dots {
            bottom: 30px;
          }

          .custom-dots li button:before {
            font-size: 10px;
            color: #C18C2C;
            opacity: 0.5;
          }

          .custom-dots li.slick-active button:before {
            color: #FCF38A;
            opacity: 1;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;