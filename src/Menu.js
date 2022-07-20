import { Inline } from "@bedrock-layout/inline";
import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";
import { Logo } from "./Logo";

const MenuBar = styled(Inline).attrs(() => ({
  as: PadBox,
  padding: ["md", "xl"],
  stretch: 1,
  gutter: "lg",
  align: "center"
}))`
  background-color: black;
  color: white;
  border-block-end: 1px solid #303030;
`;
const MenuItem = styled(PadBox).attrs(() => ({
  padding: ["sm", "md"],
  as: "li"
}))`
  background: ${(props) => (props.active ? "#303030" : "transparent")};
  border-radius: 0.25rem;
`;
const SearchInput = styled(PadBox).attrs(() => ({
  as: "input",
  padding: ["sm", "lg"]
}))`
  border-radius: 0.25rem;
  background: #303030;
  border: none;
  color: white;
`;

export function Menu() {
  return (
    <MenuBar>
      <Logo size="2.5rem" />
      <nav>
        <Inline as="ul" gutter="sm">
          <MenuItem active>Dashboard</MenuItem>
          <MenuItem>Job</MenuItem>
          <MenuItem>Applicants</MenuItem>
          <MenuItem>Company</MenuItem>
        </Inline>
      </nav>
      <SearchInput placeholder="Search" />
      <Logo square size="1.5rem" />
      <Logo size="2rem" />
    </MenuBar>
  );
}
