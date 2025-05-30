import React, { useEffect, useState } from "react";
import axios from 'axios'
import { NavLink } from 'react-router-dom';


const Home = () => {
    const [data, setData] = useState([])

    const FetchAPI = async () => {
        try {
            const result = await axios.get('http://localhost:3000/blogs')
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
          Welcome to <span className="text-blue-600">MyBlog</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
          Your daily dose of inspiration, tips, and stories from passionate writers.
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
              alt={val.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{val.title}</h2>
              <p className="text-gray-600 mb-4">{val.excerpt}</p>
              <a
                href="https://detailed.com/50/" target="_blanck"
                className="text-blue-600 hover:underline font-medium"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
    