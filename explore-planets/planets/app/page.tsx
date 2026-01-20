import Nav from "@/components/nav-bar/Nav";
import Box from "@mui/material/Box";
import PlanetComponent from "@/components/planet/Planet";

export const dynamic = "force-dynamic";

export default function Home() {
  console.log("Home page rendering");

  return (
    <Box>
      <Nav />
      <PlanetComponent />
    </Box>
  );
}
