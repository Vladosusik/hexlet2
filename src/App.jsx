import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs";
import ProgramsSection from "./components/ProgramsSection/ProgramsSection";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div style={{ minHeight: "100vh", backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <CategoryTabs />
                <ProgramsSection />
              </main>
            }
          />
          <Route
            path="/catalog"
            element={
              <main>
                <CategoryTabs />
                <ProgramsSection />
              </main>
            }
          />
          <Route
            path="*"
            element={
              <main>
                <HeroSection />
                <CategoryTabs />
                <ProgramsSection />
              </main>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
