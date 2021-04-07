import { useState } from "react";
import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  Slider,
  Switch,
  InputAdornment,
} from "@material-ui/core";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";

const DateTimeField = styled(TextField)`
  margin: 1em;
  width: 15em;
`;

const SpacedFormControl = styled(FormControl)`
  margin: 1em;
  width: 15em;
`;

const SpacedTextField = styled(TextField)`
  margin: 1em;
  width: 15em;
`;

const Fields = () => {
  return (
    <ElementCard title="Fields">
      <div>
        <SpacedTextField label="Standard" />
        <SpacedTextField label="Filled" variant="filled" />
        <SpacedTextField label="Outlined" variant="outlined" />
        <SpacedTextField label="Small" variant="outlined" size="small" />
        <SpacedTextField label="Required" required />
        <SpacedTextField label="Error" error />
        <SpacedTextField label="Multiline" multiline />
        <SpacedTextField
          label="Adornments"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
        />
      </div>
      <Code>
        {`
          <SpacedTextField label="Standard" />
          <SpacedTextField label="Filled" variant="filled" />
          <SpacedTextField label="Outlined" variant="outlined" />
          <SpacedTextField label="Small" variant="outlined" size="small" />
          <SpacedTextField label="Required" required />
          <SpacedTextField label="Error" error />
          <SpacedTextField label="Multiline" multiline />
          <SpacedTextField label="Adornments"
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
              endAdornment: <InputAdornment position="end">€</InputAdornment>
            }}
          />
        `}
      </Code>
    </ElementCard>
  );
};

const CheckBoxes = () => {
  return (
    <ElementCard title="Checkboxes">
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Some group of items</FormLabel>
          <FormGroup>
            <FormControlLabel control={<Checkbox checked />} label="Selected" />
            <FormControlLabel
              control={<Checkbox disabled />}
              label="Disabled"
            />
            <FormControlLabel
              control={<Checkbox indeterminate />}
              label="Indeterminate"
            />
            <FormControlLabel control={<Checkbox />} label="Active" />
          </FormGroup>
        </FormControl>
      </div>
      <Code>
        {`
          <FormControl component="fieldset">
            <FormLabel component="legend">Some group of items</FormLabel>
            <FormGroup>
              <FormControlLabel control={<Checkbox checked />} label="Selected" />
              <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
              <FormControlLabel control={<Checkbox indeterminate />} label="Indeterminate" />
              <FormControlLabel control={<Checkbox />} label="Active" />
            </FormGroup>
          </FormControl>
        `}
      </Code>
    </ElementCard>
  );
};

const DateTimePickers = () => {
  return (
    <ElementCard title="Date time pickers">
      <div>
        <DateTimeField
          label="Some date"
          type="date"
          defaultValue="2021-01-01"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DateTimeField
          label="Some time"
          type="time"
          defaultValue="09:00"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <DateTimeField
          label="Some date time"
          type="datetime-local"
          defaultValue="2021-01-01T09:00"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <Code>
        {`
            <TextField
              label="Some date"
              type="date"
              defaultValue="2021-01-01"
              InputLabelProps={{shrink: true}}
            />
            <TextField
              label="Some time"
              type="time"
              defaultValue="09:00"
              InputLabelProps={{shrink: true}}
            />
            <TextField
              label="Some date time"
              type="datetime-local"
              defaultValue="2021-01-01T09:00"
              InputLabelProps={{shrink: true}}
            />
        `}
      </Code>
    </ElementCard>
  );
};

const Radios = () => {
  const [value, setValue] = useState("1");

  return (
    <ElementCard title="Radios">
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Some group of items</FormLabel>
          <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
            <FormControlLabel value="1" control={<Radio />} label="Selected" />
            <FormControlLabel
              value="2"
              disabled
              control={<Radio />}
              label="Disabled"
            />
            <FormControlLabel value="3" control={<Radio />} label="Active" />
          </RadioGroup>
        </FormControl>
      </div>
      <Code>
        {`
          const [value, setValue] = useState("1");

          <FormControl component="fieldset">
            <FormLabel component="legend">Some group of items</FormLabel>
            <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
              <FormControlLabel value="1" control={<Radio />} label="Selected" />
              <FormControlLabel value="2" disabled control={<Radio />} label="Disabled" />
              <FormControlLabel value="3" control={<Radio />} label="Active" />
            </RadioGroup>
          </FormControl>
        `}
      </Code>
    </ElementCard>
  );
};

