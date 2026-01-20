import Link from "next/link";
import styles from "./styles.module.scss";

const { linkStyle } = styles;

const NavLink = ({ planetName }: { planetName: string }): JSX.Element => {
  const href = `/${planetName.toLowerCase()}`;

  return (
    <Link href={href} className={linkStyle} prefetch={true}>
      {planetName.toUpperCase()}
    </Link>
  );
};

export default NavLink;
