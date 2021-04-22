import { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "@emotion/styled";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";
import { theme } from "./theme";
import Info from "components/InfoComponent";

// Crappy way of only theming this page unfortunately
// React Bootstrap doesn't offer a way to do this without
// overriding the styling of the examples as well.
const Wrapper = styled.div`
  .bg-primary {
    background-color: ${theme.primary}!important;
  }

  .btn-primary {
    background-color: ${theme.primary};
    border-color: ${theme.primary};
  }

  .btn-secondary {
    background-color: ${theme.secondary};
    border-color: ${theme.secondary};
  }

  .custom-control-input:checked ~ .custom-control-label::before {
    border-color: ${theme.secondary};
    background-color: ${theme.secondary};
  }
`;

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <Info>
        React Bootstrap doesn't have its own icons so we're borrowing them from
        other frameworks.
      </Info>
      <PageWrapper>
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Content />
        <Footer />
      </PageWrapper>

      <Button
        href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/bootstrap/real-life/RealLife.tsx"
        target="_blank"
      >
        Look at code
      </Button>
    </Wrapper>
  );
};
