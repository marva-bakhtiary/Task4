const Button = (props) => {
  const { type } = props;

  return (
    <div>
      <button
        className={
          type === "default"
            ? ` border-none  h-14 color text-2xl	transition-all duration-300	ease rounded ${props.buttonType}`
            : "hidden"
        }
      >
        {props.content}
      </button>
    </div>
  );
};
export default Button;
