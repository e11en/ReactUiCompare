import { Divider, Layout as AntDesignLayout, Row, Col } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

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
          <AntDesignLayout.Header>Header</AntDesignLayout.Header>
          <AntDesignLayout.Content>Content</AntDesignLayout.Content>
          <AntDesignLayout.Footer>Footer</AntDesignLayout.Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <AntDesignLayout.Header>Header</AntDesignLayout.Header>
          <AntDesignLayout>
            <AntDesignLayout.Sider>Sider</AntDesignLayout.Sider>
            <AntDesignLayout.Content>Content</AntDesignLayout.Content>
          </AntDesignLayout>
          <AntDesignLayout.Footer>Footer</AntDesignLayout.Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <AntDesignLayout.Header>Header</AntDesignLayout.Header>
          <AntDesignLayout>
            <AntDesignLayout.Content>Content</AntDesignLayout.Content>
            <AntDesignLayout.Sider>Sider</AntDesignLayout.Sider>
          </AntDesignLayout>
          <AntDesignLayout.Footer>Footer</AntDesignLayout.Footer>
        </AntDesignLayout>

        <AntDesignLayout>
          <AntDesignLayout.Sider>Sider</AntDesignLayout.Sider>
          <AntDesignLayout>
            <AntDesignLayout.Header>Header</AntDesignLayout.Header>
            <AntDesignLayout.Content>Content</AntDesignLayout.Content>
            <AntDesignLayout.Footer>Footer</AntDesignLayout.Footer>
          </AntDesignLayout>
        </AntDesignLayout>
      </LayoutWrapper>
      <Code>
        {`
          <Layout>
            <Layout.Header>Header</Layout.Header>
            <Layout.Content>Content</Layout.Content>
            <Layout.Footer>Footer</Layout.Footer>
          </Layout>
        
          <Layout>
            <Layout.Header>Header</Layout.Header>
            <Layout>
              <Layout.Sider>Sider</Layout.Sider>
              <Layout.Content>Content</Layout.Content>
            </Layout>
            <Layout.Footer>Footer</Layout.Footer>
          </Layout>
        
          <Layout>
            <Layout.Header>Header</Layout.Header>
            <Layout>
              <Layout.Content>Content</Layout.Content>
              <Layout.Sider>Sider</Layout.Sider>
            </Layout>
            <Layout.Footer>Footer</Layout.Footer>
          </Layout>
      
          <Layout>
            <Layout.Sider>Sider</Layout.Sider>
            <Layout>
              <Layout.Header>Header</Layout.Header>
              <Layout.Content>Content</Layout.Content>
              <Layout.Footer>Footer</Layout.Footer>
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
