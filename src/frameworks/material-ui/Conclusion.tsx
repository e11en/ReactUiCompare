import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p>
          There is a lot of good documentation available and they are actively
          developing the kit. Google uses the kit for their own projects so you
          can rely on the fact that it's here to stay.
        </p>
        <p>
          Beside the actual components, there is a whole design philosophy
          behind the choices made. This insures well thought out design an UX
          where the developer doesn't have to reinvent the wheel.
        </p>
        <p>
          Theming and styling is made really easy with build in theme providers
          and CSS in JS way of implementing styling.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p>
          Your application will have that specific "Google look", if this is a
          meh or nice depends on your own taste.
        </p>
        <p>
          The table components is quite sucky if you want to do anything more
          then just a simple table. Luckily there are enough external packages
          that have the same Material look but have a lot more options and
          build-in features.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          The kit is actively developed and new futures are available through
          the package @material-ui/lab. This has things like alerts, rating,
          skeleton and data grid.
        </p>
        <p>
          In their own words: "This package hosts the incubator components that
          are not yet ready to move to the core."
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          If you only look at the amount of{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.npmtrends.com/@material-ui/core-vs-antd-vs-react-bootstrap-vs-reakit-vs-semantic-ui-react-vs-grommet-vs-primereact-vs-evergreen-ui"
          >
            downloads each day
          </a>{" "}
          compared to a bunch of other UI kits you can have a sense of how many
          use this kit. Which in turn creates more issues and bug fixes, how-to
          guides and packages that use the same styling rules for new
          components.
        </p>
        <p>
          You can find a solution to almost every problem or workaround in the
          web, which helps cut down development time.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Numbers">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Package size (minzipped)</TableCell>
              <TableCell>92.6 KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>1.752.827</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
