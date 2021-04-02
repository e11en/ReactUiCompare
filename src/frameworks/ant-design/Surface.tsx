import styled from "styled-components";
import { Card, Avatar, Collapse } from "antd";
import { HeartFilled, DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const { Meta } = Card;
const { Panel } = Collapse;

const GreyBox = styled.div`
  background-color: #d6d6d6;
  display: flex;
  padding: 1em;
  justify-content: center;

  & > div:nth-child(2) {
    margin: 0 8px;
  }
`;

const SmallCard = styled(Card)`
  width: 25em;
`;

const Cards = () => {
  return (
    <ElementCard title="Card">
      <GreyBox>
        <SmallCard
          title="Shrimp and Chorizo Paella"
          extra={
            <a href="#">
              <HeartFilled />
            </a>
          }
          cover={
            <img
              alt="Paella"
              src="https://material-ui.com/static/images/cards/paella.jpg"
            />
          }
          actions={[<DownOutlined />]}
        >
          <Meta
            avatar={<Avatar>R</Avatar>}
            title="Shrimp and Chorizo Paella"
            description="This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
          />
        </SmallCard>

        <SmallCard title="Loading content" hoverable loading />
      </GreyBox>
      <Code>
        {`
          <Card
            title="Shrimp and Chorizo Paella"
            extra={
              <a href="#">
                <HeartFilled />
              </a>
            }
            cover={
              <img
                alt="Paella"
                src="https://material-ui.com/static/images/cards/paella.jpg"
              />
            }
            actions={[<DownOutlined />]}
          >
            <Meta
              avatar={<Avatar>R</Avatar>}
              title="Shrimp and Chorizo Paella"
              description="This impressive paella is...."
            />
          </Card>

          <Card title="Loading content" hoverable loading />
        `}
      </Code>
    </ElementCard>
  );
};

const Accordions = () => {
  return (
    <ElementCard title="Accordion">
      <div>
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="Accordion 1" key="1">
            <p>Some text</p>
          </Panel>
          <Panel header="Accordion 2" key="2">
            <p>Some text</p>
          </Panel>
          <Panel header="Accordion 3" key="3">
            <p>Some text</p>
          </Panel>
        </Collapse>
      </div>
      <Code>
        {`
          <Collapse defaultActiveKey={["1"]}>
            <Panel header="Accordion 1" key="1">
              <p>Some text</p>
            </Panel>
            <Panel header="Accordion 2" key="2">
              <p>Some text</p>
            </Panel>
            <Panel header="Accordion 3" key="3">
              <p>Some text</p>
            </Panel>
          </Collapse>
        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <Cards />
      <Accordions />
    </FlexWrapper>
  );
};
