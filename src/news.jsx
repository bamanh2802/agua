import React, { useState } from "react";
import "./news.css"; // Import CSS nếu có

// Import hình ảnh từ thư mục assets
import carRental from "./assets/america1.png";
import portfolio from "./assets/america2.png";
import dLife from "./assets/canada1.png";
import gFood from "./assets/canada2.png";
import travel from "./assets/america3.png";
import movies from "./assets/america5.png";

// Dữ liệu Portfolio
const portfolioData = [
  { id: 1, title: "Car Rental", category: "website", img: carRental },
  { id: 2, title: "Portfolio", category: "website", img: portfolio },
  { id: 3, title: "D'Life", category: "webdesign", img: dLife },
  { id: 4, title: "G-FOOD", category: "webdesign", img: gFood },
  { id: 5, title: "TRAVEL", category: "website", img: travel },
  { id: 6, title: "Movies", category: "website", img: movies },
];

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Hàm lọc danh mục
  const filteredPortfolio = portfolioData.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <section className="portfolio" id="portfolio">
      <div className="heading text-center pt-5">
        <h3>News</h3>
      </div>

      {/* Bộ lọc danh mục */}
      <div id="myBtnContainer" className="text-center mt-4">
        <button className="filter-item" onClick={() => setSelectedCategory("all")}>All</button>
        <button className="filter-item" onClick={() => setSelectedCategory("website")}>America</button>
        <button className="filter-item" onClick={() => setSelectedCategory("webdesign")}>Canada</button>
        <button className="filter-item" onClick={() => setSelectedCategory("app")}>England</button>
      </div>

      {/* Danh sách portfolio */}
      <div className="portfolio-body">
        <div className="row justify-content-evenly px-4">
          {filteredPortfolio.map((item) => (
            <div key={item.id} className="post col-md-4 col-10 mt-3" data-aos="fade-up">
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body text-center">
                    <h4 className="card-title">{item.title}</h4>
                    
                    <div className="d-flex justify-content-center gap-1">
                      <span className="badge bg-secondary badge-pill">Scholarship</span>
                      <span className="badge bg-secondary badge-pill">Culture</span>
                    </div>


                    <a href="#" className="read-more-btn link d-block mt-2">Read More</a>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
