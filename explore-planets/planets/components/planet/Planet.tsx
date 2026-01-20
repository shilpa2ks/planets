"use client";

import { useCallback, useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import data from "@/data/data.json";
import Image from "next/image";
import { IPlanet } from "../types";
import PlanetaryStats from "../planetary-stats/PlanetaryStats";
import ListOptions from "./ListOptions";
import styles from "../styles.module.scss";

const planetData: IPlanet = data[0];
const PlanetComponent = ({ planet = planetData }: { planet?: IPlanet }) => {
  const { imageStyle } = styles;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [content, setContent] = useState<string>(planet.overview.content);
  const [source, setSource] = useState<string>(planet.overview.source);
  const [image, setImage] = useState<string>(planet.images.planet);

  const handleListItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);

      if (index === 0) {
        setContent(planet?.overview?.content);
        setSource(planet?.overview?.source);
        setImage(planet?.images?.planet);
      } else if (index === 1) {
        setContent(planet?.structure?.content);
        setSource(planet?.structure?.source);
        setImage(planet?.images?.internal);
      } else if (index === 2) {
        setContent(planet?.geology?.content);
        setSource(planet?.geology?.source);
        setImage(planet?.images?.planet);
      } else {
        setContent(planet?.overview?.content);
        setImage(planet?.images?.planet);
      }
    },
    [planet],
  );

  return (
    <Container maxWidth="md" sx={{ my: "2rem", height: "100vh" }}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ my: "2rem" }}
      >
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Image
            src={image}
            alt={planet.name}
            width={300}
            height={300}
            priority
          />
          {selectedIndex !== null && selectedIndex === 2 && (
            <Image
              src={planet?.images?.geology}
              alt={planet.name}
              width={180}
              height={180}
              className={imageStyle}
              loading="lazy"
            />
          )}
        </Box>
        <Box width={"30vw"}>
          <Typography variant="h1">{planet.name}</Typography>
          <Typography variant="body1" mt="1rem">
            {content}
          </Typography>
          <Typography variant="body1" mt="1rem">
            Source: <Link href={source}>Wikipedia</Link>
          </Typography>
          <ListOptions
            selectedIndex={selectedIndex}
            handleListItemClick={handleListItemClick}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        sx={{ my: "2rem" }}
      >
        <PlanetaryStats name={"rotation time"} data={planet.rotation} />
        <PlanetaryStats name={"revolution time"} data={planet.revolution} />
        <PlanetaryStats name={"radius"} data={planet.radius} />
        <PlanetaryStats name={"Average temp."} data={planet.temperature} />
      </Box>
    </Container>
  );
};

export default React.memo(PlanetComponent);
