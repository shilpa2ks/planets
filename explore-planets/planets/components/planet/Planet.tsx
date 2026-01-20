"use client";

import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Image from "next/image";
import { IPlanet } from "../types";
import PlanetaryStats from "../planetary-stats/PlanetaryStats";
import ListOptions from "./ListOptions";
import styles from "../styles.module.scss";
import { planets } from "@/data/planets";

const PlanetComponent = ({ planet }: { planet?: IPlanet }) => {
  const defaultPlanet = planet || planets[0] || null;

  if (!defaultPlanet) {
    return (
      <Container maxWidth="md" sx={{ my: "2rem", height: "100vh" }}>
        <Typography>No planet data available</Typography>
      </Container>
    );
  }

  const { imageStyle } = styles;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  // Ensure all state values are strings
  const [content, setContent] = useState<string>(
    String(defaultPlanet.overview?.content || ""),
  );
  const [source, setSource] = useState<string>(
    String(defaultPlanet.overview?.source || ""),
  );
  const [image, setImage] = useState<string>(
    String(defaultPlanet.images?.planet || ""),
  );

  const handleListItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);

      if (index === 0) {
        setContent(String(defaultPlanet.overview?.content || ""));
        setSource(String(defaultPlanet.overview?.source || ""));
        setImage(String(defaultPlanet.images?.planet || ""));
      } else if (index === 1) {
        setContent(String(defaultPlanet.structure?.content || ""));
        setSource(String(defaultPlanet.structure?.source || ""));
        setImage(String(defaultPlanet.images?.internal || ""));
      } else if (index === 2) {
        setContent(String(defaultPlanet.geology?.content || ""));
        setSource(String(defaultPlanet.geology?.source || ""));
        setImage(String(defaultPlanet.images?.planet || ""));
      } else {
        setContent(String(defaultPlanet.overview?.content || ""));
        setImage(String(defaultPlanet.images?.planet || ""));
      }
    },
    [defaultPlanet],
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
            alt={defaultPlanet.name || "Planet"}
            width={300}
            height={300}
            priority
          />
          {selectedIndex !== null && selectedIndex === 2 && (
            <Image
              src={defaultPlanet.images?.geology || ""}
              alt={defaultPlanet.name || "Planet"}
              width={180}
              height={180}
              className={imageStyle}
              loading="lazy"
            />
          )}
        </Box>
        <Box width={"30vw"}>
          <Typography variant="h1">{defaultPlanet.name}</Typography>
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
        <PlanetaryStats
          name={"rotation time"}
          data={String(defaultPlanet.rotation || "")}
        />
        <PlanetaryStats
          name={"revolution time"}
          data={String(defaultPlanet.revolution || "")}
        />
        <PlanetaryStats
          name={"radius"}
          data={String(defaultPlanet.radius || "")}
        />
        <PlanetaryStats
          name={"Average temp."}
          data={String(defaultPlanet.temperature || "")}
        />
      </Box>
    </Container>
  );
};

export default PlanetComponent;
