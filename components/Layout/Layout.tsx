import React from "react";
import { Head, Footer } from "../";
import styles from "./Layout.module.css";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <div className={styles.layout}>
        <div className={styles.layout__main}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
