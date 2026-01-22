import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import NavLink from "./NavLink";
import { planets } from "@/data/planets";
import DrawerMenu from "./DrawerMenu";
import styles from "./styles.module.scss";
import { BREAKPOINTS } from "../constants";

const Nav = (): JSX.Element => {
  const { navContainer } = styles;
  const isTabletOrBelow = useMediaQuery(BREAKPOINTS.TABLET);

  return (
    <Box className={navContainer}>
      {isTabletOrBelow && <DrawerMenu />}
      <Typography variant="h1" sx={{ fontSize: "2rem" }}>
        Planet Facts
      </Typography>
      {!isTabletOrBelow && (
        <Box display={"flex"} gap={"1rem"}>
          {planets.map((planet) => (
            <NavLink key={planet.id} planetName={planet.name} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Nav;
