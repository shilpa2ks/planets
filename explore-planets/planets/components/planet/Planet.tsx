"use client";

import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import classnames from "classnames";
import { IPlanet, PlanetDisplayState } from "../types";
import PlanetaryStats from "../planetary-stats/PlanetaryStats";
import ListOptions from "./ListOptions";
import styles from "./styles.module.scss";
import { planets } from "@/data/planets";
import ButtonOptions from "./ButtonOptions";
import { BREAKPOINTS, SELECTION_INDEX } from "../constants";

const PlanetComponent = ({ planet }: { planet?: IPlanet }): JSX.Element => {
  const {
    container,
    imageContainer,
    imagePrimary,
    imageSecondary,
    summaryContainer,
    planetContent,
    planetContentBody,
    planetSource,
    sourceLinkStyle,
  } = styles;
  const defaultPlanet = planet || planets[0] || null;

  const [displayState, setDisplayState] = useState<PlanetDisplayState>({
    selectedIndex: SELECTION_INDEX.OVERVIEW,
    content: defaultPlanet.overview?.content,
    source: defaultPlanet.overview?.source,
    image: defaultPlanet.images?.planet,
  });

  const { selectedIndex, content, source, image } = displayState;

  const isTabletOrBelow = useMediaQuery(BREAKPOINTS.TABLET);

  if (!defaultPlanet) {
    return (
      <Container maxWidth="md" className={container}>
        <Typography>No planet data available</Typography>
      </Container>
    );
  }

  const handleListItemClick = useCallback(
    (index: number) => {
      let newState: PlanetDisplayState;

      switch (index) {
        case SELECTION_INDEX.STRUCTURE:
          newState = {
            selectedIndex: index,
            content: defaultPlanet.structure?.content,
            source: defaultPlanet.structure?.source,
            image: defaultPlanet.images?.internal,
          };
          break;
        case SELECTION_INDEX.GEOLOGY:
          newState = {
            selectedIndex: index,
            content: defaultPlanet.geology?.content,
            source: defaultPlanet.geology?.source,
            image: defaultPlanet.images?.planet,
          };
          break;
        case SELECTION_INDEX.OVERVIEW:
        default:
          newState = {
            selectedIndex: index,
            content: defaultPlanet.overview?.content,
            source: defaultPlanet.overview?.source,
            image: defaultPlanet.images?.planet,
          };
          break;
      }

      setDisplayState(newState);
    },
    [defaultPlanet],
  );

  return (
    <Container maxWidth="md" className={container}>
      <Stack spacing={20} direction={{ sm: "column", md: "row" }}>
        <Stack spacing={3} className={imageContainer}>
          <Image
            src={image}
            alt={defaultPlanet.name}
            className={imagePrimary}
            width={300}
            height={300}
            priority
          />
          {selectedIndex !== null && selectedIndex === 2 && (
            <Image
              src={defaultPlanet.images?.geology}
              alt={defaultPlanet.name}
              width={180}
              height={180}
              className={imageSecondary}
              loading="lazy"
            />
          )}
        </Stack>
        <Stack spacing={2} className={summaryContainer}>
          <Typography variant="h1" className={planetContent}>
            {defaultPlanet.name}
          </Typography>
          <Typography
            variant="body1"
            className={classnames(planetContentBody, planetContent)}
          >
            {content}
          </Typography>
          <Typography
            variant="body1"
            className={classnames(planetSource, planetContent)}
          >
            Source:
            <Link href={source} className={sourceLinkStyle}>
              Wikipedia
            </Link>
          </Typography>
          {isTabletOrBelow ? (
            <ButtonOptions
              color={defaultPlanet.color || ""}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          ) : (
            <ListOptions
              color={defaultPlanet.color}
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          )}
        </Stack>
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction={{ xs: "column", sm: "row" }}
        sx={{ pb: "25px" }}
      >
        <PlanetaryStats name={"rotation time"} data={defaultPlanet.rotation} />
        <PlanetaryStats
          name={"revolution time"}
          data={defaultPlanet.revolution}
        />
        <PlanetaryStats name={"radius"} data={defaultPlanet.radius} />
        <PlanetaryStats
          name={"Average temp."}
          data={defaultPlanet.temperature}
        />
      </Stack>
    </Container>
  );
};

export default PlanetComponent;
