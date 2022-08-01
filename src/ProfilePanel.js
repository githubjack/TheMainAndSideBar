import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Columns, Column } from "@bedrock-layout/columns";
import { Logo } from "./Logo";

const SubLabel = styled.span`
  color: gray;
`;
const Input = styled.input`
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  color: #303030;
`;
function InputGroup({ label, children }) {
  return (
    <Stack as="label" gutter="sm">
      {label}
      {children}
    </Stack>
  );
}

export function ProfilePanel() {
  return (
    <PadBox as="section" padding="lg">
      <Stack gutter="lg">
        <Stack as="header" gutter="md">
          <h2>Profile</h2>
          <SubLabel>
            This information will be displayed publicly so be careful what you
            share.
          </SubLabel>
        </Stack>
        <Split gutter="lg" fraction="auto-end">
          <Stack gutter="lg">
            <InputGroup label="User Name">
              <Input />
            </InputGroup>
            <InputGroup label="About">
              <Input as="textarea" />
              <SubLabel>
                Brief description for your profile. URLs are hyperlinked
              </SubLabel>
            </InputGroup>
          </Stack>
          <label>
            Photo
            <Logo inverse size="10rem" />
          </label>
        </Split>
        <Columns gutter="lg" columns={2}>
          <InputGroup label="First Name">
            <Input />
          </InputGroup>
          <InputGroup label="Last Name">
            <Input />
          </InputGroup>
          <Column span={2}>
            <InputGroup label="URL">
              <Input />
            </InputGroup>
          </Column>
          <InputGroup label="Company">
            <Input />
          </InputGroup>
        </Columns>
      </Stack>
    </PadBox>
  );
}
