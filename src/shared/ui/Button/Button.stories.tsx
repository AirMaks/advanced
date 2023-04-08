import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Yellow = Template.bind({});
Yellow.args = {
    children: "Text",
    yellow: true
};
export const Red = Template.bind({});
Red.args = {
    children: "Text",
    red: true
};

export const Green = Template.bind({});
Green.args = {
    children: "Text",
    green: true
};

export const Blue = Template.bind({});
Blue.args = {
    children: "Text",
    blue: true
};
export const Black = Template.bind({});
Black.args = {
    children: "Text",
    black: true
};

export const Grey = Template.bind({});
Grey.args = {
    children: "Text",
    grey: true
};

export const Rounded = Template.bind({});
Rounded.args = {
    children: "Text",
    rounded: true,
    yellow: true
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    children: "Text",
    rounded: true,
    w100: true,
    yellow: true
};

export const Semibold = Template.bind({});
Semibold.args = {
    children: "Text",
    rounded: true,
    yellow: true,
    semibold: true
};

export const WithLoaderSpinner = Template.bind({});
WithLoaderSpinner.args = {
    children: "Text",
    rounded: true,
    yellow: true,
    loader: true,
    disabled: true,
    size: "s"
};

export const WithLoaderDots = Template.bind({});
WithLoaderDots.args = {
    children: "Text",
    rounded: true,
    yellow: true,
    loader: true,
    disabled: true,
    size: "s",
    loaderOptions: {
        loaderType: "dots",
        loaderSize: "xs"
    }
};
