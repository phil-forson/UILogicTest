import DotIcon from "../assets/images/dot.svg";

const Ellipsis = () => {
  return (
    <div className="w-8 h-8 rounded-full bg-white text-green1 flex justify-center items-center space-x-[2px]">
            <img src={DotIcon} className="w-[2px] h-[4px]" />
            <img src={DotIcon} className="w-[2px] h-[4px]" />
            <img src={DotIcon} className="w-[2px] h-[4px]" />
          </div>
  )
}

export default Ellipsis