import {
  Container,
  Grid,
  Typography,
  GridList,
  GridListTile,
} from "@material-ui/core";
import styled from "styled-components";

import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const ContainerBox = styled(Container)`
  border: 1px solid #d6d6d6;
  margin: 1em;
`;

const ContainerBlueBox = styled(Typography)<any>`
  background-color: #cfe8fc;
  height: ${(props) => (props.fullheight ? "100%" : "5em")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7d7d7d;
`;

const Containers = () => {
  return (
    <ElementCard fullwidth title="Container">
      <div>
        <ContainerBox maxWidth="xs">
          <ContainerBlueBox>XS</ContainerBlueBox>
        </ContainerBox>
        <ContainerBox maxWidth="sm">
          <ContainerBlueBox>SM</ContainerBlueBox>
        </ContainerBox>
        <ContainerBox maxWidth="md">
          <ContainerBlueBox>MD</ContainerBlueBox>
        </ContainerBox>
        <ContainerBox maxWidth="lg">
          <ContainerBlueBox>LG</ContainerBlueBox>
        </ContainerBox>
        <ContainerBox maxWidth="xl">
          <ContainerBlueBox>XL</ContainerBlueBox>
        </ContainerBox>
      </div>
      <Code>
        {`
          <Container maxWidth="xs"><Box>XS</Box></Container>
          <Container maxWidth="sm"><Box>SM</Box></Container>
          <Container maxWidth="md"><Box>MD</Box></Container>
          <Container maxWidth="lg"><Box>LG</Box></Container>
          <Container maxWidth="xl"><Box>XL</Box></Container>
        `}
      </Code>
    </ElementCard>
  );
};

const Grids = () => {
  return (
    <ElementCard title="Grid">
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ContainerBlueBox>xs=12</ContainerBlueBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContainerBlueBox>xs=12 sm=6</ContainerBlueBox>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ContainerBlueBox>xs=12 sm=6</ContainerBlueBox>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ContainerBlueBox>xs=6 sm=3</ContainerBlueBox>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ContainerBlueBox>xs=6 sm=3</ContainerBlueBox>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ContainerBlueBox>xs=6 sm=3</ContainerBlueBox>
          </Grid>
          <Grid item xs={6} sm={3}>
            <ContainerBlueBox>xs=6 sm=3</ContainerBlueBox>
          </Grid>
        </Grid>
      </div>
      <Code>
        {`
          <Grid container spacing={3}>
            <Grid item xs={12}><Box>xs=12</Box></Grid>
            <Grid item xs={12} sm={6}><Box>xs=12 sm=6</Box></Grid>
            <Grid item xs={12} sm={6}><Box>xs=12 sm=6</Box></Grid>
            <Grid item xs={6} sm={3}><Box>xs=6 sm=3</Box></Grid>
            <Grid item xs={6} sm={3}><Box>xs=6 sm=3</Box></Grid>
            <Grid item xs={6} sm={3}><Box>xs=6 sm=3</Box></Grid>
            <Grid item xs={6} sm={3}><Box>xs=6 sm=3</Box></Grid>
          </Grid>
        `}
      </Code>
    </ElementCard>
  );
};

const Other = () => {
  return (
    <ElementCard title="Other">
      <div>
        <GridList cellHeight={160} cols={2}>
          <GridListTile cols={1}>
            <ContainerBlueBox fullheight={1} />
          </GridListTile>
          <GridListTile cols={1} rows={2}>
            <ContainerBlueBox fullheight={1} />
          </GridListTile>
          <GridListTile cols={2}>
            <ContainerBlueBox fullheight={1} />
          </GridListTile>
        </GridList>
      </div>
      <Code>
        {`
          <GridList cellHeight={160} cols={2}>
            <GridListTile cols={1}><Box /></GridListTile>
            <GridListTile cols={1} rows={2}><Box /></GridListTile>
            <GridListTile cols={2}><Box /></GridListTile>
          </GridList>
        `}
      </Code>
    </ElementCard>
  );
};

export const Layout = () => {
  return (
    <FlexWrapper>
      <Containers />
      <Grids />
      <Other />
    </FlexWrapper>
  );
};
