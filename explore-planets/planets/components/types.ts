interface PlanetDetailProps {
  content: string;
  source: string;
}

interface PlanetImageProps {
  planet: string;
  internal: string;
  geology: string;
}

export interface IPlanet {
  id: string;
  name: string;
  color: string;
  images: PlanetImageProps;
  overview: PlanetDetailProps;
  structure: PlanetDetailProps;
  geology: PlanetDetailProps;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export interface SelectionOptionProps {
  color: string;
  selectedIndex: number;
  handleListItemClick: (index: number) => void;
}

export interface PlanetaryStatsProps {
  name: string;
  data: string;
}

export interface PlanetDisplayState {
  selectedIndex: number;
  content: string;
  source: string;
  image: string;
}
