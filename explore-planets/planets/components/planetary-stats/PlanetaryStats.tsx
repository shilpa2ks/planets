import { Box, Typography } from "@mui/material";
import { PlanetaryStatsProps } from "../types";
import React from "react";

const PlanetaryStats = ({ name, data }: PlanetaryStatsProps) => {
  // Extra safety: ensure data is always a primitive string
  const safeData = String(data ?? "");

  console.log(
    "PlanetaryStats - name:",
    name,
    "data:",
    data,
    "type:",
    typeof data,
  );

  return (
    <Box
      p="1rem"
      border={"1px solid rgba(255, 255, 255, 0.26)"}
      textAlign={"left"}
      width={"13vw"}
    >
      <Typography
        color="rgba(255, 255, 255, 0.26)"
        fontSize={"0.85rem"}
        variant="h3"
      >
        {name.toUpperCase()}
      </Typography>
      <Typography fontSize={"1.5rem"} fontWeight={"800"}>
        {safeData}
      </Typography>
    </Box>
  );
};

export default React.memo(PlanetaryStats);
