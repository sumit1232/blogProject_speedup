import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Blog = () => {
  const nav = useNavigate();
  const [data, setData] = useState({ title: '', excerpt: '', image: '', author: '', date: '' })
  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  console.log(data)
  const saveForm = async (e) => {
    e.preventDefault()
    alert('Blog Added Successfully...')
    console.log(data)
    await axios.post('http://localhost:3000/blogdetails', data)
    nav('/blogdetails')
  }

  return (
    <>
      <div className="bg-gray-50 min-h-screen pt-8">
        <section className="max-w-4xl mx-auto text-center mb-12 px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
            Blog <span className="text-blue-600">Posts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
            Read the latest articles or share your own insights!
          </p>
        </section>
        <section className="max-w-2xl mx-auto mb-12 px-4">
          <form
            action="" onSubmit={(e) => saveForm(e)}
            className="bg-white rounded-lg shadow-lg p-8 animate-fade-in"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Submit a Blog Post</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="title">
                Title
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                id="title"
                name="title" value={data.title} onChange={(e) => dataHandler(e)}
                placeholder="Blog post title"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="excerpt">
                Excerpt
              </label>
              <textarea
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                id="excerpt"
                name="excerpt" value={data.excerpt} onChange={(e) => dataHandler(e)}
                placeholder="Short description"
              />

            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="image">
                Image URL
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                id="image"
                name="image" value={data.image} onChange={(e) => dataHandler(e)}
                placeholder="https://source.unsplash.com/600x400/?blog"
              />

            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="author">
                Author
              </label>
              <input
                className="border border-gray-300 rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                id="author"
                name="author" value={data.author} onChange={(e) => dataHandler(e)}
                placeholder="Your name"
              />

            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
            >
              Submit
            </button>
          </form>
        </section>
      </div>



    </>
  )
}

export default Blog
