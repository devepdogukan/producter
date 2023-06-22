import React from "react";
import styles from "./../layout.module.scss";
import Logo from "@/assets/logo.png";
import Plus from "@/icons/plus";
import Controls from "@/icons/controls";
import Button from "@/components/Button";
import Filter from "@/icons/filter";
import Search from "@/icons/search";
import { useDialogStore } from "@/stores";
export default function Header() {
  const set = useDialogStore((state) => state.setOpenedDialog);
  return (
    <div className={styles.appLayoutHeader}>
      <div className={styles.logo}>
        <img src={Logo} />
        <div className={styles.divider}></div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.actions}>
          <div className={styles.search}>
            <Search />
            <input placeholder="Search" className={styles.searchInput} />
          </div>
          <Button>
            <Controls />
          </Button>
          <Button>
            <Filter />
          </Button>
        </div>
        <Button
          variant="outlined"
          color="blue"
          onClick={() => set({ type: "NewItem" })}
        >
          <Plus />
        </Button>
      </div>
    </div>
  );
}
