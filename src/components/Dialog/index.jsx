import React, { Suspense, useRef, lazy } from "react";
import styles from "./styles.module.scss";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDialogStore } from "@/stores";
import Close from "@/icons/close";
import Button from "../Button";

export default function Dialog() {
  const dialogRef = useRef();
  const close = useDialogStore((state) => state.close);
  const activeDialog = useDialogStore((state) => state.openedDialog);

  useClickOutside(dialogRef, () => close());

  if (!activeDialog) return null;

  const ActiveComponent = lazy(() =>
    import(`./${activeDialog.type.toLowerCase()}`)
  );

  return (
    <div className={styles.backdrop}>
      <div className={styles.dialogContainer}>
        <div className={styles.dialogWrapper} ref={dialogRef}>
          <div className={styles.close}>
            <Button onClick={() => close()}>
              <Close size="20px" />
            </Button>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <ActiveComponent close={close} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
