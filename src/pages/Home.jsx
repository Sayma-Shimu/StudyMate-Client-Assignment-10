import React from "react";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import About from "./About";
import Blog from "./Blog";
import FAQ from "./FAQ";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";

const Home = () => {
  const data = useLoaderData();

  if (!Array.isArray(data?.data)) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-lg text-gray-500">No partners found</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-950">
      {/* Banner Section */}
      <Banner />

      {/* Top Rated Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="w-11/12 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Top Rated <span className="text-green-600">Study Partners</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              Learn from the best. These partners are highly rated by the community for their expertise.
            </p>
            <div className="w-20 h-1.5 bg-green-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.data?.slice(0, 3).map((partner) => (
              <ServiceCard
                key={partner._id}
                service={partner}
                showExperienceLevel={false}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <HowItWorks />
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <Testimonials />
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <Features />
      </section>

      {/* Blog */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <Blog></Blog>
      </section>

      {/* About */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <About></About>
      </section>
      {/* Newsletter */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <Newsletter></Newsletter>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <FAQ></FAQ>
      </section>
    </div>
  );
};

export default Home;
