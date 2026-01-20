import { planets } from "@/data/planets";

export const getPlanetData = () => {
  return planets;
};

export const getDefaultPlanet = () => {
  if (!planets || planets.length === 0) {
    return null;
  }
  return planets[0];
};
