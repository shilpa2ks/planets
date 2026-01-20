import rawData from "@/data/data.json";

// Ensure data is always an array, handle both direct array and module formats
export const getPlanetData = () => {
  try {
    // Check multiple possible formats Vercel might use
    let data: any = rawData;

    // If it's a module with default export
    if (data && typeof data === "object" && "default" in data) {
      data = data.default;
    }

    // Ensure it's an array
    if (!Array.isArray(data)) {
      console.warn("Planet data is not an array:", typeof data);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error getting planet data:", error);
    return [];
  }
};

export const getDefaultPlanet = () => {
  const data = getPlanetData();
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }
  return data[0];
};
