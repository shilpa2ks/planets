import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { PlanetaryStatsProps } from "../types";
import styles from "./styles.module.scss";

const PlanetaryStats = ({ name, data }: PlanetaryStatsProps): JSX.Element => {
  const { planetStats, planetName } = styles;
  return (
    <Box className={planetStats}>
      <Typography
        className={planetName}
        color="rgba(255, 255, 255, 0.26)"
        fontSize={"0.85rem"}
        variant="h3"
      >
        {name.toUpperCase()}
      </Typography>
      <Typography fontSize={"1.5rem"} fontWeight={"800"}>
        {data}
      </Typography>
    </Box>
  );
};

export default PlanetaryStats;
