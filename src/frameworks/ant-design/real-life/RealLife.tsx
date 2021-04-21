import { useState } from "react";
import styled from "@emotion/styled";

import PageWrapper from "components/PageWrapperComponent";
import Header from "./HeaderComponent";
import Menu from "./MenuComponent";
import Footer from "./FootComponent";
import Content from "./ContentComponent";
import { theme } from "./theme";

// Crappy way of only theming this page unfortunately
// Ant Design doesn't offer a way to do this without
// overriding the styling of the examples as well.
const Wrapper = styled(PageWrapper)`
  header,
  footer {
    background-color: ${theme.primary};
  }

  a {
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
      <Header onMenuClick={() => setMenuOpen(!menuOpen)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Content />
      <Footer />
    </Wrapper>
  );
};
