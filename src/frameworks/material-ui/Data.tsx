import { useState } from "react";
import {
  Avatar,
  Badge,
  Chip,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
  Checkbox,
  IconButton,
  FormControlLabel,
  TableFooter,
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/Mail";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard, {
  SpacedChildren,
  SpacedI,
} from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";
import Info from "components/InfoComponent";
import { tableData } from "helpers/data";

const AvatarGroup = styled.div`
  display: flex;

  & > * {
    margin: 0.5em;
  }
`;

const Avatars = () => {
  return (
    <ElementCard title="Avatar">
      <div>
        <Info>
          Avatar groups are possible by using the
          <SpacedI>@material-ui/lab</SpacedI> package
        </Info>
        <AvatarGroup>
          <Avatar>A</Avatar>
          <Avatar variant="square">A</Avatar>
          <Avatar variant="rounded">A</Avatar>
        </AvatarGroup>
      </div>
      <Code>
        {`
          <Avatar>A</Avatar>
          <Avatar variant="square">A</Avatar>
          <Avatar variant="rounded">A</Avatar>
        `}
      </Code>
    </ElementCard>
  );
};

const Badges = () => {
  return (
    <ElementCard title="Badge">
      <SpacedChildren>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} max={99} color="error">
          <MailIcon />
        </Badge>
        <Badge variant="dot" color="secondary">
          <MailIcon />
        </Badge>
      </SpacedChildren>
      <Code>
        {`
          <Badge badgeContent={4} color="primary"><MailIcon /></Badge>
          <Badge badgeContent={100} max={99} color="error"><MailIcon /></Badge>
          <Badge variant="dot" color="secondary"><MailIcon /></Badge>
        `}
      </Code>
    </ElementCard>
  );
};

const Chips = () => {
  return (
    <ElementCard title="Chip">
      <SpacedChildren>
        <Chip label="Default" />
        <Chip label="Disabled" disabled />
        <Chip label="Outlined" variant="outlined" />
        <Chip label="Color" color="primary" />
        <Chip label="Delete" color="secondary" onDelete={() => {}} />
      </SpacedChildren>
      <Code>
        {`
          <Chip label="Default" />
          <Chip label="Disabled" disabled />
          <Chip label="Outlined" variant="outlined" />
          <Chip label="Color" color="primary" />
          <Chip label="Delete" color="secondary" onDelete={() => {}} />
        `}
      </Code>
    </ElementCard>
  );
};

const Lists = () => {
  const [open, setOpen] = useState(true);

  return (
    <ElementCard title="List">
      <div>
        <List subheader={<ListSubheader>List title</ListSubheader>}>
          <ListItem>
            <ListItemText primary="Normal list item" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Button list item" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="List item with icon" />
          </ListItem>
          <ListItem button onClick={() => setOpen(!open)}>
            <ListItemText primary="Expandable list item" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open}>
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
      <Code>
        {`
          const [open, setOpen] = useState(true);

          <List subheader={<ListSubheader>List title</ListSubheader>}>
            <ListItem><ListItemText primary="Normal list item" /></ListItem>
            <ListItem button><ListItemText primary="Button list item" /></ListItem>
            <ListItem button>
              <ListItemIcon><SendIcon /></ListItemIcon>
              <ListItemText primary="List item with icon" />
            </ListItem>
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemText primary="Expandable list item" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open}>
              <List component="div" disablePadding>
                <ListItem button><ListItemText primary="Starred" /></ListItem>
              </List>
            </Collapse>
          </List>
        `}
      </Code>
    </ElementCard>
  );
};

const Tables = () => {
  return (
    <ElementCard title="Table">
      <div>
        <Info>
          It recommended to use another package to show more "complex" tables
          because you need to handle every action yourself, you can enable
          pagination but that only show the buttons but not the actual
          implementation of those buttons. <br />A package like material-table
          is in the MaterialUI style but is more dev friendlier.
        </Info>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>
                <TableSortLabel>Id</TableSortLabel>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Code>
        {`
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox"><Checkbox /></TableCell>
                <TableCell><TableSortLabel>Id</TableSortLabel></TableCell>
                <TableCell>Name</TableCell>
                <TableCell>City</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.city}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        `}
      </Code>
    </ElementCard>
  );
};

export const Data = () => {
  return (
    <FlexWrapper>
      <Avatars />
      <Badges />
      <Chips />
      <Lists />
      <Tables />
    </FlexWrapper>
  );
};
