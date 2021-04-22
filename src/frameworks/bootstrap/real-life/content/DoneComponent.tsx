import { Table } from "react-bootstrap";
import styled from "@emotion/styled";

const StyledTable = styled(Table)`
  margin: 2em 0;
`;

const DoneComponent = ({ show }: any) => {
  if (!show) return null;

  const tableData: any = [
    { name: "John Johnson", username: "j.johnson", city: "New York" },
    { name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    { name: "Sasha Sounders", username: "s.sounders", city: "Amsterdam" },
  ];

  return (
    <StyledTable striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: any) => (
          <tr key={row.name}>
            <th scope="row">{row.name}</th>
            <td>{row.username}</td>
            <td>{row.city}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default DoneComponent;