const Selects = () => {
  const [value, setValue] = useState(10);

  return (
    <ElementCard title="Select">
      <div>
        <Info>
          The 'outlined' variant is notorious for issues with the label not
          displaying correctly.
        </Info>
        <SpacedFormControl>
          <InputLabel>Items</InputLabel>
          <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
            <MenuItem value={10}>Item 1</MenuItem>
            <MenuItem value={20}>Item 2</MenuItem>
            <MenuItem value={30}>Item 3</MenuItem>
          </Select>
        </SpacedFormControl>

        <SpacedFormControl variant="outlined">
          <InputLabel>Items</InputLabel>
          <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
            <MenuItem value={10}>Item 1</MenuItem>
            <MenuItem value={20}>Item 2</MenuItem>
            <MenuItem value={30}>Item 3</MenuItem>
          </Select>
        </SpacedFormControl>

        <SpacedFormControl variant="filled">
          <InputLabel>Items</InputLabel>
          <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
            <MenuItem value={10}>Item 1</MenuItem>
            <MenuItem value={20}>Item 2</MenuItem>
            <MenuItem value={30}>Item 3</MenuItem>
          </Select>
        </SpacedFormControl>
      </div>
      <Code>
        {`
          const [value, setValue] = useState(10);

          <FormControl>
            <InputLabel>Items</InputLabel>
            <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
              <MenuItem value={10}>Item 1</MenuItem>
              <MenuItem value={20}>Item 2</MenuItem>
              <MenuItem value={30}>Item 3</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel>Items</InputLabel>
            <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
              <MenuItem value={10}>Item 1</MenuItem>
              <MenuItem value={20}>Item 2</MenuItem>
              <MenuItem value={30}>Item 3</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled">
            <InputLabel>Items</InputLabel>
            <Select value={value} onChange={(e: any) => setValue(e.target.value)}>
              <MenuItem value={10}>Item 1</MenuItem>
              <MenuItem value={20}>Item 2</MenuItem>
              <MenuItem value={30}>Item 3</MenuItem>
            </Select>
          </FormControl>
        `}
      </Code>
    </ElementCard>
  );
};

const Sliders = () => {
  const [value, setValue] = useState<number | number[]>(10);
  const [multiValue, setMultiValue] = useState<number | number[]>([10, 50]);
  const marks = [
    {
      value: 50,
      label: "50%",
    },
  ];

  return (
    <ElementCard title="Sliders">
      <div>
        <Slider
          value={value}
          onChange={(_, v) => setValue(v)}
          valueLabelDisplay="auto"
          step={10}
          marks={marks}
          min={0}
          max={100}
        />

        <Slider
          value={multiValue}
          onChange={(_, v) => setMultiValue(v)}
          valueLabelDisplay="auto"
        />
      </div>
      <Code>
        {`
          const [value, setValue] = useState(10);
          const [multiValue, setMultiValue] = useState([10, 50]);
          const marks = [{value: 50, label: "50%"}];

          <Slider
            value={value}
            onChange={(_, v) => setValue(v)}
            valueLabelDisplay="auto"
            step={10}
            marks={marks}
            min={0}
            max={100}
          />

          <Slider
          value={multiValue}
          onChange={(_, v) => setMultiValue(v)}
          valueLabelDisplay="auto"
        />
        `}
      </Code>
    </ElementCard>
  );
};

const Switches = () => {
  return (
    <ElementCard title="Switches">
      <div>
        <FormControlLabel
          control={<Switch checked={true} />}
          label="Selected"
        />
        <FormControlLabel control={<Switch disabled />} label="Disabled" />
        <FormControlLabel control={<Switch />} label="Active" />
        <FormControlLabel control={<Switch size="small" />} label="Small" />
      </div>
      <Code>
        {`
          <FormControlLabel control={<Switch checked={true} />} label="Selected" />
          <FormControlLabel control={<Switch disabled />} label="Disabled" />
          <FormControlLabel control={<Switch />} label="Active" />
          <FormControlLabel control={<Switch size="small" />} label="Small" />
        `}
      </Code>
    </ElementCard>
  );
};

export const Input = () => {
  return (
    <FlexWrapper>
      <Fields />
      <CheckBoxes />
      <DateTimePickers />
      <Radios />
      <Selects />
      <Sliders />
      <Switches />
    </FlexWrapper>
  );
};
