import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p>
          It has A LOT of components that in turn have a bunch of variations, so
          everything you need is probably in here. All these components are all
          really well documented.
        </p>
        <p>
          Beside the actual components, there is a whole design philosophy
          behind the choices made. This insures well thought out design an UX
          where the developer doesn't have to reinvent the wheel.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p>
          Theming is "a little harder" because they don't have a build-in way of
          using CSS in JS and you have to use LESS styling. The recommended way
          is overriding global styles and setting LESS variables. If we look a
          the future progress to CSS in JS this is not ideal and the biggest
          "problem" according to other developers. To use LESS it requires you
          to either eject the project or jump though a bunch of hoops.
        </p>
        <p>
          The bundle size is pretty large and multiple sources say that
          performance isn't that great. During the research the complete Ant
          Design and documentation site was offline for quite some time.
        </p>
        <p>
          While creating the real life page I was annoyed by the fact I needed
          to override the colors of the examples in order to style the page. I
          really miss a stand alone theme provider so you can style certain
          sections of your page. I tried to override the LESS vars in a separate
          file but that didn't work.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          The kit is being actively developed by the developers and is
          considered the second most popular React UI kit. There isn't a roadmap
          available to see the actual upcoming changes but there has been a
          steady release cycle.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          There are a bunch of resources available on the web from bug fixes and
          workarounds to an actively monitored Github repo.
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
              <TableCell>345 KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>594.150</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
