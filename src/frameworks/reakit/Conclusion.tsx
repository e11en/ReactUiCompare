import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p>
          They provide state hooks for the components that solve some complex
          state logic so you don't have to, it even supports lazy loading. They
          also have a feature called "shared state" which makes it easy to share
          state between multiple components, which just creates a context and
          provider.
        </p>
        <p>
          It has a high focus on accessability and gives handy warning about
          incorrect or missing accessability properties. The documentation is
          also very complete for each available component.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p>
          There is no default styling so you'll have to implement this from
          scratch. Also there are only a handful of components available that
          have minimum to no extra features. It has a "not finished" vibe and
          might become great in a couple of years.
        </p>
        <p>
          Doesn't always work that great with Typescript, like in the checkbox
          group example.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          The repository is actively maintained and features are being added,
          but the kit has a long way to go to being a stable package.
        </p>
        <p>
          They are currently working on making a default style available but
          that is still in the experimental phase.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          It has a small community of developers behind it and there a minimal
          resources other then the documentation and marketing/funding pages.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Numbers">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Package size (minzipped)</TableCell>
              <TableCell>35.7 KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>91.682</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
