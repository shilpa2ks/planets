import React from "react";
import Box from "@mui/material/Box";
import data from "../../data/data.json";
import NavLink from "./NavLink";
import { Typography } from "@mui/material";

const Nav = () => {
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
        {data.map((planet) => (
          <NavLink
            key={planet.id}
            planetId={planet.id}
            planetName={planet.name}
          />
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(Nav);
