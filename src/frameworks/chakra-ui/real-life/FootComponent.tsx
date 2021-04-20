import { Flex, UnorderedList, ListItem } from "@chakra-ui/react";
import { css } from "@emotion/react";

const footerStyle = css`
  width: 100%;
  color: white;
  height: 64px;
  padding: 0 24px;
  position: absolute;
  bottom: 0;
  justify-content: flex-end;
  align-items: center;
`;

const listStyle = css`
  list-style: none;
`;

const FooterComponent = () => {
  return (
    <Flex bgColor="primary.500" css={footerStyle}>
      <UnorderedList css={listStyle} color="secondary.500">
        <ListItem>
          <a target="_blank" rel="noreferrer" href="https://ellenlangelaar.nl">
            Portfolio
          </a>
        </ListItem>
        <ListItem>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://blog.ellenlangelaar.nl"
          >
            Blog
          </a>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

export default FooterComponent;
