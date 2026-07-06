import { type Property } from "../types/property";

type Props = {
  property: Property;
};

function PropertyCard({ property }: Props) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-500">
      <img
  src={property.image}
  alt={property.title}
  className="w-full h-64 object-cover"
/>

      <div className="p-6">

        {property.superhost && (
          <span className="border rounded-full px-2 py-1 text-xs">
            SUPER HOST
          </span>
        )}

<h2 className="text-xl font-bold text-slate-800 mt-4">
    
              {property.title}
      
              </h2>

     <p className="text-slate-500 mt-2">
  {property.description}
</p>

        <p>
          {property.capacity.people} Guests •{" "}
          {property.capacity.bedroom} Bedrooms
        </p>

      <p className="text-3xl font-bold text-blue-600 mt-4">
  ${property.price}
</p>

     <p className="text-yellow-500 font-semibold mt-2">
  ⭐ {property.rating}
</p>

      </div>
    </div>
  );
}

export default PropertyCard;