import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/image10.jpg";
import img3 from "../assets/imagee4.jpg";
import img4 from "../assets/imagee13.jpg";
import Banner from "../components/ui/Banner";
export default function Hero() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const goToServicesPage = () => {
    navigate("/services"); // Navigate to Services page
  };

  return (
    <section
      id="home"
      className="py-24 bg-gray-900 text-gray-100 flex flex-col items-center px-6"
    >

      {/* Heading */}
      <h1
        className="text-5xl md:text-6xl font-bold mb-6 relative"
        data-aos="fade-up"
      >
        ጉለሌ <span className="text-blue-500">የገበያ ማዕከል</span>{" "}
        <span className="text-purple-500"> ባህላዊ ልብሶች መሸጫ</span>
        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1 from-accent to-pink-500 rounded-full"></span>
      </h1>
          {/*Banner */}
          <Banner className="mb-6"/>
      {/* Subheading */}
      <p
        className="text-gray-300 text-xl max-w-2xl text-center mb-10"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        የተለያዩ የባህላዊ ልብስ አይነቶች እዚህ ይገኛሉ
      </p>

      {/* Buttons */}
      <div
        className=" flex-col max-w-10xl mx-auto px-6 py-4" 
      >
<div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full">
  <img src={img1}  alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
  <img src={img3} alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
  <img src={img4} alt="" className="w-full md:w-1/3 object-cover rounded-lg h-130" />
</div>
<div className="mt-6 flex justify-center">
<Link to="/Service">
          <button 
          className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">ፍርያቶችን</button>
        </Link>
  </div>
          
      </div>
    </section>
  );
}
