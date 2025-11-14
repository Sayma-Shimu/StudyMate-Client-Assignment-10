import React from 'react'

import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import WinterCareTips from '../components/WinterCareTips'
import MeetOurVets from '../components/MeetOurVets'
import Banner from '../components/Banner'

const Home = () => {

    const [services, setServices] = useState([]);
    
    

    useEffect(() => {
        fetch("http://localhost:3000/partners") 
            .then((res) => res.json())
            .then((data) => 
                setServices(data)
            // console.log(data)
            
                
                )
            .catch((err) => console.error("Error loading services:", err));
    }, []);

    return (
        <div>
            <Banner></Banner>

{/* card section----------- */}
            <section className="px-6 py-12 bg-gray-50 w-11/12 mx-auto mt-10">

                <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Popular Winter Care Services </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                      
                        
                        
                    ))}
                </div>

            </section>

            <WinterCareTips></WinterCareTips>

            <MeetOurVets></MeetOurVets>

        </div>
    )
}

export default Home