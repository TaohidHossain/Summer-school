import Card from "./Card";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Gallery = ({ courses }) => {
    useEffect(()=>{
        AOS.init();
    },[])
    console.log(courses);
    return (
        <main data-aos="fade-right" className="w-[90%] mx-auto">
            <Tabs className="w-full my-8">
                <TabList className="gap-2 grid grid-cols-1 md:grid-cols-3 mb-16">
                    <Tab>Luxury</Tab>
                    <Tab>Sports</Tab>
                    <Tab>SUV</Tab>
                </TabList>
                <TabPanel >
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                    {
                        courses.filter(c => c.category == "Math").map(course => {
                            return <Card  key={course._id} course={course} />
                        })
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                    {
                        courses.filter(c => c.category == "Math").map(course => {
                            return <Card  key={course._id} course={course} />
                        })
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="gap-2 grid grid-cols-1 md:grid-cols-3">
                    {
                        courses.filter(c => c.category == "Math").map(course => {
                            return <Card  key={course._id} course={course} />
                        })
                    }
                    </div>
                </TabPanel>
            </Tabs>
        </main>
    )
}

export default Gallery;