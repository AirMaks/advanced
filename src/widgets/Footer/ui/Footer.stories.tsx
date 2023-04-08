import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Footer } from "./Footer";

export default {
    title: "widgets/Footer",
    component: Footer,
    layout: "fullscreen",
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {
    layout: "fullscreen"
};
Light.decorators = [StoreDecorator({})];
export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    layout: "fullscreen"
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
