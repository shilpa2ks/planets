import React from "react";
import { planets } from "@/data/planets";
import Box from "@mui/material/Box";
import Nav from "@/components/nav-bar/Nav";
import PlanetComponent from "@/components/planet/Planet";

const Planet = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const planet = planets[Number(slug)];

  return (
    <Box>
      <Nav />
      <PlanetComponent planet={planet} />
    </Box>
  );
};

export default Planet;
