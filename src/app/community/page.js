'use client';

import { useState, useEffect } from "react";

export default function CommunityPage() {
  const activities = [
    { id: 1, title: "Pet Challenges", description: "Share your pet doing the funniest tricks!", icon: "🐾" },
    { id: 2, title: "Photo Contests", description: "Post your cutest pet pictures and win hearts.", icon: "📸" },
    { id: 3, title: "Pet Stories", description: "Tell the tale of your furry friend's adventures.", icon: "📖" },
    { id: 4, title: "Tips & Tricks", description: "Exchange advice with other pet lovers.", icon: "💡" },
    { id: 5, title: "Virtual Meetups", description: "Join online hangouts with other pet owners.", icon: "💻" },
    { id: 6, title: "Fun Polls", description: "Vote on silly questions about pets.", icon: "🗳️" },
  ];

  const funPets = [
    { id: 1, name: "Baxter", type: "Dog", location: "New York, NY", img: "https://placedog.net/400/300?id=1", emoji: "🐶" },
    { id: 2, name: "Luna", type: "Cat", location: "Los Angeles, CA", img: "https://www.thesprucepets.com/thmb/OoMBiCxD3B02Jx-WO9dmY0DAaaI=/4000x0/filters:no_upscale():strip_icc()/cats-recirc3_2-1f5de201af94447a9063f83249260aff.jpg", emoji: "🐱" },
    { id: 3, name: "Coco", type: "Parrot", location: "Miami, FL", img: "https://allpetsvet.com.au/uploads/assets/uploads/e0edb1fdb7d4ac351d3cb5daec135255.jpeg", emoji: "🦜" },
    { id: 4, name: "Thumper", type: "Rabbit", location: "Chicago, IL", img: "https://www.thepetexpress.co.uk/blog-admin/wp-content/uploads/2012/05/shutterstock_722171287.jpg", emoji: "🐰" },
    { id: 5, name: "Goldie", type: "Fish", location: "Houston, TX", img: "https://www.hepper.com/wp-content/uploads/2022/09/woman-playing-with-pet-goldfish.jpg", emoji: "🐟" },
  ];

  // Community Feed
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", content: "Check out my playful pup!", img: "https://placedog.net/300/200?id=2" },
    { id: 2, user: "Bob", content: "My cat Luna is napping like a boss.", img: "https://www.thesprucepets.com/thmb/OoMBiCxD3B02Jx-WO9dmY0DAaaI=/4000x0/filters:no_upscale():strip_icc()/cats-recirc3_2-1f5de201af94447a9063f83249260aff.jpg" },
  ]);
  const [newPost, setNewPost] = useState("");

  const handlePost = () => {
    if (!newPost.trim()) return;
    const post = { id: Date.now(), user: "You", content: newPost, img: "" };
    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <main className="pt-32 px-6 md:px-16 pb-12 bg-gradient-to-b from-pink-50 via-yellow-50 to-blue-50 min-h-screen overflow-hidden">

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black">PetPeeps Community</h1>
        <p className="mt-4 text-lg text-black">
          A fun hub for pet lovers to share, laugh, and celebrate their furry friends!
        </p>
      </section>

      {/* Fun Activities */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">Fun Activities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
              <div className="text-4xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{activity.title}</h3>
              <p className="text-gray-700">{activity.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Pets */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Meet Fun Pets</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {funPets.map((pet) => (
            <div key={pet.id} className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
              <img src={pet.img} alt={pet.name} className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{pet.emoji} {pet.name}</h3>
                <p className="text-gray-600">{pet.type} - {pet.location}</p>
                <span className="inline-block mt-2 bg-pink-200 text-pink-800 px-2 py-1 rounded-full text-sm font-semibold animate-pulse">Friendly</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Feed */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Community Feed</h2>

        {/* New Post Input */}
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Share something about your pet..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          <button
            onClick={handlePost}
            className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Post
          </button>
        </div>

        {/* Posts */}
        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4">
              {post.img && <img src={post.img} alt="pet" className="w-24 h-24 object-cover rounded-lg" />}
              <div className="flex-1 text-left">
                <p className="font-semibold text-purple-700">{post.user}</p>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
