interface DividerProps {
  commentDivide: string;
}
const Divider = ({ commentDivide }: DividerProps) => {
  return (
    <div>
      <hr className={`pt-10	border-solid  ${commentDivide}`} />
    </div>
  );
};
export default Divider;
