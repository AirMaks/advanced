import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "./Loader";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
    title: "shared/Loader",
    component: Loader,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = args => <Loader {...args} />;
export const SizeDefault = Template.bind({});
SizeDefault.args = {};

export const SizeXS = Template.bind({});
SizeXS.args = {
    size: "xs"
};
export const SizeS = Template.bind({});
SizeS.args = {
    size: "s"
};
export const SizeM = Template.bind({});
SizeM.args = {
    size: "m"
};
export const SizeL = Template.bind({});
SizeL.args = {
    size: "l"
};
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dots = Template.bind({});
Dots.args = {
    type: "dots"
};

export const DarkDots = Template.bind({});
DarkDots.args = { type: "dots" };
DarkDots.parameters = {
    layout: "fullscreen"
};
DarkDots.decorators = [ThemeDecorator(Theme.DARK)];
