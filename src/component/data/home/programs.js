import ranking from "../../../assets/ranking.jpg"
import college from "../../../assets/college.png"
const programs = [
    "ME/M.Tech",
    "B.Sc",
    "BA",
    "B.Com",
    "BCA",
    "BBA/BMS",
    "B.Sc (Nursing)"
];

const cards = [
    {
        title: "Ranking",
        desc: "College ranked based on real data",
        tags: ["Indiatoday - 1799", "Collegedunia - 1843", "IIRF - 1733", "Outlook - 1362"],
        footer: "Top Ranked Colleges in India ›",
        img: ranking,
    },
    {
        title: "Find Colleges",
        desc: "Discover 19000+ colleges via preferences",
        tags: ["Best MBA colleges in India", "Best BTech colleges in India"],
        footer: "Discover Top Colleges in India ›",
        img: college,
    },
    {
        title: "Compare Colleges",
        desc: "Compare on the basis of rank, fees, etc.",
        tags: ["IIT Madras vs IIT Delhi", "IIT Madras vs IIT Bombay"],
        footer: "Compare Colleges ›",
        img: "https://img.freepik.com/premium-vector/young-students-outside-high-school_18591-21874.jpg?w=1060",
    },
    {
        title: "Exams",
        desc: "Know more about your exams",
        tags: ["B.Com", "B.Sc", "B.Sc (Nursing)", "BA", "BBA/BMS", "BCA", "BE/B.Tech"],
        footer: "Check All Entrance Exams in India ›",
        img: "https://img.freepik.com/premium-vector/exam-concept-with-checklist-books-timer-hourglass-pencil_773186-439.jpg?w=1060",
    },
    {
        title: "College Predictor",
        desc: "Know your college admission chances",
        tags: ["CUET", "NEET", "AYUSH NEET Counselling", "JEE Advanced"],
        footer: "Find Where You may get Admission ›",
        img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-mba-illustration_23-2149347419.jpg?t=st=1755083987~exp=1755087587~hmac=5a6e6cf22cbc4fb3aabbf083ddd1a73676bd61d463788dfb5ea8d57dd0dc00d2&w=1060",
    },
    {
        title: "Course Finder",
        desc: "Explore various scholarships available",
        tags: ["BE/B.TECH-947", "MBA/PGDM-1140", "ME/M.TECH-1228"],
        footer: "View All Scholarships ›",
        img: "https://img.freepik.com/premium-vector/online-testing-background-vector-illustration-with-checklist-taking-exam-choosing-answer-form-e-learning-education-concept_2175-845.jpg?w=1060",
    }
];
export { programs, cards }