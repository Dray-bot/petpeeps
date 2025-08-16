export default function VetsPage() {
  const vets = [
    { id: 1, name: "Dr. Sarah Thompson", specialty: "Small Animals", location: "New York, NY", phone: "(212) 555-0143", img: "https://www.primaryveterinarycare.com/portals/36/images/drsarah.jpg" },
    { id: 2, name: "Dr. Michael Lee", specialty: "Exotic Pets", location: "Los Angeles, CA", phone: "(310) 555-0192", img: "https://t3.ftcdn.net/jpg/02/03/86/26/360_F_203862664_1NsairRLnPNN79xGOWmsPXMNFDqRaZIR.jpg" },
    { id: 3, name: "Dr. Emily Carter", specialty: "Dogs & Cats", location: "Chicago, IL", phone: "(312) 555-0118", img: "https://allfourpawsvetrelief.com/wp-content/uploads/Siegel-scaled.jpg" },
    { id: 4, name: "Dr. Daniel Rodriguez", specialty: "Surgery Specialist", location: "Houston, TX", phone: "(713) 555-0177", img: "https://d2b0sstunfvm0v.cloudfront.net/image-31057-340.jpg?cachebuster=0" },
    { id: 5, name: "Dr. Olivia Martinez", specialty: "Preventive Care", location: "Phoenix, AZ", phone: "(602) 555-0136", img: "https://i0.wp.com/thewildvet.com.au/wp-content/uploads/2024/11/Olivia-Clarke.jpg?w=1300&ssl=1" },
    { id: 6, name: "Dr. James Wilson", specialty: "Dental Care", location: "Philadelphia, PA", phone: "(215) 555-0189", img: "https://azure2.wgp-cdn.co.uk/app-pet-product-marketing/posts/ForthgladeJG.jpg" },
    { id: 7, name: "Dr. Sophia Brown", specialty: "Emergency Care", location: "San Antonio, TX", phone: "(210) 555-0124", img: "https://cdcssl.ibsrv.net/ibimg/smb/1249x1561_80/webmgr/00/g/2/Media_2024/IMG_163-min_20240403_1627.jpg.webp?463e029c2522df08d6276886ee81e8ee" },
    { id: 8, name: "Dr. Ethan Davis", specialty: "Nutrition & Wellness", location: "San Diego, CA", phone: "(619) 555-0161", img: "https://cdcssl.ibsrv.net/ibimg/smb/460x613_80/webmgr/0o/5/p/ethan-1.jpg.webp?1d397cb46f47194aaac4f635c22954cb" },
  ];

  return (
    <main className="pt-32 px-6 md:px-16 pb-12 bg-sky-50 min-h-screen overflow-hidden">
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-black">Trusted Veterinarians Near You</h1>
        <p className="mt-4 text-lg text-sky-800">
          Connect with experienced vets across the United States. Find the right specialist for your pets’ needs.
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {vets.map((vet) => (
          <div key={vet.id} className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-200">
            <img src={vet.img} alt={vet.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-left">
              <h2 className="text-xl font-semibold text-sky-700">{vet.name}</h2>
              <p className="text-sm text-gray-500">{vet.specialty}</p>
              <p className="text-sm text-gray-500">Location: {vet.location}</p>
              <p className="text-sm text-gray-500">Phone: {vet.phone}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
