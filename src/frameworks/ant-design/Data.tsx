import styled from "styled-components";
import {
  Avatar,
  Badge,
  List,
  Table,
  Tag,
  Calendar,
  Carousel,
  Comment,
  Statistic,
} from "antd";
import { MailOutlined, DislikeOutlined, LikeOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

import Code from "components/CodeComponent";
import ElementCard, { SpacedChildren } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import { tableData } from "helpers/data";

const LargeMailIcon = styled(MailOutlined)`
  svg {
    width: 50px;
    height: 50px;
  }
`;

const Box = styled.div`
  //width: 50px;
  height: 50px;
`;

const RedBox = styled(Box)`
  background-color: red;
`;

const BlueBox = styled(Box)`
  background-color: blue;
`;

const GreenBox = styled(Box)`
  background-color: green;
`;

const GreyBox = styled.div`
  background-color: #d6d6d6;
  padding: 1em;
`;

const Avatars = () => {
  return (
    <ElementCard title="Avatar">
      <SpacedChildren>
        <Avatar>A</Avatar>
        <Avatar size="small">A</Avatar>
        <Avatar shape="square">A</Avatar>

        <Avatar.Group maxCount={2}>
          <Avatar>A</Avatar>
          <Avatar>A</Avatar>
          <Avatar>A</Avatar>
          <Avatar>A</Avatar>
        </Avatar.Group>
      </SpacedChildren>
      <Code>
        {`
          <Avatar>A</Avatar>
          <Avatar size="small">A</Avatar>
          <Avatar shape="square">A</Avatar>

          <Avatar.Group maxCount={2}>
            <Avatar>A</Avatar>
            <Avatar>A</Avatar>
            <Avatar>A</Avatar>
            <Avatar>A</Avatar>
          </Avatar.Group>
        `}
      </Code>
    </ElementCard>
  );
};

const Badges = () => {
  return (
    <ElementCard title="Badge">
      <SpacedChildren>
        <Badge count={4}>
          <LargeMailIcon />
        </Badge>
        <Badge count={100} overflowCount={99}>
          <LargeMailIcon />
        </Badge>
        <Badge dot>
          <LargeMailIcon />
        </Badge>
        <Badge status="success" count={1}>
          <LargeMailIcon />
        </Badge>
      </SpacedChildren>
      <Code>
        {`
          <Badge count={4}><MailOutlined /></Badge>
          <Badge count={100} overflowCount={99}><MailOutlined /></Badge>
          <Badge dot><MailOutlined /></Badge>
          <Badge status="success" count={1}><MailOutlined /></Badge>
        `}
      </Code>
    </ElementCard>
  );
};

const Tags = () => {
  return (
    <ElementCard title="Tag">
      <div>
        <Tag>Default</Tag>
        <Tag.CheckableTag checked={false}>Checkable tag</Tag.CheckableTag>
        <Tag.CheckableTag checked={true}>Checked tag</Tag.CheckableTag>
        <Tag color="success">Success tag</Tag>
        <Tag closable color="red">
          Delete
        </Tag>
      </div>
      <Code>
        {`
          <Tag>Default</Tag>
          <Tag.CheckableTag checked={false}>Checkable tag</Tag.CheckableTag>
          <Tag.CheckableTag checked={true}>Checked tag</Tag.CheckableTag>
          <Tag color="success">Success tag</Tag>
          <Tag closable color="red">Delete</Tag>
        `}
      </Code>
    </ElementCard>
  );
};

const Lists = () => {
  return (
    <ElementCard title="List">
      <div>
        <List
          header="List title"
          footer="List footer"
          bordered
          dataSource={["Item 1", "Item 2", "Item 3"]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
      <Code>
        {`
          <List
            header="List title"
            footer="List footer"
            bordered
            dataSource={["Item 1", "Item 2", "Item 3"]}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div>
        <Table
          dataSource={tableData}
          expandable={{
            expandedRowRender: (row) => row.name,
          }}
          columns={[
            {
              title: "Id",
              dataIndex: "id",
              key: "id",
              sorter: (a, b) => a.id - b.id,
              sortDirections: ["descend"],
            },
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
              onFilter: (value: any, record) =>
                record.name.indexOf(value) === 0,
              filters: [
                {
                  text: "Amsterdam",
                  value: "Amsterdam",
                },
              ],
            },
            {
              title: "City",
              dataIndex: "city",
              key: "city",
            },
          ]}
          rowSelection={{
            type: "checkbox",
          }}
        />
      </div>
      <Code>
        {`
          <Table
            dataSource={tableData}
            expandable={{expandedRowRender: (row) => row.name}}
            columns={[
              {
                title: "Id",
                dataIndex: "id",
                key: "id",
                sorter: (a, b) => a.id - b.id,
                sortDirections: ["descend"],
              },
              {
                title: "Name",
                dataIndex: "name",
                key: "name",
                onFilter: (value: any, record) =>record.name.indexOf(value) === 0,
                filters: [
                  {
                    text: "Amsterdam",
                    value: "Amsterdam",
                  }
                ],
              },
              {
                title: "City",
                dataIndex: "city",
                key: "city",
              }
            ]}
            rowSelection={{type: "checkbox"}}
          />
        `}
      </Code>
    </ElementCard>
  );
};

const Calendars = () => {
  return (
    <ElementCard title="Calendar">
      <div>
        <Calendar />
      </div>
      <Code>
        {`
          <Calendar />
        `}
      </Code>
    </ElementCard>
  );
};

const Carousels = () => {
  return (
    <ElementCard title="Carousel">
      <GreyBox>
        <Carousel>
          <RedBox />
          <BlueBox />
          <GreenBox />
        </Carousel>
      </GreyBox>
      <Code>
        {`
          <Carousel>
            <div className="red" />
            <div className="blue" />
            <div className="green" />
          </Carousel>
        `}
      </Code>
    </ElementCard>
  );
};

const Comments = () => {
  return (
    <ElementCard title="Comment">
      <div>
        <Comment
          actions={[<LikeOutlined />, <DislikeOutlined />]}
          author="Han Solo"
          avatar={<Avatar>H</Avatar>}
          content={<p>I've got a bad feeling about this..</p>}
          datetime="2021-04-08"
        />
      </div>
      <Code>
        {`
          <Comment
            actions={[<LikeOutlined />, <DislikeOutlined />]}
            author="Han Solo"
            avatar={<Avatar>H</Avatar>}
            content={<p>I've got a bad feeling about this..</p>}
            datetime="2021-04-08"
          />
        `}
      </Code>
    </ElementCard>
  );
};

const Statistics = () => {
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;

  return (
    <ElementCard title="Statistic">
      <div>
        <Statistic title="Some statistic" value={112893} />
        <Statistic
          prefix="€"
          title="Some prefixed statistic"
          value={50}
          precision={2}
        />
        <Statistic.Countdown
          title="Some countdown"
          value={deadline}
          format="HH:mm:ss"
        />
      </div>
      <Code>
        {`
          <Statistic title="Some statistic" value={112893} />
          <Statistic
            prefix="€"
            title="Some prefixed statistic"
            value={50}
            precision={2}
          />
          <Statistic.Countdown
            title="Some countdown"
            value={deadline}
            format="HH:mm:ss"
          />
        `}
      </Code>
    </ElementCard>
  );
};

export const Data = () => {
  return (
    <FlexWrapper>
      <Avatars />
      <Badges />
      <Tags />
      <Lists />
      <Tables />
      <Calendars />
      <Carousels />
      <Comments />
      <Statistics />
    </FlexWrapper>
  );
};
