import { API_KEY } from "./api_key";

async function fetchData() {
  const apiKey = API_KEY;
  const url = `https://api.api-ninjas.com/v1/quotes`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error fetching quotes: ${response.status}`);
    }

    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching quotes:", error);
  }
}

export { fetchData };
