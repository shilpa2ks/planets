import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavLink from "./NavLink";
import { planets } from "@/data/planets";

const Nav = () => {
  console.log("Nav - planets:", planets);
  console.log(
    "Nav - planets type:",
    typeof planets,
    "isArray:",
    Array.isArray(planets),
  );

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
        {planets.map((planet) => {
          console.log(
            "Nav - mapping planet:",
            planet,
            "id:",
            planet.id,
            "name:",
            planet.name,
          );
          return (
            <NavLink
              key={planet.id}
              planetId={planet.id}
              planetName={planet.name}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Nav;
