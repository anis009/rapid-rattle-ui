import { createContext, useState } from "react";

export const TabContext = createContext();

const TabProvider = ({ children }) => {
  const [tabNumber, setTabNumber] = useState(0);
  const value = {
    tabNumber,
    setTabNumber,
  };
  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export default TabProvider;
