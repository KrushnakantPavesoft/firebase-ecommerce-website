import { createContext, use, useState } from "react";

const GlobalPagesContext = createContext({
  name: "Krushna",
});

export const GlobalPagesProvider = ({ children }) => {
  const [name, setName] = useState("Krushna");
  return (
    <>
      <GlobalPagesContext.Provider value={{ name }}>
        {children}
      </GlobalPagesContext.Provider>
      ;
    </>
  );
};

export const useGlobalPagesContext = () => use(GlobalPagesContext);
