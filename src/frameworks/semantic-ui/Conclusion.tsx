import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p></p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p></p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p></p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p></p>
      </ElementCard>

      <ElementCard halfwidth title="Numbers">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Package size (minzipped)</TableCell>
              <TableCell>0 KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>0</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
