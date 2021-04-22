import { Navbar, Button } from "react-bootstrap";
import styled from "@emotion/styled";

import { theme } from "./theme";

const Footer = styled(Navbar)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  bottom: 0;
  width: 100%;

  .btn-link {
    color: ${theme.secondary};
  }
`;

const FooterComponent = () => {
  return (
    <Footer bg="primary" expand="lg">
      <Button variant="link" target="_blank" href="https://ellenlangelaar.nl">
        Portfolio
      </Button>
      <Button
        variant="link"
        target="_blank"
        href="https://blog.ellenlangelaar.nl"
      >
        Blog
      </Button>
    </Footer>
  );
};

export default FooterComponent;
