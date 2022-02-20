import InputEmail from "./InputEmail";

export default {
    title: 'InputEmail',
    component: InputEmail
}

const Template = args => <InputEmail {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: "email"
};