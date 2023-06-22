import React from "react";
import styles from "./layout.module.scss";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={styles.appContentWrapper}>
        <Sidebar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
