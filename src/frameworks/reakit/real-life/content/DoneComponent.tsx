import styled from "@emotion/styled";

const Table = styled.table`
  margin: 1em 0;
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }

  thead {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const DoneComponent = ({ show }: any) => {
  if (!show) return null;

  const tableData: any = [
    { name: "John Johnson", username: "j.johnson", city: "New York" },
    { name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    { name: "Sasha Sounders", username: "s.sounders", city: "Amsterdam" },
  ];

  return (
    <Table>
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
    </Table>
  );
};

export default DoneComponent;
