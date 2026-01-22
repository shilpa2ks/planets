import { memo } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlanetaryStatsProps } from "../types";
import styles from "./styles.module.scss";

const PlanetaryStats = memo(
  ({ name, data }: PlanetaryStatsProps): JSX.Element => {
    const { planetStats, planetName } = styles;

    return (
      <Box className={planetStats}>
        <Typography className={planetName}>{name.toUpperCase()}</Typography>
        <Typography fontSize="1.5rem" fontWeight="800">
          {data}
        </Typography>
      </Box>
    );
  },
);

PlanetaryStats.displayName = "PlanetaryStats";

export default PlanetaryStats;
