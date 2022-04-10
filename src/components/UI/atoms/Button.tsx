interface ButtonProps {
  type: string;
  content: string | object;
  buttonType?: string;
}
//React.CSSProperties
const Button = ({ type, content, buttonType }: ButtonProps) => {
  return (
    <div>
      <button
        className={
          type === "default"
            ? ` border-none  h-14 color text-2xl	transition-all duration-300	ease rounded ${buttonType}`
            : "hidden"
        }
      >
        {content}
      </button>
    </div>
  );
};
export default Button;
