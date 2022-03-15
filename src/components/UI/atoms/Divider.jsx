const Divider = (props) => {
  return (
    <div>
      <hr
        className={`my-2.5 border-t-4	border-solid border-t-teal-400  ${props.commentDivide}`}
      />
      {/* commentDivide = "border-t-neutral-300" */}
    </div>
  )
}
export default Divider
