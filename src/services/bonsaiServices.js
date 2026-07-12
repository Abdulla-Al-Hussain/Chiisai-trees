const API_URL =
  "https://script.google.com/macros/s/AKfycbxtJ-SN_JfNrX8sGUmLmpg59869DLx0ngUFKYMKP6UsZgkEpiFSbvcWHsQGw3fOWjk/exec";

export async function getAllPlants() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch plants");
  }

  return await response.json();
}

export async function addPlant(plant) {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(plant),
  });

  return response.text();
}

export async function updatePlant(plant) {
  await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      action: "update",
      ...plant,
    }),
  });
   
  return true;
}
export async function deletePlant(id) {
  await fetch(API_URL, {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
      action: "delete",
      id,
    }),
  });

  return true;
}