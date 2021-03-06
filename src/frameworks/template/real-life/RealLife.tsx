import { useState } from "react";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <PageWrapper>
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Content />
        <Footer />
      </PageWrapper>

      <a
        href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/template/real-life/RealLife.tsx"
        target="_blank"
        rel="noreferrer"
      >
        Look at code
      </a>
    </>
  );
};
