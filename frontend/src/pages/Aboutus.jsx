import React, { useEffect, useState } from "react";
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const AboutUs = () => {

      const [data, setData] = useState([])
       const FetchAPI = async () => {
        try {
            const result = await axios.get('http://localhost:3000/team')
            console.log(result.data)
            console.log("Successfully Fetched Data")
            setData(result.data)

        } catch (err) {
            console.log(err)
            console.log("Faild To fetch Data")
        }
    }
    useEffect(() => {
        FetchAPI()
    }, [])

  
  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      <section className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
          We are a passionate team of writers, editors, and creators dedicated to sharing stories, tips, and inspiration with the world.
        </p>
      </section>
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {data.map((val, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
          >
            <img
              src={val.image}
              alt={val.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-1 text-gray-800">{val.name}</h2>
              <p className="text-blue-600 font-medium mb-2">{val.role}</p>
              <p className="text-gray-600">{val.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
