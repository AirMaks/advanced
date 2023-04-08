import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "shared/ui/Input/Input";

export default {
    title: "shared/Input",
    component: Input,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = { value: "Roman" };

export const WithoutBorder = Template.bind({});
WithoutBorder.args = {
    placeholder: "Type text",
    value: "Text",
    border: false
};

export const Squared = Template.bind({});
Squared.args = {
    placeholder: "Type text",
    value: "Text",
    rounded: false,
    border: true
};

export const Autofocus = Template.bind({});
Autofocus.args = {
    placeholder: "Type text",
    autofocus: true
};

export const FocusOutline = Template.bind({});
FocusOutline.args = {
    placeholder: "Type text",
    autofocus: true,
    focusOutline: true
};
