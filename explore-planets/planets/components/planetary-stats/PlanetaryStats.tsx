import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlanetaryStatsProps } from "../types";

const PlanetaryStats = ({ name, data }: PlanetaryStatsProps) => {
  // Extra safety: ensure data is always a primitive string
  const safeData = String(data ?? "");

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

export default PlanetaryStats;
