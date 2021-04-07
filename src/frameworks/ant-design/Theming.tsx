import Code from "components/CodeComponent";
import ElementCard from "components/ElementCardComponent";
import FlexWrapper from "components/FlexWrapperComponent";

const OverallLevel = () => {
  return (
    <ElementCard title="Overall styling">
      <div>
        Ant Design uses Less variables to set the overall theme of the site.
        This list of variables is pretty large. The down side of this approach
        is that you can't switch themes or do anything "on the fly" and the
        styling is always global without manually scoping.
      </div>
      <Code language="less">
        {`
          @primary-color: #1890ff;
          @link-color: #1890ff;
          @success-color: #52c41a;
          @warning-color: #faad14;
          @error-color: #f5222d;
          .....
        `}
      </Code>
    </ElementCard>
  );
};

const ComponentLevel = () => {
  return (
    <ElementCard title="Component styling">
      <div>
        You can style individual components by assigning a class and using plain
        styling files or use inline styling.
      </div>
      <Code>
        {`
          import styles from './example.less';
          export default () => <div className={styles.title}>Some text</div>;

          <div className="antd-txt-error">Some text</div>

          <div style={{ width: 300 }}>Some text</div>
        `}
      </Code>
    </ElementCard>
  );
};

const StyledComponent = () => {
  return (
    <ElementCard title="Styled component">
      <div>
        You can use an external styled components package but you still have to
        override the antd classes, so there are no real extra benefit of
        wrapping them in a styled component then just using a plain style sheet.
      </div>
      <Code>
        {`
          const StyledButton = styled(Button)\`
            &.ant-btn-clicked:after {
              background-color: "#FE6B8B";
            }
          \`;

          <StyledButton>Some text</StyledButton>
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
    </FlexWrapper>
  );
};
