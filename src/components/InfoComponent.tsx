import styled from "styled-components";
import InfoIcon from "@material-ui/icons/Info";

const Info = styled.div`
  display: flex;
  padding: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 0.5em;
  border: 1px solid #276586;
  background-color: #d9eaf3;
  color: #276586;

  svg {
    margin-right: 4px;
  }
`;

interface InfoComponentProperties {
  children?: React.ReactNode;
}

const InfoComponent = ({ children }: InfoComponentProperties) => {
  return (
    <Info>
      <InfoIcon />
      {children}
    </Info>
  );
};

export default InfoComponent;
