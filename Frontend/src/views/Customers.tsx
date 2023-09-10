import { useEffect, useState } from "react";
import SearchIcon from "../assets/images/searchIcon.svg";
import DotIcon from "../assets/images/dot.svg";

import Table from "../components/Table";
import ArrowLeftIcon from "../assets/images/icons/ArrowLeftIcon";
import ArrowRight from "../assets/images/icons/ArrowRight";
import Modal from "../components/Modal";
import CreateCampaignIcon from "../assets/images/icons/CreateCampaignIcon";
import { Campaign } from "../../types";
import { fetchCampaigns } from "../helpers/fetchCampaigns";

const Customers = () => {
  const [activeTab, setActiveTab] = useState<string>("Campaigns");

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);


  const [isModalOpen, setModalOpen] = useState(false);


  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Create a random array of length 90
  const randomArray = Array.from({ length: 90 }, () =>
    Math.floor(Math.random() * 100)
  );

  // Items per page
  const itemsPerPage = 10;

  // Total pages
  const totalPages = Math.ceil(randomArray.length / itemsPerPage);

  // Current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Function to update the current page
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      console.log("new page ", newPage);
      setCurrentPage(newPage);
    }
  };

  // Calculate the items to show for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = randomArray.slice(startIndex, endIndex);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCampaigns();
      console.log('data ', data)
      setCampaigns(data);
    };

    fetchData();
  }, []);

  const renderActiveTab = (text: string) => {
    const isActive = activeTab === text;
    return (
      <a
        className={` pb-[20px] px-[12px] cursor-pointer ${
          isActive
            ? " border-b-[2px] border-green1 text-black1 "
            : "text-primary3"
        }`}
        onClick={() => setActiveTab(text)}
      >
        {text}
      </a>
    );
  };
  return (
    <div className="px-[250px] bg-primary5 w-full pt-[32px] pb-[136px] text-[20px] text-black1">
      <div className="">Customers</div>
      <div className="pt-[16px] text-primary3">
        See all your customers in one place
      </div>
      <div className="pt-[40px] flex space-x-[12px] border-b-[2px] border-gray2">
        {renderActiveTab("Customer Log")}
        {renderActiveTab("Campaigns")}
      </div>
      <div className="pt-[24px] flex justify-between h-auto ">
        <div className="flex gap-[8px]">
          <div className="h-full w-[530px] border-[2px] border-gray2 rounded-[6px] flex items-center space-x-[10px] bg-white p-[16px] ">
            <img src={SearchIcon} className="w-[20px] h-[20px]" />
            <input
              className="outline-none h-full w-full text-primary3"
              placeholder="Search customer log by customer name, email address & phone number"
            />
          </div>
          <div className="p-[16px] bg-white rounded-[6px] text-green1 border-[1px] border-green1 ">
            Search
          </div>
        </div>
        <div
          className="bg-green1 p-[16px] space-x-[10px] flex items-center justify-center rounded-[6px] cursor-pointer "
          onClick={handleOpenModal}
        >
          <span>
          <CreateCampaignIcon className="text-white"/>
          </span>
          <span className=" text-white">Create a campaign</span>
        </div>
      </div>
      <div className="pt-[24px]">
        <Table data={campaigns} />
      </div>
      <div className="flex items-center justify-end pt-[24px] space-x-[8px] text-white">
        <ArrowLeftIcon
          className="text-black cursor-pointer"
          onClick={() => handlePageChange(currentPage - 1)}
        />
        <div className="w-8 h-8 rounded-full bg-green1 flex justify-center items-center cursor-pointer">
          {currentPage}
        </div>
        {currentPage < totalPages && (
          <>
            <div
              className="w-8 h-8 rounded-full bg-white text-green1 flex justify-center items-center cursor-pointer"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {currentPage + 1}
            </div>
            <div className="w-8 h-8  rounded-full bg-white text-green1 flex justify-center items-center space-x-[2px]">
              {Array.from({ length: 3 }).map((item) => (
                <img src={DotIcon} className="w-[2px] h-[4px]" />
              ))}
            </div>
          </>
        )}
        <div
          className="w-8 h-8 rounded-full bg-white text-green1 flex justify-center items-center cursor-pointer"
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </div>
        <ArrowRight
          className="text-green1 cursor-pointer"
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Customers;
