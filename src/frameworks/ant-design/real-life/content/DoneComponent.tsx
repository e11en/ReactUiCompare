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
    },
    {
      title: "Username",
      dataIndex: "username",
    },
    {
      title: "City",
      dataIndex: "city",
    },
  ];
  const data: any = [
    { name: "John Johnson", username: "j.johnson", city: "New York" },
    { name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    { name: "Sasha Sounders", username: "s.sounders", city: "Amsterdam" },
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
