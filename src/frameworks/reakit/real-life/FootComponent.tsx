import styled from "@emotion/styled";

import { theme } from "./theme";

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${theme.primary};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1em;

  a {
    color: ${theme.secondary};
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <a target="_blank" rel="noreferrer" href="https://ellenlangelaar.nl">
        Portfolio
      </a>
      <a target="_blank" rel="noreferrer" href="https://blog.ellenlangelaar.nl">
        Blog
      </a>
    </Footer>
  );
};

export default FooterComponent;
