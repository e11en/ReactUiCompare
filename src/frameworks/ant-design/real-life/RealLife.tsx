import { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "antd";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";
import { theme } from "./theme";

// Crappy way of only theming this page unfortunately
// Ant Design doesn't offer a way to do this without
// overriding the styling of the examples as well.
const Wrapper = styled.div`
  header,
  footer {
    background-color: ${theme.primary};
  }

  footer a {
    color: ${theme.secondary}!important;

    &:hover {
      color: #ff6c37ab !important;
    }
  }

  .ant-btn-primary {
    background-color: ${theme.secondary};
    border-color: ${theme.secondary};
  }

  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background-color: ${theme.primary};
    border-color: ${theme.primary};
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    border-color: ${theme.primary};
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: ${theme.primary};
    top: -4.5px;
  }

  .ant-input {
    border-radius: ${theme.borderRadius};
  }

  .ant-switch-checked {
    background-color: ${theme.secondary};
  }
`;

export const RealLife = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <PageWrapper>
        <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
        <Content />
        <Footer />
      </PageWrapper>
      <Button
        type="primary"
        href="https://github1s.com/e11en/ReactUiCompare/blob/main/src/frameworks/ant-design/real-life/RealLife.tsx"
        target="_blank"
        rel="noreferrer"
      >
        Look at code
      </Button>
    </Wrapper>
  );
};
