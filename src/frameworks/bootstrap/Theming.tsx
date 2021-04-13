import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div>
        There is a "ThemeProvider" available but that is used to set custom
        prefixes for components and not so much to implement a global style.
        These are set using a custom (S)CSS file
      </div>
      <Code>
        {`
          // Theme provider
          <ThemeProvider prefixes={{ btn: 'my-btn' }}>
            <Button variant="primary">My Button</Button>
          </ThemeProvider>

          <style type="text/css">
            {\`
            .my-btn {
              background-color: orange;
            }
            \`}
          </style>
          <Button>Button</Button>
          

          // Custom SCSS
          $theme-colors: (
              "info": tomato,
              "danger": teal
          );

          @import "~bootstrap/scss/bootstrap";
        `}
      </Code>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div>
        You can override the prefix for a specific component so you can target
        that specific class.
      </div>
      <Code>
        {`
          <style type="text/css">
            {\`
            .super-btn {
              background-color: purple;
            }
            \`}
          </style>

          <Button bsPrefix="super-btn>Button</Button>
        `}
      </Code>
    </ElementCard>
  );
};

const StyledComponent = () => {
  return (
    <ElementCard title="Styled component">
      <div>There is no build in use of CSS in JS.</div>
    </ElementCard>
  );
};

const ThirdParty = () => {
  return (
    <ElementCard title="Third party">
      <div>
        Third party packages like styled-components work without problem. The
        thing is that it's still heavy class name dependent, but that might be a
        case of taste.
      </div>
      <Code>
        {`
          const BlueContainer = styled(Container)\`
            background-color: #cfe8fc;
            margin: 1em 0;

            .row > div {
              border: 1px solid #d6d6d6;
              padding: 0.5em;
            }
          \`;

          <BlueContainer>
            <Row>
              <Col sm={8}>Container</Col>
            </Row>
          </BlueContainer>
        `}
      </Code>
    </ElementCard>
  );
};

export const Theming = () => {
  return (
    <FlexWrapper>
      <OverallLevel />
      <ComponentLevel />
      <StyledComponent />
      <ThirdParty />
    </FlexWrapper>
  );
};
