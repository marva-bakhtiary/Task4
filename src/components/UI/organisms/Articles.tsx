import CardListItems from "../molecules/CardListItems";
import img1 from "../../../assets/img-01.jpg";
import img2 from "../../../assets/img-02.jpg";
import img3 from "../../../assets/img-03.jpg";
import img4 from "../../../assets/img-04.jpg";
import img5 from "../../../assets/img-05.jpg";
import img6 from "../../../assets/img-06.jpg";
const Characters = [
  {
    id: 1,
    img: img1,
    title: "Simple and useful HTML layout",
    text: "There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.",
    tag: "Travel . Events June 24, 2020",
    comment: "36 comments by Admin Nat",
  },
  {
    id: 2,
    img: img2,
    title: "Multi-purpose blog template",
    text: " is a multi-purpose HTML CSS template from TemplateMo website.Blog list, single post, about, contact pages are included. Left sidebar fixed width and content area is a fluid full-width.",
    tag: "Creative . Design . Business June 16, 2020",
    comment: "48 comments by Admin Sam",
  },
  {
    id: 3,
    img: img3,
    title: "How can you apply Xtra Blog",
    text: "You are allowed to convert this template as any kind of CMS theme or template for your custom website builder. You can also use this for your clients. Thank you for choosing us.",
    tag: "Music . Audio June 11, 2020",
    comment: "24 comments by John Walker",
  },
  {
    id: 4,
    img: img4,
    title: "A little restriction to apply",
    text: "You are not allowed to re-distribute this template as a downloadable ZIP file on any template collection website. This is strongly prohibited as we worked hard for this template. Please contact TemplateMo for more information.For example, Free-CSS redistributed this Xtra Blog template on their website without asking any permission. It is an illegal act by Free-CSS website doing an unauthorized reposting.",
    tag: "Artworks . Design June 4, 2020",
    comment: "72 comments by Admin Sam",
  },
  {
    id: 5,
    img: img5,
    title: "Color hexa values of Xtra Blog",
    text: "If you wish to kindly support us, please contact us or contribute a small PayPal amount to info [at] templatemo.com that is helpful for us.Title #099 New #0CC Text #999 Line #CCC Next #0CC Prev #F0F0F0",
    tag: "Creative . Video . Audio May 31, 2020",
    comment: "84 comments by Admin Sam",
  },
  {
    id: 6,
    img: img6,
    title: "Donec convallis varius risus",
    text: "Quisque id ipsum vel sem maximus vulputate sed quis velit. Nunc vel turpis eget orci elementum cursus vitae in eros. Quisque vulputate nulla ut dolor consectetur luctus.",
    tag: "Visual . Artworks June 16, 2020",
    comment: "96 comments by Admin Nat",
  },
];
const Articles = () => {
  return (
    <div className="max-w-6xl	justify-between	flex flex-wrap pt-7	-mx-3.5">
      {Characters.map((character, key) => {
        return (
          <CardListItems
            character={character}
            key={character.id}
            new={key < 2 ? true : false}
          />
        );
      })}
    </div>
  );
};
export default Articles;
