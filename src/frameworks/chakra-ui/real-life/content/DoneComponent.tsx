import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const DoneComponent = ({ show }: any) => {
  if (!show) return null;

  const tableData: any = [
    { name: "John Johnson", username: "j.johnson", city: "New York" },
    { name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    { name: "Sasha Sounders", username: "s.sounders", city: "Amsterdam" },
  ];

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Username</Th>
          <Th>City</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tableData.map((row: any) => (
          <Tr key={row.name}>
            <Td component="th" scope="row">
              {row.name}
            </Td>
            <Td>{row.username}</Td>
            <Td>{row.city}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DoneComponent;
