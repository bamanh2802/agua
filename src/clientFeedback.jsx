import React from "react";
import "./clientFeedback.css"; // Import CSS nếu có
import testimonialImg from "./assets/tastimonials-img.png"; // Import ảnh

const testimonials = [
  {
    name: "Maya",
    role: "Restaurant Owner",
    feedback: "Their consulting services are clear and informative, making it easy for students to choose the right study programs.",
  },
  {
    name: "Albus",
    role: "High school student",
    feedback: "Excellent customer service with quick responses to any inquiries, showing their commitment to student success.",
  },
  {
    name: "Andriya",
    role: "University student",
    feedback: "Agua organizes valuable workshops and events that help students expand their knowledge and connect with experts in the field.",
  },
];

const ClientFeedback = () => {
  return (
    <section className="testimonial mt-5 pt-5" id="testimonial">
      <div className="row justify-content-evenly">
        {/* Hình ảnh khách hàng */}
        <div className="col-md-4 col-10" data-aos="slide-right">
          <img src={testimonialImg} className="img-fluid" alt="Testimonial" />
        </div>

        {/* Nội dung feedback */}
        <div className="col-md-6 col-10 mt-5" data-aos="slide-left">
          <div className="heading">
            <h3>Clients Feedback</h3>

            {/* Bootstrap Carousel */}
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <div className="row justify-content-evenly">
                      <div className="col-2 text-center">
                        <i className="bi bi-quote" style={{ fontSize: "2rem" }}></i>
                      </div>
                      <div className="col-10">
                        <p className="text-muted">{testimonial.feedback}</p>
                        <h4>{testimonial.name}</h4>
                        <small className="fs-6 text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nút điều hướng */}
              <button
                className="nextprev-btn rounded-pill prev-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <i className="bi bi-arrow-left-circle-fill prev" style={{ fontSize: "1.5rem" }}></i>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="nextprev-btn rounded-pill next-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <i className="bi bi-arrow-right-circle-fill next" style={{ fontSize: "1.5rem" }}></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
