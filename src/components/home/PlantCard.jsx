import GlassCard from "../common/GlassCard";
import { Link } from "react-router-dom";

function PlantCard({ plant }) {
  return (
    <Link to={`/plant/${plant.id}`}>
      <GlassCard
        className="
          overflow-hidden
          hover:-translate-y-2
          transition-all
          duration-300
          cursor-pointer
        "
      >
      {/* Image */}
      <div className="w-full h-72 flex items-center justify-center overflow-hidden bg-black/10">
           <img className="w-full h-full object-contain"
            src={`https://drive.google.com/thumbnail?id=${plant.image}&sz=w1000`}
             alt={plant.tree}
  />
</div>
 
          <div className="px-6 pt-4">
         <span className="text-xs text-green-300 tracking-widest uppercase">
         📷 Photo • {plant.photoYear}
         </span>
        </div>

      {/* Content */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-white">
          {plant.tree}
        </h2>

        <p className="italic text-green-300 mt-1">
          {plant.scientificName}
        </p>

        <div className="mt-6 space-y-3 text-white/90">

          <div className="flex justify-between">
            <span>Style</span>
            <span>{plant.style}</span>
          </div>

          <div className="flex justify-between">
            <span>From</span>
            <span>
              {new Date(plant.from).toLocaleDateString()}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Age</span>
            <span>{plant.age}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Repot</span>
            <span>{plant.totalRepot}</span>
          </div>

          <div className="flex justify-between">
            <span>Last Repot</span>
            <span>{plant.lastRepot}</span>
          </div>

        </div>

      </div>
      
    </GlassCard>
    
    </Link>
    
  );
}

export default PlantCard;