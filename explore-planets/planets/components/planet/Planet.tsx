"use client";

import { useCallback, useState } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import classnames from "classnames";
import { IPlanet } from "../types";
import PlanetaryStats from "../planetary-stats/PlanetaryStats";
import ListOptions from "./ListOptions";
import styles from "./styles.module.scss";
import { planets } from "@/data/planets";
import ButtonOptions from "./ButtonOptions";

const PlanetComponent = ({ planet }: { planet?: IPlanet }): JSX.Element => {
  const {
    container,
    imageContainer,
    imagePrimary,
    imageSecondary,
    summaryContainer,
    planetContent,
    planetContentBody,
  } = styles;
  const defaultPlanet = planet || planets[0] || null;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [content, setContent] = useState<string>(
    defaultPlanet.overview?.content,
  );
  const [source, setSource] = useState<string>(defaultPlanet.overview?.source);
  const [image, setImage] = useState<string>(defaultPlanet.images?.planet);

  const isTabletOrBelow = useMediaQuery("(max-width:900px)");

  if (!defaultPlanet) {
    return (
      <Container maxWidth="md" className={container}>
        <Typography>No planet data available</Typography>
      </Container>
    );
  }

  const handleListItemClick = useCallback(
    (index: number) => {
      setSelectedIndex(index);

      if (index === 0) {
        setContent(defaultPlanet.overview?.content);
        setSource(defaultPlanet.overview?.source);
        setImage(defaultPlanet.images?.planet);
      } else if (index === 1) {
        setContent(defaultPlanet.structure?.content);
        setSource(defaultPlanet.structure?.source);
        setImage(defaultPlanet.images?.internal);
      } else if (index === 2) {
        setContent(defaultPlanet.geology?.content);
        setSource(defaultPlanet.geology?.source);
        setImage(defaultPlanet.images?.planet);
      } else {
        setContent(defaultPlanet.overview?.content);
        setImage(defaultPlanet.images?.planet);
      }
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
          <Typography variant="body1" className={planetContent}>
            Source:
            <Link href={source} ml={"5px"}>
              Wikipedia
            </Link>
          </Typography>
          {isTabletOrBelow ? (
            <ButtonOptions
              selectedIndex={selectedIndex}
              handleListItemClick={handleListItemClick}
            />
          ) : (
            <ListOptions
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
