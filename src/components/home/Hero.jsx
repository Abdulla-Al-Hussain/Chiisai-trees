import { Link } from "react-router-dom";
import GlassCard from "../common/GlassCard";

function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center">
      <GlassCard className="max-w-xl lg:max-w-2xl p-8 md:p-12">

        <p className="text-green-300 text-lg mb-4">
          🌿 Welcome to Chiisai Trees
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
          Discover the Art of Bonsai
        </h1>

        <p className="mt-6 text-lg text-white/80 leading-8">
          A personal collection of living art,
          nurtured with patience and passion.
          Every bonsai tells a unique story of patience,
          care, and nature.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">

          <Link
            to="/plants"
            className="
            px-8
            py-4
            rounded-2xl
            bg-green-600
            hover:bg-green-500
            transition
            font-semibold
            "
          >
            Explore Collection
          </Link>


        </div>

      </GlassCard>
    </section>
  );
}

export default Hero;