import Divider from "../atoms/Divider";
import Badge from "../atoms/Badge";

type CardProps = {
  character: {
    id: number;
    img: any;
    title: string;
    text: string;
    tag: string;
    comment: string;
  };
  newBadge: boolean;
};
const CardListItems = ({ character, newBadge }: CardProps) => {
  return (
    <article className="max-w-[470px] mb-20">
      <a
        className="block relative cursor-pointer no-underline pt-[60px] "
        href="https://www.google.com/"
      >
        <Divider commentDivide="border-t-8 border-t-teal-400 " />
        <img
          className="relative block min-h-full	max-h-full opacity-80 hover:opacity-100	"
          src={character.img}
          alt="post"
        />
        {newBadge && <Badge />}

        <h2 className="text-teal-600 text-3xl	transition-all duration-300	ease pt-7 hover:text-teal-400">
          {character.title}
        </h2>
      </a>
      <p>{character.text}</p>
      <div className="pt-11 justify-between">
        <span className=" text-teal-400">{character.tag}</span>
        <Divider commentDivide="border-t-neutral-400 border-t-2	" />
        <span className="justify-between block">{character.comment}</span>
      </div>
    </article>
  );
};
export default CardListItems;
