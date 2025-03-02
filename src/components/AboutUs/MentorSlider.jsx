const mentors = [
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Ms. Thi Hoang",
      title: "Mentor",
      quote:
        '"I believe it is important to give everyone the opportunity to explore all the possibilities: you are capable of more than you might think',
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Ms. Xuan (Rachel) Nguyen",
      title: "Mentor",
      quote: '"I brought my insights from the time abroad to inspire and hopefully improve those who need me',
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/business-avatar-circle/64/26_avatar_people_business_businesswoman_woman_female_long_hair-512.png",
      name: "Ms. Tuongvan Le ",
      title: "Mentor",
      quote: '"I’ve always been a curious person. When I started college, I wondered: What would my life have been like if I had grown up in Vietnam? The best way to find out was to meet peers my age who had.',
    },
  ];
  
  const MentorSlider = () => {
    return (
      <div className="bg-white py-5 px-3">
        <div className="container text-center">
          <h2 style={{ color: '#0074b4' }} className="text-primary fw-bold">Our Mentor</h2>
        </div>
        <div id="mentorCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            {mentors.map((mentor, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={mentor.img} alt={mentor.name} className="rounded-circle border border-secondary" style={{ width: '100px', height: '100px' }} />
                  <h3 className="mt-3" style={{ color: '#0074b4' }}>{mentor.name} - {mentor.title}</h3>
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