import React from "react";
import { planets } from "@/data/planets";
import Box from "@mui/material/Box";
import Nav from "@/components/nav-bar/Nav";
import PlanetComponent from "@/components/planet/Planet";

const Planet = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Safely access planet and ensure it's valid
  const planetIndex = Number(slug);
  const planet =
    !isNaN(planetIndex) && planets[planetIndex]
      ? planets[planetIndex]
      : planets[0];

  return (
    <Box>
      <Nav />
      <PlanetComponent planet={planet} />
    </Box>
  );
};

export default Planet;
