import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NavLink from "./NavLink";
import { planets } from "@/data/planets";

const Nav = (): JSX.Element => {
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
          return <NavLink key={planet.id} planetName={planet.name} />;
        })}
      </Box>
    </Box>
  );
};

export default Nav;
