const Navbar = () => {
  return (
    <div className="h-20 bg-white shadow flex items-center justify-between md:px-6 px-4 rounded-xl md:p-3 mt-2">
      <h1 className="md:text-xl text-lg font-semibold">People</h1>

      <div className="flex items-center gap-3">
        <span className=" text-xs md:text-sm border border-gray-200 rounded-3xl p-2 ">MST</span>
        <div className= " flex justify-center items-center border border-gray-200 rounded-3xl p-2 gap-1">
        <img src="./public/images/clock.png" alt="clock" className="md:w-5 md:h-5 w-3 h-3 " />
          <span className=" text-xs md:text-sm">02:03:02</span>
          <img src="./public/images/pen.png" alt="arrow" className="md:w-6 md:h-6 w-4 h-4" />
        </div>
        <img
          src="./public/images/Notification.png"
          alt="profile"
          className="md:w-10 md:h-10 w-8 h-8 rounded-full"
          />
        <img
          src="./public/images/aile.png"
          alt="profile"
          className="md:w-10 md:h-10 w-8 h-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;