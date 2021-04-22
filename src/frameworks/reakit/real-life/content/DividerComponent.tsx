import styled from "@emotion/styled";

const Divider = styled.div`
  flex: 1;
  padding: 0 1em;
`;

const Vertical = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  height: 100%;
`;

const DividerComponent = ({ orientation = "horizontal" }: any) => {
  return (
    <Divider>
      {orientation === "horizontal" && <hr aria-orientation={orientation} />}
      {orientation === "vertical" && <Vertical />}
    </Divider>
  );
};

export default DividerComponent;
