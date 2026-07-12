import usePlants from "../../hooks/usePlants";
import PlantCard from "./PlantCard";

function FeaturedPlants() {
  const { plants, loading } = usePlants();

  if (loading) {
    return (
      <section className="py-24">
        <p className="text-center text-white text-xl">
          Plants are loading...
        </p>
      </section>
    );
  }

  return (
    <section className="py-24">

      <h2 className="text-center text-5xl font-bold text-white">
        Featured Bonsai Collection
      </h2>

      <p className="text-center text-white/70 mt-4 mb-14">
        A selection of bonsai from my personal collection.
      </p>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {plants.slice(0, 3).map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedPlants;