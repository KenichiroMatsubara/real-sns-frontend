import { useSyncExternalStore } from "react";

const getWindowWidth = () => {
    return window.innerWidth;
};
const getWindowHeight = () => {
    return window.innerHeight;
};

const subscribeWindowSizeChange = (callback) => {
    window.addEventListener("resize", callback);
    return () => window.removeEventListener("resize", callback);
};

export const useWindowSize = () => {
    const width = useSyncExternalStore(subscribeWindowSizeChange, getWindowWidth);
    const height = useSyncExternalStore(
        subscribeWindowSizeChange,
        getWindowHeight
    );
    return { windowWidth: width, windowHeight: height };
};