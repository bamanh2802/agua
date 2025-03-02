import React from "react";
import "./reason.css"; // Import CSS

// Import hình ảnh từ thư mục assets
import serviceIcon1 from "./assets/695d0c035556e408bd472.jpg";
import serviceIcon2 from "./assets/c1c6f794aec11f9f46d03.jpg";
import serviceIcon3 from "./assets/cd76452e1c7bad25f46a1.jpg";

import image1 from "./assets/portrait-smiling-young-woman-standing-with-laptop-against-gray-wall.jpg";
import image2 from "./assets/young-traveller-enjoying-holidays.jpg";
import image3 from "./assets/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking.jpg";
import image4 from "./assets/portrait-smiling-asian-student.jpg";

const imageList = [image1, image2, image3, image4];

// Component hiển thị một thẻ dịch vụ
const ServiceCard = ({ imgSrc, title, description }) => {
    return (
      <div className="col-10 col-md-4" data-aos="fade-up" data-aos-duration="1200">
        <div className="service-card">
          <div className="img">
            <img src={imgSrc} className="w-25 img-fluid" alt={title} />
          </div>
          <div className="content mt-3">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };
  
  const ServiceAndSkill = () => {
    return (
      <>
        {/* Service Section */}
        <section className="expertise pt-5 pb-5" id="service">
          <div className="row justify-content-evenly px-5">
            <ServiceCard
              imgSrc={serviceIcon1}
              title="Professional"
              description={
                "Agua is committed to maintaining the highest standards of professionalism in all operations. From structured workflows to an experienced team, we ensure reliability and quality for every customer."
              }
            />
            <ServiceCard
              imgSrc={serviceIcon2}
              title="Excellent Service"
              description="With a customer-first approach, Agua continuously strives to provide the best possible service. Customer satisfaction is the driving force that motivates us to constantly improve our service quality."
            />
            <ServiceCard
              imgSrc={serviceIcon3}
              title="Comprehensive Privacy Policy"
              description="Agua is fully committed to protecting customer information with strict security policies and ensures all personal data is securely stored and processed, providing complete peace of mind."
            />
          </div>
        </section>
  
        {/* Skill Section */}
        <section className="skill py-5" id="about">
          <div className="row justify-content-evenly">
            <div
              className="col-10 col-md-5 skill-with-progress"
              data-aos="slide-right"
              data-aos-duration="1000"
            >
              
              <div className="row justify-content-evenly">
                  {imageList.map((imageSrc, index) => (
                    <div key={index} className="col-10 col-md-6 mt-4">
                      <div className="progress-card ms-3 ms-md-0">
                        <img src={imageSrc} alt={`Progress Image ${index + 1}`} className="progress-image" />
                      </div>
                      <br />
                    </div>
                  ))}
              </div>
          </div>
  
            <div
              className="col-10 col-md-5 skill-detail"
              data-aos="slide-left"
              data-aos-duration="1200"
            >
              <div className="heading mt-5 mt-md-3">
                <h3>About Us</h3>
                <p className="text-white">
                Agua International Education is a collective of young educators committed to redefining the learning experience by making it joyful, purposeful, and student-centered.                </p>
                <p className="text-white">
                With the mantra “Education for happy learners,” Agua champions the idea that academic excellence and personal well-being can coexist harmoniously.                </p>
                <button className="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                  <a href="/aboutus">Read more</a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
export default ServiceAndSkill;
