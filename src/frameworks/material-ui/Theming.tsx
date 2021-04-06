import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div>
        You can use a <i>ThemeProvider</i> to style all given children. It's
        easy to set and/or change colors, text sizes and other overall styling.
      </div>
      <Code>
        {`
          const theme = createMuiTheme({
            palette: {
              primary: {
                main: purple[500]
              },
              secondary: {
                main: green[500]
              }
            }
          });

          <ThemeProvider theme={theme}>
            <Content />
          </ThemeProvider>
        `}
      </Code>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div>
        You can use the <i>makeStyles</i> method to set the styling of a
        specific component with the use of the <i>classes</i> property.
      </div>
      <Code>
        {`
          const useStyles = makeStyles({
            root: {
              background: '#FE6B8B'
            },
            label: {
              textTransform: 'capitalize'
            }
          });

          const classes = useStyles();

          <Button
            classes={{
              root: classes.root,
              label: classes.label
            }}>
            Some text
          </Button>
        `}
      </Code>
    </ElementCard>
  );
};

const StyledComponent = () => {
  return (
    <ElementCard title="Styled component">
      <div>
        By using the samen <i>makeStyles</i> method we can create "styled
        component". This also works for a package like Styled-Components or Em
      </div>
      <Code>
        {`
          const StyledButton = makeStyles({
            root: {
              background: '#FE6B8B'
            },
            label: {
              textTransform: 'capitalize'
            }
          })(Button);

          <StyledButton>Some text</StyledButton>
        `}
      </Code>
    </ElementCard>
  );
};

const ThirdParty = () => {
  return (
    <ElementCard title="Third party">
      <div>
        The integration with packages like <i>Styled-Components</i> and{" "}
        <i>Emotion</i> is well documented and works out of the box.
      </div>
      <Code>
        {`
          // Styled-Components
          const StyledButton = styled(Button)\`background-color: #6772e5;\`;

          // Emotion
          <Button css={css\`background-color: #6772e5;\`}>
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
