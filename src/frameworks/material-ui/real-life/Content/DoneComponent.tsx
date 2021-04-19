import {
  Grid,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";

const DoneComponent = ({ show }: any) => {
  if (!show) return null;

  const tableData: any = [
    { name: "John Johnson", username: "j.johnson", city: "New York" },
    { name: "Billie Bronson", username: "b.bronson", city: "Austin" },
    { name: "Sasha Sounders", username: "s.sounders", city: "Amsterdam" },
  ];

  return (
    <Grid container item md={12} spacing={3}>
      <Grid item md={12}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row: any) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default DoneComponent;
