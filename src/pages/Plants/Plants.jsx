import { useMemo, useState } from "react";
import usePlants from "../../hooks/usePlants";
import PlantCard from "../../components/home/PlantCard";

function Plants() {
  const { plants, loading } = usePlants();

  const [search, setSearch] = useState("");
  const [styleFilter, setStyleFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Get all unique styles
  const styles = [
    "All",
    ...new Set(plants.map((plant) => plant.style).filter(Boolean)),
  ];

  // Statistics
  const totalTrees = plants.length;

  const totalStyles = new Set(
    plants.map((plant) => plant.style)
  ).size;

  const oldestYear =
    plants.length > 0
      ? Math.min(
          ...plants.map((plant) =>
            new Date(plant.from).getFullYear()
          )
        )
      : "-";

  const newestYear =
    plants.length > 0
      ? Math.max(
          ...plants.map((plant) =>
            new Date(plant.from).getFullYear()
          )
        )
      : "-";

  // Search + Filter + Sort
  const filteredPlants = useMemo(() => {
    let result = [...plants];

    // Search
    result = result.filter((plant) => {
      const tree = plant.tree?.toLowerCase() || "";
      const scientific = plant.scientificName?.toLowerCase() || "";

      return (
        tree.includes(search.toLowerCase()) ||
        scientific.includes(search.toLowerCase())
      );
    });

    // Style Filter
    if (styleFilter !== "All") {
      result = result.filter((plant) => plant.style === styleFilter);
    }

    // Sorting
    switch (sortBy) {
      case "name":
        result.sort((a, b) => a.tree.localeCompare(b.tree));
        break;

case "age":
  result.sort((a, b) => {
    const getDays = (ageString) => {
      const years = parseInt(ageString.match(/(\d+)\s*Years?/)?.[1] || 0);
      const months = parseInt(ageString.match(/(\d+)\s*Months?/)?.[1] || 0);
      const days = parseInt(ageString.match(/(\d+)\s*Days?/)?.[1] || 0);

      return years * 365 + months * 30 + days;
    };

    return getDays(b.age) - getDays(a.age);
  });
  break;
      case "from":
        result.sort(
          (a, b) => new Date(b.from) - new Date(a.from)
        );
        break;

      default:
        break;
    }

    return result;
  }, [plants, search, styleFilter, sortBy]);

  if (loading) {
    return (
      <div className="text-center text-white text-xl py-20">
        Loading bonsai collection...
      </div>
    );
  }

  return (
    <section className="py-20">

      <h1 className="text-5xl font-bold text-center text-white">
        Bonsai Collection
      </h1>

      <p className="text-center text-white/70 mt-4 mb-12">
        Explore every bonsai in the Chiisai Trees collection.
      </p>

      {/* Statistics */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
          <div className="text-4xl">🌳</div>
          <h2 className="text-3xl font-bold text-white mt-2">
            {totalTrees}
          </h2>
          <p className="text-white/70 mt-1">
            Total Trees
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
          <div className="text-4xl">🎨</div>
          <h2 className="text-3xl font-bold text-white mt-2">
            {totalStyles}
          </h2>
          <p className="text-white/70 mt-1">
            Styles
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
          <div className="text-4xl">📅</div>
          <h2 className="text-3xl font-bold text-white mt-2">
            {oldestYear}
          </h2>
          <p className="text-white/70 mt-1">
            Oldest Collection
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 text-center">
          <div className="text-4xl">🌱</div>
          <h2 className="text-3xl font-bold text-white mt-2">
            {newestYear}
          </h2>
          <p className="text-white/70 mt-1">
            Newest Collection
          </p>
        </div>

      </div>

      {/* Search + Filter + Sort */}

      <div className="grid md:grid-cols-3 gap-4 mb-10">

        <input
          type="text"
          placeholder="🔍 Search by Tree or Scientific Name..."
          className="input input-bordered bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select bg-white/10 border-white/20 text-white"
          value={styleFilter}
          onChange={(e) => setStyleFilter(e.target.value)}
        >
          {styles.map((style) => (
            <option key={style} value={style}>
              {style}
            </option>
          ))}
        </select>

        <select
          className="select bg-white/10 border-white/20 text-white"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Tree Name (A-Z)</option>
          <option value="age">Age (Highest)</option>
          <option value="from">Newest Collected</option>
        </select>

      </div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {filteredPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
          />
        ))}

      </div>

      {filteredPlants.length === 0 && (
        <p className="text-center text-white mt-10 text-lg">
          No bonsai found.
        </p>
      )}

    </section>
  );
}

export default Plants;