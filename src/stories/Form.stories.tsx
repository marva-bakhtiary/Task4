import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "../components/UI/molecules/Form";
export default {
  title: "components/Atoms/Form",
  component: Form,
} as ComponentMeta<typeof Form>;

export const Default: ComponentStory<typeof Form> = (args) => <Form />;
