import Link from "next/link";
import React from "react";
import { NavLinkProps } from "../types";
import styles from "../styles.module.scss";

const { linkStyle } = styles;

const NavLink = ({ planetId, planetName }: NavLinkProps) => {
  console.log("NavLink - planetId:", planetId, "type:", typeof planetId);
  console.log("NavLink - planetName:", planetName, "type:", typeof planetName);

  return (
    <Link href={planetId} className={linkStyle} prefetch={true}>
      {String(planetName).toUpperCase()}
    </Link>
  );
};

export default React.memo(NavLink);
