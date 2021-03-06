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
        <p>
          Theming is done with a SCSS file that defines the theme colors which
          is obviously not that great, but a little bit better then a LESS file
          because this requires you to either eject the project or jump though a
          bunch of hoops. Still not my preference though.
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
          taste of that's pro or a con. Some components even force you to set an
          id.
        </p>
        <p>
          Is build as a Bootstrap port so nothing new to see and also minimal
          use of React features. For every element you need to use another
          component instead of just passing a property to the main component. It
          feels like using ye old HTML instead of JSX.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          Because of it's rich history it's probably here to stay but it doesn't
          use the true React power so it might not be the #2 most downloaded UI
          package for much longer. There is no news about making this package
          anything other than a wrapper around Bootstrap.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          Again the long history of Bootstrap brings along a large community, so
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
            <TableRow>
              <TableCell>Used in company stacks</TableCell>
              <TableCell>10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>

      <ElementCard halfwidth title="What do other people think">
        <p>
          Pro's:
          <ul>
            <li>Great grid system</li>
            <li>Very well documented</li>
            <li>Supports (some) Bootstrap 4 themes</li>
          </ul>
        </p>
        <p>
          Con's:
          <ul>
            <li>Not a lot of components</li>
            <li>Doesn't have a lot of properties to work with</li>
            <li>
              Is not actually a UI kit and just a port of the Bootstrap CSS
              framework
            </li>
          </ul>
        </p>
      </ElementCard>
    </FlexWrapper>
  );
};
