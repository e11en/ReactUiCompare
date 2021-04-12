import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div>Components are unstyled by default.</div>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div>
        You can easily use inline styled, CSS modules or external packages.
      </div>
      <Code>
        {`
          import { Button } from "reakit";

          function Example() {
            return <Button style={{ color: "white", background: "red" }}>Button</Button>;
          }
        `}
      </Code>
    </ElementCard>
  );
};

const ThirdParty = () => {
  return (
    <ElementCard title="Third party">
      <div>
        Using other packages to add styling is really easy, the only down side
        is that you have to use render props when using libraries like
        styled-component that use de "as" property. Reakit has its own use for
        the "as" property which is then overrided by the package.
      </div>
      <Code>
        {`
          import { Button } from "reakit";
          import { css } from "emotion";

          function Example() {
            return (
              <Button
                className={css({
                  color: "white",
                  background: "red",
                  "&:not([disabled]):hover": { background: "green" },
                  "&:not([disabled]):active": { background: "blue" },
                })}
              >
                Button
              </Button>
            );
          }
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
      <ThirdParty />
    </FlexWrapper>
  );
};
