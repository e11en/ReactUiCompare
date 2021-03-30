import { Divider, Layout as AntDesignLayout, Row, Col } from "antd";
import styled from "styled-components";

import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const { Header, Footer, Sider, Content } = AntDesignLayout;

const LayoutWrapper = styled.div`
  font-size: large;
  text-align: center;

  & > section {
    border: 1px solid #d6d6d6;
    margin-bottom: 1em;
  }

  header,
  footer {
    background-color: #cfe8fc;
  }

  main {
    background-color: #ecf5fd;
  }

  aside {
    background-color: #d3e2ef;
  }
`;

const GridWrapper = styled.div`
  & > div {
    background: #cfe8fc;
    border: 1px solid #d6d6d6;
    color: #7d7d7d;
  }
`;

const Containers = () => {
  return (
    <ElementCard fullwidth title="Layout">
      <LayoutWrapper>
        <AntDesignLayout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <Header>Header</Header>
          <AntDesignLayout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </AntDesignLayout>
          <Footer>Footer</Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <Header>Header</Header>
          <AntDesignLayout>
            <Content>Content</Content>
            <Sider>Sider</Sider>
          </AntDesignLayout>
          <Footer>Footer</Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <Sider>Sider</Sider>
          <AntDesignLayout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </AntDesignLayout>
        </AntDesignLayout>
      </LayoutWrapper>
      <Code>
        {`
          <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Sider>Sider</Sider>
              <Content>Content</Content>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
        
          <Layout>
            <Header>Header</Header>
            <Layout>
              <Content>Content</Content>
              <Sider>Sider</Sider>
            </Layout>
            <Footer>Footer</Footer>
          </Layout>
      
          <Layout>
            <Sider>Sider</Sider>
            <Layout>
              <Header>Header</Header>
              <Content>Content</Content>
              <Footer>Footer</Footer>
            </Layout>
          </Layout>
        `}
      </Code>
    </ElementCard>
  );
};

const Grids = () => {
  return (
    <ElementCard title="Grid">
      <Info>Doesn't seem to actually work..?</Info>
      <GridWrapper>
        <Row>
          <Col span={24}>span=24</Col>
        </Row>
        <Row>
          <Col span={12}>span=12</Col>
        </Row>
        <Row>
          <Col span={12}>span=12</Col>
        </Row>
        <Row>
          <Col span={6}>span=6</Col>
        </Row>
        <Row>
          <Col span={6}>span=6</Col>
        </Row>
        <Row>
          <Col span={6}>span=6</Col>
        </Row>
        <Row>
          <Col span={6}>span=6</Col>
        </Row>
      </GridWrapper>
      <Code>
        {`
          <Row>
            <Col span={24}>span=24</Col>
          </Row>
          <Row>
            <Col span={12}>span=12</Col>
          </Row>
          <Row>
            <Col span={12}>span=12</Col>
          </Row>
          <Row>
            <Col span={6}>span=6</Col>
          </Row>
          <Row>
            <Col span={6}>span=6</Col>
          </Row>
          <Row>
            <Col span={6}>span=6</Col>
          </Row>
          <Row>
            <Col span={6}>span=6</Col>
          </Row>
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div>
        <Divider>Some text</Divider>
      </div>
      <Code>
        {`
          <Divider>Some text</Divider>
        `}
      </Code>
    </ElementCard>
  );
};

export const Layout = () => {
  return (
    <FlexWrapper>
      <Containers />
      <Grids />
      <Other />
    </FlexWrapper>
  );
};
