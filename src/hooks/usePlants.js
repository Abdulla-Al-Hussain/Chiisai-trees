import { useEffect, useState } from "react";
import { getAllPlants } from "../services/bonsaiServices";

export default function usePlants() {
  const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const data = await getAllPlants();

        console.log(data); // We need this temporarily

        setPlants(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPlants();
  }, []);

  return { plants, loading };
}