import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../components/UI/atoms/Button";

export default {
  title: "components/Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  content: "Button",
  type: "default",
  buttonType: "hover:bg-teal-500",
};

export const disable = Template.bind({});

disable.args = {
  ...Default.args,
  content: "disable",
  buttonType:
    "w-32 cursor-not-allowed bg-neutral-200	text-zinc-500	hover:bg-neutral-300 underline",
};

export const paginate = Template.bind({});

paginate.args = {
  ...Default.args,
  content: "1",
  buttonType:
    "bg-neutral-200	text-zinc-500 hover:bg-teal-400 hover:text-white underline w-[60px]	ml-4",
};
