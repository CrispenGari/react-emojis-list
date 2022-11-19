import React from "react";
import styles from "../styles/NotFound.module.css";
import Link from "next/link";
interface Props {}
const NotFound: React.FC<Props> = ({}) => {
  return (
    <div className={styles.not__found}>
      <h1>
        This page is not found. Navigate to{" "}
        <Link href="/" style={{}}>
          Home
        </Link>
        .
      </h1>
    </div>
  );
};

export default NotFound;
