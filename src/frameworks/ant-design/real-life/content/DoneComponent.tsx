import { Row, Table, Col } from "antd";
import styled from "@emotion/styled";

const Wrapper = styled(Row)`
  margin: 2em 0;
`;

const PersonalInfoComponent = ({ show }: any) => {
  if (!show) return null;

  const columns: any = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];
  const data: any = [
    { key: 1, name: "John Johnson", username: "j.johnson", city: "New York" },
    { key: 2, name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    {
      key: 3,
      name: "Sasha Sounders",
      username: "s.sounders",
      city: "Amsterdam",
    },
  ];

  return (
    <Wrapper>
      <Col span={24}>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Col>
    </Wrapper>
  );
};

export default PersonalInfoComponent;
