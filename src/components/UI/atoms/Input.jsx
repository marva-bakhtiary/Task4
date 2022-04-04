const Input = () => {
  const Styles = {
    style:
      "rounded block h-14	w-[450px] mr-8	text-xl border-2 border-teal-400 media	",
  };
  return (
    <div>
      <input className={Styles.style} type="text" placeholder="Search..." />
    </div>
  );
};
export default Input;
