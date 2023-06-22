import Routes from "./routes";
import React, { Fragment } from "react";
import Dialog from "./components/Dialog";
import { useDialogStore } from "./stores";

function App() {
  const openedDialog = useDialogStore((state) => state.openedDialog);
  return (
    <Fragment>
      <Routes />
      {openedDialog && <Dialog />}
    </Fragment>
  );
}

export default App;
