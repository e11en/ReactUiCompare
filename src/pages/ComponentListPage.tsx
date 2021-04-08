import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";

import { frameworks, components } from "helpers/frameworkComponents";

const Choice = styled.div`
  width: 5em;
  display: flex;
  justify-content: center;
  color: #fff;
`;

const No = styled(Choice)`
  background-color: #dc5959;
`;

const Yes = styled(Choice)`
  background-color: #3fbb6e;
`;

const FrameworkIcon = ({
  name,
  component,
}: {
  name: string;
  component: string;
}) => {
  return frameworks[name]?.components[component] ? (
    <Yes>
      <CheckIcon />
    </Yes>
  ) : (
    <No>
      <CloseIcon />
    </No>
  );
};

const ComponentListPage = () => {
  return (
    <div>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {Object.keys(frameworks).map((f, i) => (
                <TableCell key={i}>{f}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(components).map((c, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">
                  {c}
                </TableCell>
                {Object.keys(frameworks).map((f, i) => (
                  <TableCell key={i}>
                    <FrameworkIcon name={f} component={c} />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ComponentListPage;
