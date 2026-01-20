"use client";

import React, { useMemo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavLink from "./NavLink";
import { getPlanetData } from "@/lib/planetData";
import { IPlanet } from "../types";

const Nav = () => {
  const data = useMemo(() => getPlanetData() as IPlanet[], []);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={"1rem"}
      sx={{
        borderBottom: " 1px solid rgba(255, 255, 255, 0.26)",
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        Planet Facts
      </Typography>
      <Box display={"flex"} gap={"1rem"}>
        {Array.isArray(data) ? (
          data.map((planet: IPlanet) => (
            <NavLink
              key={planet.id}
              planetId={planet.id}
              planetName={planet.name}
            />
          ))
        ) : (
          <Typography>Loading planets...</Typography>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(Nav);
