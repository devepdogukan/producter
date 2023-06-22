import { create } from 'zustand'


const useDialogStore = create((set) => ({
    openedDialog: null,
    setOpenedDialog: (openedDialog) => set({ openedDialog }),
    close: () => set({ openedDialog: null })
}))


export default useDialogStore