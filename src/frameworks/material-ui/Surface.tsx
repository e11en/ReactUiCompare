import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const Title = styled(Typography)`
  && {
    color: #fff;
  }
`;

const GreyBox = styled.div`
  background-color: #d6d6d6;
  display: flex;
  padding: 1em;
  justify-content: center;

  & > div:nth-child(2) {
    margin: 0 8px;
  }
`;

const BoxPaper = styled(Paper)`
  width: 5em;
  height: 5em;
`;

const SmallCard = styled(Card)`
  width: 25em;
`;

const CardMediaImage = styled(CardMedia)`
  height: 5em;
`;

const AppToolBar = () => {
  return (
    <ElementCard title="App tool bar">
      <div>
        <AppBar position="static">
          <Toolbar>
            <Title variant="h6">Some title</Title>
          </Toolbar>
        </AppBar>
      </div>
      <Code>
        {`
          <AppBar position="static">
            <Toolbar>
              <Title variant="h6">Some title</Title>
            </Toolbar>
          </AppBar>
        `}
      </Code>
    </ElementCard>
  );
};

const Papers = () => {
  return (
    <ElementCard title="Paper">
      <GreyBox>
        <BoxPaper elevation={0} />
        <BoxPaper />
        <BoxPaper elevation={3} />
      </GreyBox>
      <Code>
        {`
          <Paper elevation={0} />
          <Paper />
          <Paper elevation={3} />
        `}
      </Code>
    </ElementCard>
  );
};

const Cards = () => {
  return (
    <ElementCard title="Card">
      <GreyBox>
        <SmallCard>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            action={
              <IconButton aria-label="settings">
                <FavoriteIcon />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMediaImage
            image="https://material-ui.com/static/images/cards/paella.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
        </SmallCard>
      </GreyBox>
      <Code>
        {`
          <Card>
            <CardHeader
              avatar={<Avatar aria-label="recipe">R</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <FavoriteIcon />
                </IconButton>
              }
              title="Shrimp and Chorizo Paella"
              subheader="September 14, 2016"
            />
            <CardMedia
              image="https://material-ui.com/static/images/cards/paella.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
          </Card>
        `}
      </Code>
    </ElementCard>
  );
};

const Accordions = () => {
  return (
    <ElementCard title="Accordion">
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Some text</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Some text</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Code>
        {`
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Some text</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Some text</Typography>
            </AccordionDetails>
          </Accordion>
        `}
      </Code>
    </ElementCard>
  );
};

export const Surface = () => {
  return (
    <FlexWrapper>
      <AppToolBar />
      <Papers />
      <Cards />
      <Accordions />
    </FlexWrapper>
  );
};
