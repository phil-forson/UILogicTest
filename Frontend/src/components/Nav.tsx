import BookingsIcon from "../assets/images/icons/BookingsIcon";
import CustomersIcon from "../assets/images/icons/CustomersIcon";
import DashboardIcon from "../assets/images/icons/DashboardIcon";
import ServicesIcon from "../assets/images/icons/ServicesIcon";
import Logo from "../assets/images/logo.png";
import DropdownIcon from "../assets/images/dropdownIcon.svg";
import MenuIcon from "../assets/images/menu.svg";
import { useState } from "react";

export const Nav: React.FC = () => {
  const [activeItem, setActiveItem] = useState("Customers");
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to render a navigation link
  const renderNavLink = (
    label: string,
    IconComponent: React.FC<{ className: string }>
  ) => {
    const isActive = activeItem === label;
    return (
      <div
        onClick={() => {
          setActiveItem(label)
          setMenuOpen(false)
        }}
        className={`flex items-center px-[12px] py-2 cursor-pointer 
                    ${
                      isActive
                        ? " bg-primary5 text-black1 rounded-[1000px] "
                        : " text-primary3"
                    }`}
      >
        <IconComponent className={isActive ? "text-black1" : "text-primary3"} />
        <div className="ml-[8px] decoration-0 cursor-pointer">
          {label}
        </div>
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center px-[80px] sm:px-[120px] md:px-[160px] lg:px-[250px] py-4 bg-white ">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src={Logo} className="w-24 sm:w-auto "/>
      </div>

      {/* Links */}
      <div className="hidden lg:flex space-x-[12px] mx-auto">
        {renderNavLink("Dashboard", DashboardIcon)}
        {renderNavLink("Bookings", BookingsIcon)}
        {renderNavLink("Customers", CustomersIcon)}
        {renderNavLink("Services", ServicesIcon)}
      </div>

      {/* User Info */}
      <div className="flex justify-between space-x-3 vsm:space-x-9">
        <div className="lg:hidden flex items-center relative">
          <img
            src={MenuIcon}
            className="text-primary3 cursor-pointer w-7 vsm:w-auto"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          {menuOpen && (
            <div className="lg:hidden absolute top-10 right-0 w-[200px] bg-white rounded-lg shadow-lg p-4">
              {renderNavLink("Dashboard", DashboardIcon)}
              {renderNavLink("Bookings", BookingsIcon)}
              {renderNavLink("Customers", CustomersIcon)}
              {renderNavLink("Services", ServicesIcon)}
            </div>
          )}
        </div>
        <div className="flex items-center border-[1px] px-[16px] py-[8px] border-primary7 rounded-[4px] ">
          <div className="lg:flex flex-col hidden ">
            <div className="text-black2">Buukmenow Demo</div>
            <div className="text-primary8 text-[12px] ">
              Buukmenow@gmail.com
            </div>
          </div>

          <div className="lg:hidden">BD</div>
          <img src={DropdownIcon} className="ml-4 text-lg" />
        </div>
      </div>
    </div>
  );
};
