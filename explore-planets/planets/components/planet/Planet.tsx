"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

interface IPlanet {
  name: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  overview: {
    content: string;
  };
  structure: {
    content: string;
  };
  geology: {
    content: string;
  };
}

const PlanetComponent = ({ planet }: { planet: IPlanet }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [content, setContent] = useState<string>(planet?.overview?.content);
  const [image, setImage] = useState<string>(planet?.images?.planet);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);

    if (index === 0) {
      setContent(planet?.overview?.content);
      setImage(planet?.images?.planet);
    } else if (index === 1) {
      setContent(planet?.structure?.content);
      setImage(planet?.images?.internal);
    } else if (index === 2) {
      setContent(planet?.geology?.content);
      setImage(planet?.images?.geology);
    } else {
      setContent(planet?.overview?.content);
      setImage(planet?.images?.planet);
    }
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Image src={image} alt={planet.name} width={200} height={200} />
      <Box ml="10rem" width="400px">
        <Typography variant="h3">{planet.name}</Typography>
        <Typography variant="body1" mt="1rem">
          {content}
        </Typography>
        <List component="nav">
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemText primary="OVERVIEW" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemText primary="INTERNAL STRUCTURE" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 2}
            onClick={(event) => handleListItemClick(event, 2)}
          >
            <ListItemText primary="SURFACE GEOLOGY" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default PlanetComponent;
