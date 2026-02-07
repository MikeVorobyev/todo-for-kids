import { create } from "zustand";

const useCenterContainerHeight = create((set) => ({
    initHeight: 0,
    newHeight: (newHeight) => set((state) => ({initHeight: newHeight}))
}))

export default useCenterContainerHeight