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

  @media only screen and (max-width: 1060px) {
    width: unset;
  }
`;

const Content = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg,
  img {
    width: 10em;
  }

  hr {
    width: 100%;
  }
`;

const Title = styled(Typography)`
  text-align: center;
  color: #a0a0a0;
  margin-top: 1em;
`;

const FrameworkCard = ({ name, site, logo, svg, description }: any) => {
  return (
    <Card>
      <Content>
        {logo && <img src={logo} alt={`${name} logo`} />}
        {svg}
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
    <>
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
          description="The new kid on the block that's given the right example by having focus on accessability and customization with their bundle of components."
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
        <FrameworkCard
          name="React Bootstrap"
          site="https://react-bootstrap.github.io/getting-started/introduction/"
          logo="https://raw.githubusercontent.com/react-bootstrap/react-bootstrap/master/www/static/logo.svg"
          description="Ye old bootstrap, who didn't grow up with writing a million bootstrap classes!? Luckily it's ported to React so you don't have to think that hard anymore."
        />
      </Container>

      <Divider />
      <Title variant="h4">Others that might be interesting</Title>
      <Container>
        <FrameworkCard
          name="Grommet"
          site="https://v2.grommet.io/components"
          svg={
            <svg viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="#865CD6"
                strokeWidth="4"
                d="M12,2 C6.485,2 2,6.485 2,12 C2,17.515 6.485,22 12,22 C17.515,22 22,17.515 22,12 C22,6.485 17.515,2 12,2 Z"
              ></path>
            </svg>
          }
          description="A kit with a bunch of components you can't find anywhere else like charts, diagrams, a world map and more. Theming seems to use CSS vars instead of an object or provider, the default theme looks and feels very playful."
        />
        <FrameworkCard
          name="Fluent UI"
          site="https://fluentsite.z22.web.core.windows.net/0.54.0"
          logo="https://fabricweb.azureedge.net/fabric-website/assets/images/fluent-ui-logo-black.png"
          description="A UI kit from Microsoft and gives that very specific Microsoft look and feel to your application."
        />

        <FrameworkCard
          name="Evergreen"
          site="https://evergreen.segment.com/components"
          svg={
            <svg viewBox="0 0 32 32">
              <g
                transform="translate(-33.000000, -66.000000) translate(33.000000, 66.000000)"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <circle fill="#38A065" cx="16" cy="16" r="16"></circle>
                <rect fill="#FFF" x="15" y="22" width="2" height="4"></rect>
                <use fill="#FFF" fillRule="evenodd"></use>
                <path
                  stroke="#FFF"
                  strokeWidth="1.5"
                  d="M16 8.677L10.214 20.25h11.572L16 8.677z"
                ></path>
              </g>
            </svg>
          }
          description="Looks like a basic one in a billion UI kit with no real uniqueness to it."
        />
      </Container>
      <Divider />
      <Title variant="h4">It's a no for me</Title>
      <Container>
        <FrameworkCard
          name="PrimeReact"
          site="https://www.primefaces.org/primereact/showcase/#/setup"
          logo="https://raw.githubusercontent.com/primefaces/primereact/master/public/showcase/images/logo.png"
          description="A design agnostic UI kit where by using themes you can style your app to use Material, Fluent UI, Bootstrap or your own theme. But loads large styling files like you did in 2010 so not a viable option in this day and age. "
        />
        <FrameworkCard
          name="Semantic UI"
          site="https://semantic-ui.com/introduction/getting-started.html"
          logo="https://semantic-ui.com/images/logo.png"
          description="Hasn't been actively maintained since 2018."
        />
      </Container>
    </>
  );
};

export default MainPage;
