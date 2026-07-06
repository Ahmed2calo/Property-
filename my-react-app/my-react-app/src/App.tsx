import { useEffect, useState } from "react";
import PropertyCard from "./Components/PropertyCard";
import type { Property } from "./types/property";
import Navbar from "./Components/Navbar";

const API =
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/property-listing-data.json";

function App() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [selectedLocations] = useState<string[]>([]);
  const [superhostOnly] = useState(false);
  const [bedrooms] = useState<number | null>(null);

  // Fetch properties
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }

        const data: Property[] = await response.json();
        setProperties(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter properties
  const filteredProperties = properties.filter((property) => {
    const locationMatch =
      selectedLocations.length === 0 ||
      selectedLocations.includes(property.location);

    const superhostMatch =
      !superhostOnly || property.superhost;

    const bedroomMatch =
      bedrooms === null ||
      property.capacity.bedroom === bedrooms;

    return (
      locationMatch &&
      superhostMatch &&
      bedroomMatch
    );
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading...
      </div>
    );
  }

  return (
<div className="min-h-screen bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100">    <div className="max-w-7xl mx-auto px-6 py-10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-8 pt-16 pb-10"></div>
<section id="properties" className="scroll-mt-24">

  {/* Header */}
  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10">
    <div>
      <h1 className="text-4xl font-bold text-gray-900">
        Property Listing
      </h1>

      <p className="text-gray-500 mt-2">
        {filteredProperties.length} stays
      </p>
        </div>

        {/* Filters go here later */}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
    {filteredProperties.map((property) => (
      <PropertyCard
        key={property.id}
        property={property}
          />
        ))}
      </div>

    </section>

{/* About Section */}




<section
  id="about"
  className="scroll-mt-24 mt-24 rounded-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-2xl p-12"
>

<div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-slate-800">
      About PropertyHub
    </h2>

    <p className="text-slate-500 mt-3 max-w-3xl mx-auto">
      PropertyHub helps travelers discover comfortable and affordable
      accommodations around the world. Browse verified listings, compare
      prices, and find the perfect place for your next trip.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="bg-slate-50 rounded-2xl p-6 text-center shadow">
      <div className="text-4xl mb-4">🏠</div>

      <h3 className="text-xl font-semibold text-slate-800">
        Quality Properties
      </h3>

      <p className="text-slate-500 mt-3">
        Explore carefully selected properties with detailed information,
        ratings, and pricing.
      </p>
    </div>

    <div className="bg-slate-50 rounded-2xl p-6 text-center shadow">
      <h3 className="text-xl font-semibold text-slate-800">
        Trusted Hosts
      </h3>

      <p className="text-slate-500 mt-3">
        Stay with trusted hosts and easily identify superhosts for a better
        experience.
      </p>
    </div>

    <div className="bg-slate-50 rounded-2xl p-6 text-center shadow">
      <div className="text-4xl mb-4">🌍</div>

      <h3 className="text-xl font-semibold text-slate-800">
        Worldwide Destinations
      </h3>

      <p className="text-slate-500 mt-3">
        Find accommodations in multiple locations and choose the one that
        best suits your travel plans.
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section
  id="contact"
  className="scroll-mt-24 mt-24 bg-white rounded-3xl shadow-2xl p-12"
>
          <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Contact Us
          </h2>

          <p className="text-slate-500 mt-2">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-slate-800">Email</h3>
              <p className="text-slate-600">
                support@propertyhub.com
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Phone</h3>
              <p className="text-slate-600">
                +971 50 123 4567
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-800">Location</h3>
              <p className="text-slate-600">
                Abu Dhabi, United Arab Emirates
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full rounded-xl border-2 border-slate-200 p-4 focus:border-blue-500 focus:ring-4 focus:ring-blue-200 outline-none">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button 
              type="submit"
className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-105 hover:shadow-xl transition duration-300"            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 bg-slate-900 text-white py-10 rounded-t-3xl text-center">
        © 2026 PropertyHub. All rights reserved.
      </footer>
    </div>
  </div>
  );
}

export default App;