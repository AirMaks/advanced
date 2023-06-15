import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import MainPage from "./ProfilePage";

export default {
    title: "pages/MainPage",
    component: MainPage,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = args => <MainPage {...(args as {})} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    layout: "fullscreen"
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    layout: "fullscreen"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
