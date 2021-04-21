import { useState } from "react";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";
import "antd/dist/antd.css";

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <PageWrapper>
      <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Content />
      <Footer />
    </PageWrapper>
  );
};
