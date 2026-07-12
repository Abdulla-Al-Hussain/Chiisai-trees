import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

function Dashboard() {
  const { user, logout } = useAuth();

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
          p-10
        "
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Dashboard
        </h1>

        <p className="text-white/70 mb-10">
          Welcome back
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Collection */}
          <div>
           <Link
              to="/plants"
              className="bg-white/10 rounded-2xl 
              p-6 
              border border-white/20 
              text-center block
               hover:bg-white/20 transition"
            >
            <div className="text-5xl mb-3">🌳</div>

            <h2 className="text-white text-xl font-bold">
              Bonsai Collection
            </h2>

            <p className="text-white/70 mt-2">
              View all bonsai
            </p>
            </Link>
          </div>

          {/* Add Bonsai */}
          <Link
            to="/dashboard/add-plant"
            className="
              bg-white/10
              rounded-2xl
              p-6
              border border-white/20
              text-center
              block
              hover:bg-white/20
              transition
            "
          >
            <div className="text-5xl mb-3">➕</div>

            <h2 className="text-white text-xl font-bold">
              Add Bonsai
            </h2>

            <p className="text-white/70 mt-2">
              Add new bonsai
            </p>
          </Link>

          {/* Manage Bonsai */}
          <Link
            to="/plants"
            className="
              bg-white/10
              rounded-2xl
              p-6
              border border-white/20
              text-center
              block
              hover:bg-white/20
              transition
            "
          >
            <div className="text-5xl mb-3">✏️</div>

            <h2 className="text-white text-xl font-bold">
              Manage Bonsai
            </h2>

            <p className="text-white/70 mt-2">
              Edit or delete bonsai
            </p>
          </Link>

          {/* Logout */}
          <div
            className="
              bg-white/10
              rounded-2xl
              p-6
              border border-white/20
              text-center
            "
          >
            <div className="text-5xl mb-3">🚪</div>

            <button
              onClick={logout}
              className="
                btn
                bg-red-600
                hover:bg-red-500
                border-none
                text-white
                mt-4
              "
            >
              Logout
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Dashboard;