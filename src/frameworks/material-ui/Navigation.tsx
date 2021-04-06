import React, { useState } from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Breadcrumbs,
  Link,
  Drawer,
  Button,
  Typography,
  Menu,
  MenuItem,
  Stepper,
  Step,
  StepLabel,
  Tabs,
  Tab,
} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import Code from "components/CodeComponent";
import ElementCard, { GreyBox } from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const BottomNav = () => {
  return (
    <ElementCard title="Bottom navigation">
      <GreyBox>
        <BottomNavigation showLabels>
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </GreyBox>
      <Code>
        {`
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        `}
      </Code>
    </ElementCard>
  );
};

const Breadcrumb = () => {
  return (
    <ElementCard title="Breadcrumb">
      <div>
        <Breadcrumbs>
          <Link color="inherit" href="#1">
            Home
          </Link>
          <Link color="inherit" href="#2">
            Group
          </Link>
          <Link color="textPrimary" href="#3">
            Page
          </Link>
        </Breadcrumbs>
      </div>
      <Code>
        {`
          <Breadcrumbs>
            <Link color="inherit" href="#1">
              Home
            </Link>
            <Link color="inherit" href="#2">
              Group
            </Link>
            <Link color="textPrimary" href="#3">
              Page
            </Link>
          </Breadcrumbs>
        `}
      </Code>
    </ElementCard>
  );
};

const Drawers = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const directions: ("left" | "right" | "top" | "bottom")[] = [
    "left",
    "right",
    "top",
    "bottom",
  ];

  const toggleDrawer = (anchor: string, open: boolean) => () =>
    setState({ ...state, [anchor]: open });

  return (
    <ElementCard title="Drawer">
      <div>
        <div>
          {directions.map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)} variant="outlined">
                {anchor}
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                <Typography variant="h3">Hello!</Typography>
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Code>
        {`
          const [isOpen, setIsOpen] = useState();

          <Drawer
            anchor="left"
            open={isOpen}
            onClose={setIsOpen()}>
              <Typography variant="h3">Hello!</Typography>
          </Drawer>
        `}
      </Code>
    </ElementCard>
  );
};

const OverlayMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <ElementCard title="Menu">
      <div>
        <Button onClick={handleClick}>Open Menu</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Item 1</MenuItem>
          <MenuItem onClick={handleClose}>Item 2</MenuItem>
          <MenuItem onClick={handleClose}>Item 3</MenuItem>
        </Menu>
      </div>
      <Code>
        {`
          const [anchorEl, setAnchorEl] = useState(null);
          const handleClick = (event: any) => setAnchorEl(event.currentTarget);
          const handleClose = () => setAnchorEl(null);

          <Button onClick={handleClick}>Open Menu</Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={handleClose}>Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Item 2</MenuItem>
            <MenuItem onClick={handleClose}>Item 3</MenuItem>
          </Menu>
        `}
      </Code>
    </ElementCard>
  );
};

const Steppers = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <ElementCard title="Stepper">
      <GreyBox>
        <Stepper activeStep={activeStep}>
          <Step>
            <StepLabel>Step 1</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 2</StepLabel>
          </Step>
          <Step>
            <StepLabel>Step 3</StepLabel>
          </Step>
        </Stepper>
        <div>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setActiveStep(activeStep + 1)}
          >
            Next
          </Button>
        </div>
      </GreyBox>
      <Code>
        {`
          const [activeStep, setActiveStep] = useState(0);

          <Stepper activeStep={activeStep}>
            <Step>
              <StepLabel>Step 1</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 2</StepLabel>
            </Step>
            <Step>
              <StepLabel>Step 3</StepLabel>
            </Step>
          </Stepper>

          <Button 
            variant="outlined" 
            color="primary"
            onClick={() => setActiveStep(activeStep + 1)}>
              Next
          </Button>
        `}
      </Code>
    </ElementCard>
  );
};

const TabBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <ElementCard title="Tabs">
      <div>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={value}
          onChange={(_, val) => setValue(val)}
        >
          <Tab label="Selected" />
          <Tab label="Disabled" disabled />
          <Tab label="Active" />
        </Tabs>
      </div>
      <Code>
        {`
           const [value, setValue] = React.useState(0);

          <Tabs
            indicatorColor="primary"
            textColor="primary"
            value={value}
            onChange={(_, val) => setValue(val)}>
              <Tab label="Selected" />
              <Tab label="Disabled" disabled />
              <Tab label="Active" />
          </Tabs>
        `}
      </Code>
    </ElementCard>
  );
};

export const Navigation = () => {
  return (
    <FlexWrapper>
      <Breadcrumb />
      <OverlayMenu />
      <Steppers />
      <TabBar />
      <BottomNav />
      <Drawers />
    </FlexWrapper>
  );
};
