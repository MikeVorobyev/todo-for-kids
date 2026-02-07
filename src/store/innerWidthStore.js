import { create } from "zustand";

const useInnerWidth = create((set) => ({
    initInnerWidth: window.innerWidth,
    setInnerWidth: (newInnerWidth) => set((state) => ({initInnerWidth: newInnerWidth}))
            
}))

export default useInnerWidth