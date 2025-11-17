import React from 'react'
import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';

const Home = () => {
    const data = useLoaderData();

    if (!Array.isArray(data.data)) {
        return <p>No partners found</p>;
    }

    return (
        <div>
            <Banner />
<h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Top Rated Study Partners</h2>
            <div className="grid md:grid-cols-3 bg-green-50 gap-5 w-11/12 mx-auto">
                {data.data.map((partner) => (
                    <ServiceCard key={partner._id} service={partner} />
                ))}
            </div>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    )
}

export default Home;
