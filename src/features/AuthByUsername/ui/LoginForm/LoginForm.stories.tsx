import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { LoginForm } from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = args => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
    layout: "fullscreen"
};
Primary.decorators = [
    StoreDecorator({
        loginForm: { email: "123", password: "asd" }
    })
];

export const WithError = Template.bind({});
WithError.args = {};

WithError.parameters = {
    layout: "fullscreen"
};
WithError.decorators = [
    StoreDecorator({
        loginForm: { email: "123", password: "asd", error: "ERROR" }
    })
];

export const Loading = Template.bind({});
Loading.args = {};

Loading.parameters = {
    layout: "fullscreen"
};
Loading.decorators = [
    StoreDecorator({
        loginForm: { isLoading: true }
    })
];
