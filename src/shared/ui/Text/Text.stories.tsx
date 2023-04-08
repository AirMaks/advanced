import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Text } from "./Text";

export default {
    title: "shared/Text",
    component: Text,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Small = Template.bind({});
Small.args = {
    text: "Text",
    small: true
};
export const Middle = Template.bind({});
Middle.args = {
    text: "Text",
    middle: true
};

export const Large = Template.bind({});
Large.args = {
    text: "Text",
    large: true
};

export const Semibold = Template.bind({});
Semibold.args = {
    text: "Text",
    semibold: true,
    middle: true
};

export const Bold = Template.bind({});
Bold.args = {
    text: "Text",
    bold: true,
    middle: true
};
