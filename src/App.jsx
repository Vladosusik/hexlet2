import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import CategoryTabs from "./components/CategoryTabs/CategoryTabs.jsx";
import ProgramsSection from "./components/ProgramsSection/ProgramsSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
        }}
      >
        <Header
          dark={dark}
          onToggleDark={() => setDark((current) => !current)}
        />

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
            path="/login"
            element={
              <main className="login-main">
                <Login />
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

        <Footer />
      </div>
    </div>
  );
}

export default App;