import React from "react";
import { planets } from "@/data/planets";
import Box from "@mui/material/Box";
import Nav from "@/components/nav-bar/Nav";
import PlanetComponent from "@/components/planet/Planet";

const Planet = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const planet = planets[Number(slug)];

  console.log("[slug]/page - slug:", slug);
  console.log("[slug]/page - planet:", planet);
  console.log("[slug]/page - planet type:", typeof planet);

  return (
    <Box>
      <Nav />
      <PlanetComponent planet={planet} />
    </Box>
  );
};

export default Planet;
