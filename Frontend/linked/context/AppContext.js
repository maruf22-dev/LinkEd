import { createContext, useContext, useState, useEffect } from 'react';


export const AppContext = createContext();
export function AppWrapper({ children }) {

  const [recieverID, setRecieverID] = useState("");
  let sharedState = {
      recieverID,
      setRecieverID
  }

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}