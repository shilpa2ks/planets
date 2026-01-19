import Link from "next/link";
import React from "react";
import { NavLinkProps } from "./types";

const NavLink = ({ planetId, planetName }: NavLinkProps) => {
  return <Link href={planetId}>{planetName.toUpperCase()}</Link>;
};

export default NavLink;
