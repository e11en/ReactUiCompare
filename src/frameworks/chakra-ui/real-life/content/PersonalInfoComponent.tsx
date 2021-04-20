import { Grid, GridItem, Divider } from "@chakra-ui/react";

import Input from "./InputComponent";

const PersonalInfoComponent = ({ show }: any) => {
  if (!show) return null;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input label="First name" />
          </GridItem>
          <GridItem>
            <Input label="Last name" />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Divider orientation="vertical" />
      </GridItem>
      <GridItem>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input label="Street" />
          </GridItem>
          <GridItem>
            <Input label="City" />
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default PersonalInfoComponent;
