import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import usePlants from "../../hooks/usePlants";
import { updatePlant } from "../../services/bonsaiServices";

function EditPlant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { plants, loading } = usePlants();

  const [plant, setPlant] = useState(null);

  useEffect(() => {
    if (!loading) {
      const foundPlant = plants.find(
        (p) => String(p.id) === String(id)
      );

      if (foundPlant) {
        setPlant(foundPlant);
      }
    }
  }, [plants, id, loading]);

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const updatedPlant = {
      id: plant.id,

      tree: form.tree.value,
      scientificName: form.scientificName.value,
      style: form.style.value,
      from: form.from.value,

      totalRepot: form.totalRepot.value,
      lastRepot: form.lastRepot.value,

      image: form.image.value,

      displayOrder: form.displayOrder.value,
      photoYear: form.photoYear.value,
    };

    try {
      await updatePlant(updatedPlant);

      alert("Bonsai updated successfully.");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert("Failed to update bonsai.");
    }
  }

  if (loading || !plant) {
    return (
      <div className="text-center text-white py-20">
        Loading bonsai...
      </div>
    );
  }

  return (
    <section className="py-20">

      <div
        className="
          max-w-3xl
          mx-auto
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-3xl
          p-10
        "
      >

        <Link
          to="/dashboard"
          className="
            btn
            mb-6
            bg-white/10
            border-white/20
            text-white
          "
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">
          Edit Bonsai
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5"
        >
          <label className="text-white">Tree Name</label>
          <input
            name="tree"
            defaultValue={plant.tree}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
          <label className="text-white">Scientific Name</label>
          <input
            name="scientificName"
            defaultValue={plant.scientificName}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Style</label>
          <input
            name="style"
            defaultValue={plant.style}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
          <label className="text-white">Collected Date</label>
          <input
            name="from"
            type="date"
            defaultValue={
              plant.from
                ? new Date(plant.from)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Total Repot</label>
          <input
            name="totalRepot"
            type="text"
            defaultValue={plant.totalRepot}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Last Repot</label>
          <input
            name="lastRepot"
            type="text"
            defaultValue={
              plant.lastRepot
                ? new Date(plant.lastRepot)
                    .toISOString()
                    .split("T")[0]
                : ""
            }
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Image URL</label>
          <input
            name="image"
            defaultValue={plant.image}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Display Order</label>
          <input
            name="displayOrder"
            type="number"
            defaultValue={plant.displayOrder}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
            <label className="text-white">Photo Year</label>
          <input
            name="photoYear"
            type="number"
            defaultValue={plant.photoYear}
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          <button
            type="submit"
            className="
              btn
              bg-green-600
              hover:bg-green-500
              border-none
              text-white
            "
          >
            Update Bonsai
          </button>

        </form>

      </div>

    </section>
  );
}

export default EditPlant;