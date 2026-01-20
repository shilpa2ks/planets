import Link from "next/link";
import React from "react";
import { NavLinkProps } from "../types";
import styles from "../styles.module.scss";

const { linkStyle } = styles;

const NavLink = ({ planetId, planetName }: NavLinkProps) => {
  return (
    <Link href={planetId} className={linkStyle} prefetch={true}>
      {planetName.toUpperCase()}
    </Link>
  );
};

export default React.memo(NavLink);
