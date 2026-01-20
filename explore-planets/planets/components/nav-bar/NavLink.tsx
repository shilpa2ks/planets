import Link from "next/link";
import { NavLinkProps } from "../types";
import styles from "../styles.module.scss";

const { linkStyle } = styles;

const NavLink = ({ planetId, planetName }: NavLinkProps) => {
  const href = `/${planetId}`;

  return (
    <Link href={href} className={linkStyle} prefetch={true}>
      {String(planetName).toUpperCase()}
    </Link>
  );
};

export default NavLink;
