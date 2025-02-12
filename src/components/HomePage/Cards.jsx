import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const teamMembers = [
  {
    name: "Monie Cluad",
    role: "Field BB Coordinator",
    rank: "Colonel",
    image: "isaac.jpg", // Replace with actual image paths
  },
  {
    name: "Ngenbui Valid Buinda",
    role: "Field BB Secretary",
    rank: "Major",
    image: "valid.jpg",
  },
  {
    name: "Bryan Miki",
    role: "Limbe South Association",
    rank: "Vice Secretary",
    image: "nyanga.jpg",
  },
  {
    name: "Brian",
    role: "Software Engineer",
    rank: "Limbe Field IT Dep",
    image: "brian.jpg",
  },
];

const Cards = () => {
  return (
    <section className="bg-[#0a0d1a] text-white py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our <span className="text-blue-500">Organisation</span>
      </h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[#012a51] p-6 rounded-lg text-center shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-[120px] h-[120px] mx-auto rounded-full border-4 border-white"
            />
            <h3 className="text-lg font-semibold text-blue-400 mt-4">{member.name}</h3>
            <p className="text-sm">{member.role}</p>
            <p className="text-sm text-gray-400">{member.rank}</p>
            <div className="flex justify-center gap-4 mt-4 text-white">
              <FaFacebookF className="cursor-pointer hover:text-blue-500" />
              <FaTwitter className="cursor-pointer hover:text-blue-400" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaYoutube className="cursor-pointer hover:text-red-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
