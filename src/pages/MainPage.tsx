import { Divider, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Paper)`
  min-width: 10em;
  width: 50%;
  max-width: 30em;
  margin: 1em;
`;

const Content = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10em;
  }

  hr {
    width: 100%;
  }
`;

const FrameworkCard = ({ name, site, logo, description }: any) => {
  return (
    <Card>
      <Content>
        <img src={logo} alt={`${name} logo`} />
        <Typography variant="h5">{name}</Typography>
        <Divider />
        <a href={site}>Documentation</a>
        <p>{description}</p>
      </Content>
    </Card>
  );
};

const MainPage = () => {
  return (
    <Container>
      <FrameworkCard
        name="Ant Design"
        site="https://ant.design/components/overview/"
        logo="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        description="A highly customizable yet opinionated framework made by XTech with all the components you can think of. The community is certainly present but there have been issues with repo's and website being down."
      />
      <FrameworkCard
        name="Chakra UI"
        site="https://chakra-ui.com/docs/getting-started"
        logo="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/logo/logomark-colored.svg"
        description=""
      />
      <FrameworkCard
        name="Material UI"
        site="https://material-ui.com/"
        logo="https://material-ui.com/static/logo_raw.svg"
        description="An opinionated framework with a bunch of components made by Google. It's been actively developed and has a large community."
      />
      <FrameworkCard
        name="Reakit"
        site="https://reakit.io/docs/get-started/"
        logo="https://user-images.githubusercontent.com/3068563/55114952-118f6b00-50c2-11e9-8879-d047e5686284.png"
        description="A toolkit in active development with great potential but is definitely not there yet."
      />
    </Container>
  );
};

export default MainPage;
