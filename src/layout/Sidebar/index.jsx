import React from "react";
import styles from "./../layout.module.scss";
import List from "./list";
import { FOOTER_ITEMS, MENU_DEFAULT_ITEMS } from "./menu";
import user from "@/assets/user.png";
import Typography from "@/components/Typography";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <List items={MENU_DEFAULT_ITEMS} />
      <div className={styles.footer}>
        <List items={FOOTER_ITEMS} />
        <div className={styles.user}>
          <img src={user} />
          <Typography color="darkPrimary" fontWeight="500">Neil Larkins</Typography>
        </div>
        <div className={styles.company}>
          <p className={styles.avatar}>E</p>
          <Typography color="darkPrimary" fontWeight="500">Epodpay Inc.</Typography>
        </div>
      </div>
    </div>
  );
}
