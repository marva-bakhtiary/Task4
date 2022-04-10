import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardListItems from "../components/UI/molecules/CardListItems";
import img2 from "../assets/img-02.jpg";
export default {
  title: "components/Atoms/CardListItems",
  component: CardListItems,
} as ComponentMeta<typeof CardListItems>;

const Template: ComponentStory<typeof CardListItems> = (args) => (
  <CardListItems {...args} />
);

export const Default = Template.bind({});

Default.args = {
  character: {
    id: 1,
    img: img2,
    title: "Color hexa values of Xtra Blog",
    text: "If you wish to kindly support us, please contact us or contribute a small PayPal amount to info [at] templatemo.com that is helpful for us.Title #099 New #0CC Text #999 Line #CCC Next #0CC Prev #F0F0F0",
    tag: "Creative . Video . Audio May 31, 2020",
    comment: "84 comments by Admin Sam",
  },
  newBadge: false,
};
