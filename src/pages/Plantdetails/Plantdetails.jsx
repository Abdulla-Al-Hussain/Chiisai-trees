import { Link, useNavigate, useParams } from "react-router-dom";
import usePlants from "../../hooks/usePlants";
import { deletePlant } from "../../services/bonsaiServices";
import useAuth from "../../hooks/useAuth";
import PlantCard from "../../components/home/PlantCard";

function PlantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
const { user } = useAuth();
  const { plants, loading } = usePlants();

  const plant = plants.find(
    (p) => String(p.id) === String(id)
  );

  async function handleDelete() {
    const confirmDelete = window.confirm(
      "Delete this bonsai permanently?"
    );

    if (!confirmDelete) return;

    try {
      await deletePlant(plant.id);

      alert("Bonsai deleted successfully.");

      navigate("/plants");

    } catch (error) {
      console.error(error);

      alert("Failed to delete bonsai.");
    }
  }

  if (loading) {
    return (
      <div className="text-center text-white py-20">
        Loading bonsai...
      </div>
    );
  }

  if (!plant) {
    return (
      <div className="text-center text-white py-20">
        Bonsai not found.
      </div>
    );
  }
  return (
    <section className="py-20">

      <div
        className="
          max-w-5xl
          mx-auto
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          overflow-hidden
        "
      >

        <div className="p-10">

          <h1 className="text-5xl font-bold text-white mb-3">
            {plant.tree}
          </h1>

          <p className="text-xl italic text-white/70 mb-8">
            {plant.scientificName}
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-white">

            <div>
              <span className="font-bold">Style:</span>
              {" "}
              {plant.style}
            </div>

            <div>
              <span className="font-bold">Collected:</span>
              {" "}
              {plant.from}
            </div>

            <div>
              <span className="font-bold">Age:</span>
              {" "}
              {plant.age}
            </div>

            <div>
              <span className="font-bold">Total Repot:</span>
              {" "}
              {plant.totalRepot}
            </div>

            <div>
              <span className="font-bold">Last Repot:</span>
              {" "}
              {plant.lastRepot}
            </div>

            <div>
              <span className="font-bold">Photo Year:</span>
              {" "}
              {plant.photoYear}
            </div>

          </div>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/plants"
              className="
                btn
                bg-white/10
                border-white/20
                text-white
              "
            >
              ← Back
            </Link>
{user && (
  <>
    <Link
      to={`/dashboard/edit-plant/${plant.id}`}
      className="
        btn
        bg-green-600
        hover:bg-green-500
        border-none
        text-white
      "
    >
      Edit Bonsai
    </Link>

    <button
      onClick={handleDelete}
      className="
        btn
        bg-red-600
        hover:bg-red-500
        border-none
        text-white
      "
    >
      Delete Bonsai
    </button>
  </>
)}

          </div>

        </div>

      </div>

    </section>
  );
}

export default PlantDetails;