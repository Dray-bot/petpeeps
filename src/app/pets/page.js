export default function PetsPage() {
  const pets = [
    { id: 1, name: "Bella", type: "Dog", age: "2 years", location: "New York, NY", img: "https://placedog.net/400/300?id=1" },
    { id: 2, name: "Milo", type: "Cat", age: "1 year", location: "Los Angeles, CA", img: "https://www.cdc.gov/healthy-pets/media/images/2024/04/Cat-on-couch.jpg" },
    { id: 3, name: "Luna", type: "Rabbit", age: "6 months", location: "Chicago, IL", img: "https://hips.hearstapps.com/hmg-prod/images/bunny-breeds-littlest-bunny-66bcd9a9995ed.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*" },
    { id: 4, name: "Charlie", type: "Dog", age: "3 years", location: "Houston, TX", img: "https://placedog.net/400/300?id=2" },
    { id: 5, name: "Coco", type: "Bird", age: "1 year", location: "Phoenix, AZ", img: "https://pet-health-content-media.chewy.com/wp-content/uploads/2025/04/16181508/202503bec-201709best-small-pet-birds-1024x615.jpg" },
    { id: 6, name: "Max", type: "Hamster", age: "8 months", location: "Philadelphia, PA", img: "https://framerusercontent.com/images/kpvGVqBAR1rso4zxIOemOjTLpcs.jpg" },
    { id: 7, name: "Daisy", type: "Rabbit", age: "1 year", location: "San Antonio, TX", img: "https://rabbitawarenessactiongroup.co.uk/wp-content/uploads/2022/05/KMP-Rabbitshoot-45-scaled.jpg" },
    { id: 8, name: "Oscar", type: "Cat", age: "3 years", location: "San Diego, CA", img: "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/persian-cat-in-yard-1-.jpg?sfvrsn=5e255eb2_4" },
    { id: 9, name: "Rocky", type: "Dog", age: "2 years", location: "Dallas, TX", img: "https://placedog.net/402/300?id=4" },
    { id: 10, name: "Nala", type: "Bird", age: "6 months", location: "San Jose, CA", img: "https://btjjungle.com/wp-content/uploads/2015/11/photodune-4652202-blue-budgie-parrot-pet-bird-xs.jpg" },
    { id: 11, name: "Mochi", type: "Hamster", age: "8 months", location: "Austin, TX", img: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/11/04/18/488803.jpg" },
    { id: 12, name: "Lily", type: "Dog", age: "1 year", location: "Jacksonville, FL", img: "https://placedog.net/403/300?id=5" },
    { id: 13, name: "Simba", type: "Cat", age: "2 years", location: "Fort Worth, TX", img: "https://www.hindustantimes.com/ht-img/img/2023/11/24/550x309/cat_care_thumb_1700822249833_1700822259379.jpg" },
    { id: 14, name: "Thumper", type: "Rabbit", age: "6 months", location: "Columbus, OH", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKOK_YXiAJdafkbWuG4Hk1sEmR8chQ4q9Tg&s" },
    { id: 15, name: "Tweety", type: "Bird", age: "1 year", location: "Charlotte, NC", img: "https://www.cdc.gov/healthy-pets/media/images/2024/04/Pet-bird-in-cage.jpg" },
    { id: 16, name: "Hammy", type: "Hamster", age: "7 months", location: "San Francisco, CA", img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Hamster_6.jpg?v=1645257957" },
  ];

  return (
    <main className="pt-32 px-6 md:px-16 pb-12 bg-sky-50 min-h-screen overflow-hidden">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black">Find Your Perfect Pet</h1>
        <p className="mt-4 text-lg text-sky-800">
          Explore pets available for adoption across the United States. Dogs, cats, rabbits, birds, and more await you!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pets.map((pet) => (
          <div key={pet.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
            <img src={pet.img} alt={pet.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-sky-700">{pet.name}</h2>
              <p className="text-sm text-gray-500">{pet.type} • {pet.age}</p>
              <p className="text-sm text-gray-500">Location: {pet.location}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
