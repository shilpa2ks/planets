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
  images: PlanetImageProps;
  overview: PlanetDetailProps;
  structure: PlanetDetailProps;
  geology: PlanetDetailProps;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export interface ListOptionsProps {
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => void;
}

export interface PlanetaryStatsProps {
  name: string;
  data: string;
}
