import React, { createContext, useState, useContext } from "react";

const PingContext = createContext();

export const usePingContext = () => useContext(PingContext);

export const PingProvider = ({ children }) => {
  const [pingData, setPingData] = useState(null);

  return (
    <PingContext.Provider value={{ pingData, setPingData }}>
      {children}
    </PingContext.Provider>
  );
};
