import AboutUsCard from "./AboutUsCard";
import MentorSlider from "./MentorSlider";

const cardsData = [
    {
        img: "https://img.freepik.com/free-photo/smiling-asian-woman-with-notebooks-student-with-happy-face-promo-college-education-blue-backgroun_1258-167224.jpg?t=st=1740923664~exp=1740927264~hmac=08751c33ed5fc6b06b53e91efa07bb7a5fd51ca98288c4bb4565cd09553b2a7a&w=996",
        title: "Joy of learning: Learning is the best when it is joyful",
        desc: "Members of the Aqua team all enjoy learning, and we strive to help students find happiness in their studies. Happiness and success go hand-in-hand along the way. We want our students to regard learning as a positive process in which they always stay curious and excited to know more about themselves and the world.",
    },
    {
        img: "https://img.freepik.com/free-photo/surprised-beautiful-woman-sits-table-with-makeup-tools-holding-idea-bubble-with-makeup-brush_141793-122825.jpg?t=st=1740923604~exp=1740927204~hmac=7717217e21666f996e6ffef6377cb21f231e02f34a9804f40064409938fbf036&w=996",
        title: "Creative thinking: Innovation starts with curiosity",
        desc: "We believe that creativity is at the heart of problem-solving. Our approach encourages students to think outside the box, ask questions, and explore new possibilities. Through creative thinking, students develop the skills needed to adapt to an ever-changing world.",
    },
    {
        img: "https://img.freepik.com/free-photo/asian-businessmen-businesswomen-meeting-brainstorming-ideas-about-creative-web-design-planning-application-developing-template-layout-mobile-phone-project-working-together-small-office_7861-2743.jpg?t=st=1740923707~exp=1740927307~hmac=959dfc6a7f6ca6bf7c7c1567389b36569eded366ea7fded50fbd679222a4c05c&w=996",
        title: "Collaborative learning: Growing together",
        desc: "Learning is a social experience. We foster an environment where students can share ideas, work together on projects, and learn from each other's perspectives. This collaborative approach not only enhances understanding but also builds important social skills.",
    },
];

const AboutUs = () => {
    return (
        <div 
        style={{ backgroundColor: "#0173B1" }}
        className=" text-white py-5 px-3">
            <div className="container text-center">
                <h1 className="display-5 fw-bold">About Agua</h1>
                <p className="mt-3 fs-5">
                    Agua was founded with the belief that education is the foundation of development. We are committed to helping Vietnamese students access prestigious universities in USA and realize their dream of studying abroad.
                </p>
            </div>
            <div 
            style={{ marginTop: "84px"}}
            className="container">
                <div className="row g-4">
                    {cardsData.map((data, index) => (
                        <div key={index} className="">
                            <AboutUsCard 
                                img={data.img}
                                title={data.title}
                                desc={data.desc}
                                reverse={index % 2 !== 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;