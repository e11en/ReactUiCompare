import { useState } from "react";
import {
  Grid,
  GridItem,
  Divider,
  RadioGroup,
  HStack,
  Radio,
  FormLabel,
  FormControl,
  Switch,
} from "@chakra-ui/react";

import Input from "./InputComponent";

const AccountInfoComponent = ({ show }: any) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onConfirmChange = (e: any) => {
    if (e.target.value === "" || password === e.target.value) {
      setError(false);
      return;
    }

    if (password !== e.target.value) setError(true);
  };

  if (!show) return null;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem>
        <Grid templateRows="repeat(3, 1fr)" gap={6}>
          <GridItem>
            <Input label="Username" />
          </GridItem>
          <GridItem>
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </GridItem>
          <GridItem>
            <Input
              label="Confirm password"
              type="password"
              isInvalid={error}
              onChange={onConfirmChange}
            />
          </GridItem>
        </Grid>
      </GridItem>
      <GridItem display="flex" justifyContent="center">
        <Divider orientation="vertical" />
      </GridItem>
      <GridItem>
        <Grid templateRows="repeat(2, 1fr)" gap={6}>
          <GridItem>
            <Input label="Birthday" type="date" shrinkLabel={true} />
          </GridItem>
          <GridItem>
            <FormControl display="flex" alignItems="center">
              <Switch defaultChecked={true} colorScheme="secondary" />
              <FormLabel ml="0.5em">Receive a gift</FormLabel>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl as="fieldset">
              <FormLabel as="legend">Gender</FormLabel>
              <RadioGroup defaultValue="unicorn" colorScheme="secondary">
                <HStack spacing="24px">
                  <Radio value="unicorn">Unicorn</Radio>
                  <Radio value="phoenix">Phoenix</Radio>
                  <Radio value="bread">Bread</Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default AccountInfoComponent;
