import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiEdit } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
const Blogdetails = () => {
  const [data, setData] = useState([])


  const FetchData = async () => {

    const result = await axios.get(`http://localhost:3000/blogdetails`)
    console.log(result.data)
    setData(result.data)
  }
  useEffect(() => {
    FetchData()
  }, [])

    const DeleteData = async (id) => {
        try {
            const result = data.filter((val) => val.id !== id)
            setData(result);
            await axios.delete(`http://localhost:3000/blogdetails/${id}`)
        } catch (err) {
            console.log(err)
            return;
        }
    }
  return (
    <>
     <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
 {
        data.map((val, index) => {
          return (
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
              <h2 className="text-xl font-semibold mb-1 text-gray-800">{val.title}</h2>
              <p className="text-gray-600 mb-4">{val.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                <span>{val.author}</span>
                <span>{val.date}</span>
              </div>
              <NavLink to={`/editblog/${val.id}`}><CiEdit/></NavLink>
               <i className='fa fa-trash text-danger fw-bold' onClick={() => { if (window.confirm('Are You Sure ?')) { DeleteData(val.id) } }}><MdDelete/></i>
              <a
                href="https://detailed.com/50/"
                target='_blanck'
                className="text-blue-600 hover:underline font-medium"
              >
                Read More &rarr;
              </a>
            </div>
          </div>
          )
        })
      }
     </section>
    </>
  )
}

export default Blogdetails