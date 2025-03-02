const mentors = [
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Mrs. Thi Hoang",
      title: "Cố vấn học bổng",
      quote:
        '"Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today." - Malcolm X',
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Mr. John Doe",
      title: "Chuyên gia giáo dục",
      quote: '"Knowledge is power. Invest in yourself." - Unknown',
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Ms. Jane Smith",
      title: "Cố vấn du học",
      quote: '"The beautiful thing about learning is that no one can take it away from you." - B.B. King',
    },
  ];
  
  const MentorSlider = () => {
    return (
      <div className="bg-white py-5 px-3">
        <div className="container text-center">
          <h2 className="text-primary fw-bold">Mentor và Teacher</h2>
          <div className="border-top border-primary w-25 mx-auto mt-2"></div>
        </div>
        <div id="mentorCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {mentors.map((mentor, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={mentor.img} alt={mentor.name} className="rounded-circle border border-secondary" style={{ width: '100px', height: '100px' }} />
                  <h3 className="mt-3 text-danger">{mentor.name} - {mentor.title}</h3>
                  <p className="text-muted fst-italic">{mentor.quote}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#mentorCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#mentorCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default MentorSlider;