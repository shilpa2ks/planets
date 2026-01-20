"use client";

import Link from "next/link";
import { NavLinkProps } from "../types";
import styles from "../styles.module.scss";

const { linkStyle } = styles;

const NavLink = ({ planetId, planetName }: NavLinkProps) => {
  console.log("NavLink - planetId:", planetId, "type:", typeof planetId);
  console.log("NavLink - planetName:", planetName, "type:", typeof planetName);

  const href = `/${planetId}`;

  return (
    <Link href={href} className={linkStyle} prefetch={true}>
      {String(planetName).toUpperCase()}
    </Link>
  );
};

export default NavLink;
