import { Layout } from "antd";
import styled from "@emotion/styled";

const Footer = styled(Layout.Footer)`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Wrapper>
        <a target="_blank" rel="noreferrer" href="https://ellenlangelaar.nl">
          Portfolio
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://blog.ellenlangelaar.nl"
        >
          Blog
        </a>
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;
