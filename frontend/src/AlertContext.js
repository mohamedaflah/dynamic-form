import React, { createContext, useContext } from "react";

const AlertContext = createContext();

export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const setAlertBanner = (message) => {
        console.log("Alert:", message); // Mock function
    };

    return <AlertContext.Provider value={{ setAlertBanner }}>{children}</AlertContext.Provider>;
};
