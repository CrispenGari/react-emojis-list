import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { DiNpm } from "react-icons/di";
interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.footer}>
      <p></p>
      <p>
        Copyright © {new Date().getFullYear()} React Emojify. All rights
        reserved.
      </p>
      <p>
        <Link href={""}>
          <DiNpm className={styles.footer__icon} />
        </Link>
        <Link href={"https://github.com/CrispenGari/react-emojify"}>
          <AiFillGithub className={styles.footer__icon} />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
