import React from "react";

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & Editor",
    bio: "Passionate about storytelling and helping others find their voice.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Lee",
    role: "Content Strategist",
    bio: "Loves crafting engaging content and connecting with readers.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sam Patel",
    role: "Tech Lead",
    bio: "Ensures everything runs smoothly behind the scenes.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
   {
    name: "Alex Johnson",
    role: "Founder & Editor",
    bio: "Passionate about storytelling and helping others find their voice.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Lee",
    role: "Content Strategist",
    bio: "Loves crafting engaging content and connecting with readers.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen pt-8">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fade-in-down">
          About <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 animate-fade-in-up">
          We are a passionate team of writers, editors, and creators dedicated to sharing stories, tips, and inspiration with the world.
        </p>
      </section>

      {/* Team Section */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 animate-fade-in"
            style={{ animationDelay: `${idx * 0.2 + 0.2}s` }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-1 text-gray-800">{member.name}</h2>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default AboutUs;
