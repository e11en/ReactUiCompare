import FlexWrapper from "components/FlexWrapperComponent";
import ElementCard from "components/ElementCardComponent";
import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";

export const Conclusion = () => {
  return (
    <FlexWrapper>
      <ElementCard halfwidth title="Nice">
        <p>
          It's really easy to customize the components to give them your own
          look and feel. There is great documentation available explaining how
          to do this.
        </p>
        <p>
          They have a bunch of components that have a bunch of features and
          styles build-in.
        </p>
        <p>
          There a handful of hooks available that makes implementation easier
          and requires less redundancy which is great. Example: there is the
          "useDisclosure" hook which replaces defining open and closing state
          for a dialog for instance.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Meh">
        <p>
          If you app has a lot of high frequent data changes that are
          performance sensitive this might not be the kit for you. In their own
          words: "If your app deals with high, frequently changing data that is
          performance sensitive, you might notice the footprint of your app
          grows. We recommend you compare with alternatives before making the
          decision to use Chakra."
        </p>
        <p>
          I did found a bug while testing the "Tabs" component and I'm missing
          some more input field like date and time.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Future">
        <p>
          This kit is really new and they are actively maintaining and expanding
          the kit making some real progress.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Community">
        <p>
          They acknowledge that the community is still small but in my own
          experience it pops up on forums every now and again of people
          switching to this kit. Looking at the downloads per day chart you can
          see they have had a really stead trend upwards.
        </p>
      </ElementCard>

      <ElementCard halfwidth title="Numbers">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Package size (minzipped)</TableCell>
              <TableCell>104.6 KB</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Downloads per day</TableCell>
              <TableCell>77.809</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ElementCard>
    </FlexWrapper>
  );
};
