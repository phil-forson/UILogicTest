import BookingsIcon from "../assets/images/icons/BookingsIcon";
import CustomersIcon from "../assets/images/icons/CustomersIcon";
import DashboardIcon from "../assets/images/icons/DashboardIcon";
import ServicesIcon from "../assets/images/icons/ServicesIcon";
import Logo from "../assets/images/logo.png";
import { useState } from "react";

export const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Customers");

  // Function to render a navigation link
  const renderNavLink = (
    label: string,
    IconComponent: React.FC<{ className: string }>
  ) => {
    const isActive = activeItem === label;
    return (
      <div
        onClick={() => setActiveItem(label)}
        className={`flex items-center px-[12px] py-2 cursor-pointer 
                    ${
                      isActive
                        ? " bg-primary5 text-black rounded-[1000px] "
                        : " text-primary3"
                    }`}
      >
        <IconComponent className={isActive ? "text-black" : "text-gray-700"} />
        <div className="ml-[8px] text-lg decoration-0 cursor-pointer">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center px-64 py-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <img src={Logo} />
      </div>

      {/* Links */}
      <div className="flex space-x-[12px] mx-auto">
        {renderNavLink("Dashboard", DashboardIcon)}
        {renderNavLink("Bookings", BookingsIcon)}
        {renderNavLink("Customers", CustomersIcon)}
        {renderNavLink("Services", ServicesIcon)}
      </div>

      {/* User Info */}
      <div className="flex items-center border-[1px] px-[16px] py-[8px] border-primary7 rounded-[4px] ">
        <div className="flex flex-col ">
          <div className="text-black1">Buukmenow Demo</div>
          <div className="text-primary8 text-[12px] ">Buukmenow@gmail.com</div>
        </div>
        <button className="ml-4 text-lg">↓</button>
      </div>
    </div>
  );
};
