import { Link } from "react-router-dom";
import { addPlant } from "../../services/bonsaiServices";
async function handleSubmit(e) {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.elements);

  const form = e.target;

  const plant = {
    id: form.id.value,
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
    const result = await addPlant(plant);

    console.log(result);

    alert("Bonsai added successfully!");

    form.reset();
  }catch (error) {
  console.error("AddPlant Error:", error);

  alert(`Failed to add bonsai: ${error.message}`);
}
}

function AddPlant() {
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
          className="btn mb-6 bg-white/10 border-white/20 text-white"
        >
          ← Back to Dashboard
        </Link>

        <h1 className="text-4xl font-bold text-white mb-8">
          Add New Bonsai
        </h1>

        <form onSubmit={handleSubmit} className="grid gap-5">

          {/* ID */}
          <input
            name="id"
            type="number"
            placeholder="ID"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* Tree Name */}
          <input
            name="tree"
            type="text"
            placeholder="Tree Name"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* Scientific Name */}
          <input
            name="scientificName"
            type="text"
            placeholder="Scientific Name"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* Style */}
          <input
            name="style"
            type="text"
            placeholder="Style"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* From Date */}
          <div>
            <label className="text-white block mb-2">
              Collection Date
            </label>

            <input
              name="from"
              type="date"
              className="input input-bordered bg-white/10 border-white/20 text-white w-full"
              required
            />
          </div>

          {/* Total Repot */}
          <input
            name="totalRepot"
            type="text"
            placeholder="Total Repot"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* Last Repot */}
          <div>
            <label className="text-white block mb-2">
              Last Repot Date
            </label>

            <input
              name="lastRepot"
              type="text"
              className="input input-bordered bg-white/10 border-white/20 text-white w-full"
              required
            />
          </div>

          {/* Image URL */}
          <input
            name="image"
            type="text"
            placeholder="Image URL"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />
          {/* Display Order */}
<input
  name="displayOrder"
  type="number"
  placeholder="Display Order"
  className="input input-bordered bg-white/10 border-white/20 text-white"
  required/>

          {/* Photo Year */}
          <input
            name="photoYear"
            type="number"
            placeholder="Photo Year"
            className="input input-bordered bg-white/10 border-white/20 text-white"
            required
          />

          {/* Submit Button */}
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
            Add Bonsai
          </button>

        </form>

      </div>

    </section>
  );
}

export default AddPlant;