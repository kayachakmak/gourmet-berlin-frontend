export default async function getCoordinates(address) {
  const response = await fetch("/api/getCoordinates", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ address }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  return response.json();
}

export function getCurrentDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0"); // adds leading zero if needed
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const year = today.getFullYear();

  return day + "/" + month + "/" + year;
}
