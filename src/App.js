import styled from "styled-components";
import { PadBox } from "@bedrock-layout/padbox";
import { Center } from "@bedrock-layout/center";
import { Stack } from "@bedrock-layout/stack";
import { Split } from "@bedrock-layout/split";
import { Inline } from "@bedrock-layout/inline";
import { Menu } from "./Menu";
import { SidePanel } from "./SidePanel";
import { ProfilePanel } from "./ProfilePanel";

const ContentArea = styled(PadBox).attrs(() => ({ padding: "xl" }))`
  background-image: linear-gradient(to bottom, black 14rem, whitesmoke 14rem);
`;
const SettingsHeader = styled.header`
  color: white;
`;

const SettingsPane = styled(Split).attrs(() => ({
  gutter: "none",
  fraction: "1/4"
}))`
  background: white;
  border-radius: 0.5rem;
`;

const FormPanel = styled.div`
  border-inline-start: 1px solid lightgrey;

  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;
const SubLabel = styled.span`
  color: gray;
`;
const TogglePane = styled.div`
  > * + * {
    border-block-start: 1px solid lightgrey;
  }
`;
const Button = styled(PadBox).attrs(() => ({
  as: "button",
  padding: ["md", "lg"]
}))`
  border-radius: 0.25rem;
  border: ${(props) => (props.primary ? "none" : "1px solid black")};
  background: ${(props) => (props.primary ? "black" : "white")};
  color: ${(props) => (props.primary ? "white" : "black")};
`;

function ToggleGroup({ id, label, sublabel, checked }) {
  return (
    <Inline
      align="center"
      as={PadBox}
      padding={["lg", "none"]}
      gutter="lg"
      stretch="start"
    >
      <Stack as="label" gutter="sm" htmlFor={id}>
        {label}
        <SubLabel>{sublabel}</SubLabel>
      </Stack>
      <input id={id} type="checkbox" checked={checked} />
    </Inline>
  );
}
export default function App() {
  return (
    <div>
      <Menu />
      <ContentArea>
        <Center as={Stack} gutter="xl" maxWidth="85rem">
          <SettingsHeader>
            <h1>Settings</h1>
          </SettingsHeader>
          <SettingsPane as="main">
            <SidePanel />
            <FormPanel>
              <ProfilePanel />

              <PadBox as="section" padding="lg">
                <Stack gutter="lg">
                  <Stack as="header" gutter="md">
                    <h2>Privacy</h2>
                    <SubLabel>
                      This information will be displayed publicly so be careful
                      what you share.
                    </SubLabel>
                  </Stack>
                  <TogglePane>
                    <ToggleGroup
                      checked
                      id="available"
                      label="Available for hire"
                      sublabel="Interdum velit euismod in pellentesque massa"
                    />
                    <ToggleGroup
                      checked
                      id="private"
                      label="Make Account Private"
                      sublabel="Interdum velit euismod in pellentesque massa"
                    />
                    <ToggleGroup
                      id="comment"
                      label="Allow Commenting"
                      sublabel="Interdum velit euismod in pellentesque massa"
                    />
                    <ToggleGroup
                      checked
                      id="mentions"
                      label="Allow mentions"
                      sublabel="Interdum velit euismod in pellentesque massa"
                    />
                  </TogglePane>
                </Stack>
              </PadBox>
              <Inline as={PadBox} padding="lg" gutter="lg" justify="end">
                <Button>Cancel</Button>
                <Button primary>Save</Button>
              </Inline>
            </FormPanel>
          </SettingsPane>
        </Center>
      </ContentArea>
    </div>
  );
}
