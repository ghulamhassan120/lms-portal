'use client'
import { createContext, useContext, useState } from "react";
export type ContextType = {
  activeMenu: string;
  setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
  collapsed:Boolean;
  setCollapsed:React.Dispatch<React.SetStateAction<Boolean>>;
  mobileMenu:Boolean;
  setMobileMenu:React.Dispatch<React.SetStateAction<Boolean>>;
};
export const SidebarContext = createContext<ContextType | undefined>(
  undefined
);
export const SidebarProvider = ({ children }:any) => {
  const [activeMenu, setActiveMenu] = useState<string>("Dashboard");
  const [collapsed, setCollapsed] = useState<Boolean>(false);
    const [mobileMenu, setMobileMenu] = useState<Boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        collapsed,
        setCollapsed,
        mobileMenu,
        setMobileMenu
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};