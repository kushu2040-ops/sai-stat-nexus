import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark" | "high-contrast";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, then system preference, then default to light
    const savedTheme = localStorage.getItem("sai-dashboard-theme") as Theme;
    if (savedTheme && ["light", "dark", "high-contrast"].includes(savedTheme)) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    
    return "light";
  });

  useEffect(() => {
    // Save theme to localStorage
    localStorage.setItem("sai-dashboard-theme", theme);
    
    // Apply theme to document
    const root = document.documentElement;
    
    // Remove existing theme classes
    root.classList.remove("light", "dark", "high-contrast");
    
    // Add current theme class
    root.classList.add(theme);
    
    // For high contrast, we'll add additional styling
    if (theme === "high-contrast") {
      root.style.setProperty("--background", "0 0% 0%"); // Pure black
      root.style.setProperty("--foreground", "0 0% 100%"); // Pure white
      root.style.setProperty("--card", "0 0% 5%"); // Very dark gray
      root.style.setProperty("--border", "0 0% 20%"); // Medium gray
      root.style.setProperty("--primary", "60 100% 50%"); // High contrast yellow
      root.style.setProperty("--primary-foreground", "0 0% 0%"); // Black text on yellow
    } else {
      // Reset custom properties for other themes
      root.style.removeProperty("--background");
      root.style.removeProperty("--foreground");
      root.style.removeProperty("--card");
      root.style.removeProperty("--border");
      root.style.removeProperty("--primary");
      root.style.removeProperty("--primary-foreground");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};