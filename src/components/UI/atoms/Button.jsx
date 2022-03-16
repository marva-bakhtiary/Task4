const Button = (props) => {
  const {type }=props;
 
  return (
    <div>
      <button  className={ type === "default" ? "border-none w-[60px] h-[60px] color text-2xl	transition-all duration-300	ease rounded hover:bg-teal-500 cursor-pointer" : 'hidden'} >{props.content}</button>
    </div>
  )
}
export default Button




// 1*  Toggler:
// normal: 'hidden'
// Query (max-width:850px): md: ' block fixed top-0	left-0 color py-2.5	px-4	transition-all	transition-[0.3s] '

// 2*  Search-Submit:
// "border-none w-[60px] h-[60px] color text-2xl	transition-all duration-300	ease rounded hover:bg-teal-500 cursor-pointer"

// 3*  Footer:
// btn: "inline-block	text-2xl	transition-all duration-300	ease rounded"
// btn-first: "color border-none	py-2	px-11	"  => hover: "bg-teal-500"
// disabled: "cursor-not-allowed	mr-5	bg-neutral-300	text-neutral-400"
// paging-link: "flex items-center	justify-center	w-12 h-12 bg-neutral-300	text-neutral-400	" => hover , active: "color"
