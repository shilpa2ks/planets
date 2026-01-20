"use client";

import React from "react";
import { planets } from "@/data/planets";
import Box from "@mui/material/Box";
import Nav from "@/components/nav-bar/Nav";
import PlanetComponent from "@/components/planet/Planet";

const Planet = ({ params }: { params: { slug: string } }): JSX.Element => {
  const { slug } = params;
  const planetIndex = planets.findIndex(
    (planet) => planet.name.toLowerCase() === slug.toLowerCase(),
  );
  const planet =
    planetIndex !== -1 && planets[planetIndex]
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
