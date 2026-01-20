"use client";

import { useCallback, useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import dataJson from "@/data/data.json";
import Image from "next/image";
import { IPlanet } from "../types";
import PlanetaryStats from "../planetary-stats/PlanetaryStats";
import ListOptions from "./ListOptions";
import styles from "../styles.module.scss";

const PlanetComponent = ({ planet }: { planet?: IPlanet }) => {
  const data = (dataJson as any[]) || [];
  const defaultPlanet = planet || data[0];

  const { imageStyle } = styles;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [content, setContent] = useState<string>(
    defaultPlanet?.overview?.content || "",
  );
  const [source, setSource] = useState<string>(
    defaultPlanet?.overview?.source || "",
  );
  const [image, setImage] = useState<string>(
    defaultPlanet?.images?.planet || "",
  );

  const handleListItemClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      setSelectedIndex(index);

      if (index === 0) {
        setContent(defaultPlanet?.overview?.content || "");
        setSource(defaultPlanet?.overview?.source || "");
        setImage(defaultPlanet?.images?.planet || "");
      } else if (index === 1) {
        setContent(defaultPlanet?.structure?.content || "");
        setSource(defaultPlanet?.structure?.source || "");
        setImage(defaultPlanet?.images?.internal || "");
      } else if (index === 2) {
        setContent(defaultPlanet?.geology?.content || "");
        setSource(defaultPlanet?.geology?.source || "");
        setImage(defaultPlanet?.images?.planet || "");
      } else {
        setContent(defaultPlanet?.overview?.content || "");
        setImage(defaultPlanet?.images?.planet || "");
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
            alt={defaultPlanet?.name || "Planet"}
            width={300}
            height={300}
            priority
          />
          {selectedIndex !== null && selectedIndex === 2 && (
            <Image
              src={defaultPlanet?.images?.geology || ""}
              alt={defaultPlanet?.name || "Planet"}
              width={180}
              height={180}
              className={imageStyle}
              loading="lazy"
            />
          )}
        </Box>
        <Box width={"30vw"}>
          <Typography variant="h1">
            {defaultPlanet?.name || "Planet"}
          </Typography>
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
          data={defaultPlanet?.rotation || ""}
        />
        <PlanetaryStats
          name={"revolution time"}
          data={defaultPlanet?.revolution || ""}
        />
        <PlanetaryStats name={"radius"} data={defaultPlanet?.radius || ""} />
        <PlanetaryStats
          name={"Average temp."}
          data={defaultPlanet?.temperature || ""}
        />
      </Box>
    </Container>
  );
};

export default React.memo(PlanetComponent);
