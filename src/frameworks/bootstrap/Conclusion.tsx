import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p>
          Bootstrap has been around since before the dinosaur's so you can relay
          on the fact that it's here to stay for at least another century. The
          community and docs are pretty great so no problem will be unsolvable.
        </p>
        <p>
          Some (definitely not all) Bootstrap theme's are compatible so you have
          to ability to plug and play an already made theme.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p>
          Tree shaking doesn't work great according to the documentation so you
          have keep an eye out for using the correct import statements.
        </p>
        <p>
          You need some extra things besides the actual package like the
          Bootstrap package it self and import the Bootstrap (S)CSS file in your
          index.tsx. To customize the Bootstrap styling you need to create your
          own custom (S)CSS file.
        </p>
        <p>
          You still make heavy use of class names which might be a matter of
          taste of that's pro or a con.
        </p>
        <p>
          Is build as a Bootstrap port so nothing new to see and also minimal
          use of React features. For every element you need to use another
          component instead of just passing a property to the main component.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          Because of it's rich history it's probably here to stay but it doesn't
          use the true React power so it might not be the #2 most downloaded UI
          package for much longer.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          Again the long history of Bootstrap bring along a large community, so
          no need to reinvent the wheel.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Numbers">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Package size (minzipped)</TableCell>
              <TableCell>
                50.7 KB (including the required bootstrap package)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>825.915</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
