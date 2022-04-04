const Divider = (props) => {
  return (
    <div>
      <hr
        className={`pt-16	  border-t-8 border-solid border-t-teal-400  ${props.commentDivide}`}
      />
    </div>
  );
};
export default Divider;
