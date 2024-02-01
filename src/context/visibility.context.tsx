"use client";

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface VisibilityContextType {
  searchFlyout: boolean
  setSearchFlyout: Dispatch<SetStateAction<boolean>>
  toggleSearch: () => void
}

export const VisibilityContext = createContext<VisibilityContextType>({
  searchFlyout: false,
  setSearchFlyout: () => {},
  toggleSearch: () => {}
})

export const VisibilityProvider = ({ children }: {children: React.ReactNode}) => {
  const [searchFlyout, setSearchFlyout] = useState(false);

  const toggleSearch = () => setSearchFlyout(!searchFlyout);
  
  return (
    <VisibilityContext.Provider 
      value={{ 
        searchFlyout, 
        setSearchFlyout, 
        toggleSearch
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

// Create a custom hook to consume the Context
export const useVisibility = () => {  
  return useContext(VisibilityContext)
}