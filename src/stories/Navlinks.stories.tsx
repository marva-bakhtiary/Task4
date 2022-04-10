import { faHome } from "@fortawesome/free-solid-svg-icons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "../components/UI/atoms/Icon";
import NavLinks from "../components/UI/molecules/NavLinks";

export default {
  title: "components/Atoms/NavLinks",
  component: NavLinks,
} as ComponentMeta<typeof NavLinks>;

const Template: ComponentStory<typeof NavLinks> = (args) => (
  <NavLinks {...args} />
);

export const Default = Template.bind({});

Default.args = {
  link: {
    id: 1,
    title: "Blog Home",
    icon: <Icon iconShape={faHome} extraClass="mr-5 pr-5" />,
  },
};
