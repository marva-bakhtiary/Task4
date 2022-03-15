const CardListItems = (props) => {
    return (
          <article className="max-w-[470px] mb-20">
              <a className="block relative cursor-pointer no-underline pt-[60px] " href="https://www.google.com/">
                  <img className="relative block min-h-full	max-h-full opacity-80 hover:opacity-100	" src={props.character.img} alt="post"/>
          <h2 className="text-teal-600 text-3xl	transition-all duration-300	ease pt-7 hover:text-teal-400">{props.character.title}</h2>
              </a>
              <p>{props.character.text}</p>
              <div className="pt-11 justify-between">
              <span className=" text-teal-400">{props.character.tag}</span>
              <span className="justify-between block">{props.character.comment}</span>
              </div>
        </article>
    )
}
export default CardListItems