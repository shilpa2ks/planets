import Nav from "@/components/nav-bar/Nav";
import Box from "@mui/material/Box";
import data from "@/data/data.json";
import PlanetComponent from "@/components/planet/Planet";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <Box>
      <Nav />
      <PlanetComponent planet={data[0]} />
    </Box>
  );
}
