import Card from "../Home/Gallery/Card";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Courses = ({/* courses */}) => {
    const courses = [
        {
            _id:1,
            name: "Math",
            price: 100,
            rating: 5,
            category: "Math"
        },{
            _id:2,
            name: "Violin",
            price: 100,
            rating: 5,
            category: "Math"
        },{
            _id:3,
            name: "Programming",
            price: 100,
            rating: 5,
            category: "Math"
        },{
            _id:4,
            name: "Olympiad",
            price: 100,
            rating: 5,
            category: "Math"
        }
    ]
    useEffect(()=>{
        AOS.init();
    },[])
    console.log(courses);
    return (
        <div data-aos="fade-right" className="w-[90%] mx-auto">
            <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
            {
                courses.map(course => {
                     return <Card  key={course._id} course={course} />
                })
            }
            </div>    
        </div>
    )
}

export default Courses;