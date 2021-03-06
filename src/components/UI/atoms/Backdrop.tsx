interface BackdropProps {
  show: boolean;
  hide: React.MouseEventHandler<HTMLDivElement>;
}
const Backdrop = ({ show, hide }: BackdropProps) =>
  show ? (
    <div
      data-testid="backdropID"
      className="w-full h-full fixed left-0 top-0 z-[100] bg-stone-400 bg-opacity-50 "
      onClick={hide}
    ></div>
  ) : null;
export default Backdrop;
