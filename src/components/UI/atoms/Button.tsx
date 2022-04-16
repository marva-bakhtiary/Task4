interface ButtonProps {
  content: string | object;
  buttonType?: string;
}
const Button = ({ content, buttonType }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={` border-none  h-14 color text-2xl	transition-all duration-300	ease rounded ${buttonType}`}
      >
        {content}
      </button>
    </div>
  );
};
export default Button;
