import { Layout, Button, Typography, Menu, Dropdown, List } from "antd";
import styled from "@emotion/styled";

const Footer = styled(Layout.Footer)`
  position: absolute;
  background-color: blue;
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
        <a>Portfolio</a>
        <a>Blog</a>
      </Wrapper>
    </Footer>
  );
};

export default FooterComponent;
