import { useState } from "react";
import { Button } from "reakit";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";
import Info from "components/InfoComponent";

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Info>
        Reakit doesn't have its own icons so we're borrowing them from other
        frameworks.
      </Info>
      <PageWrapper>
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Content />
        <Footer />
      </PageWrapper>

      <Button
        as="a"
        href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/reakit/real-life/RealLife.tsx"
        target="_blank"
        rel="noreferrer"
      >
        Look at code
      </Button>
    </>
  );
};
