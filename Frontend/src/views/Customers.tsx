import { useEffect, useState } from "react";

import Table from "../components/Table";
import Modal from "../components/Modal";
import CreateCampaignIcon from "../assets/images/icons/CreateCampaignIcon";
import { Campaign } from "../../types";
import { getCampaigns } from "../helpers/fetchCampaigns";
import SearchBar from "../components/Searchbar";
import TabNavigation from "../components/TabNavigation";
import { Header } from "../components/Header";
import { Subheader } from "../components/Subheader";
import Pagination from "../components/Pagination";

const Customers = () => {
  const [activeTab, setActiveTab] = useState<string>("Campaigns");

  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  const [campaignDataLoading, setCampaignDataLoading] =
    useState<boolean>(false);

  const [totalCampaigns, setTotalCampaigns] = useState(0); // New state for total number of campaigns

  const [searchTerm, setSearchTerm] = useState("");

  const [isModalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [campaignCreated, setCampaignCreated] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  // Items per page
  const itemsPerPage = 9;

  // Function to update the current page
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    if (campaignCreated) {
      setSearchTerm("");
      fetchCampaigns(true);
      setCampaignCreated(false);
    }
  }, [campaignCreated]);

  useEffect(() => {
    fetchCampaigns();
  }, [currentPage]);

  const fetchCampaigns = async (bypassCache?: boolean) => {
    setCampaignDataLoading(true);
    const fetchedCampaigns = await getCampaigns(
      (currentPage - 1) * itemsPerPage,
      itemsPerPage,
      bypassCache,
      searchTerm
    );

    if(bypassCache){
      setCurrentPage(fetchedCampaigns.total)
    }

    setCampaigns(fetchedCampaigns.campaigns);
    setTotalCampaigns(fetchedCampaigns.total);
    setCampaignDataLoading(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = () => {
    fetchCampaigns();
  };

  return (
    <div className="px-[40px] sm:px-[120px] md:px-[160px] lg:px-[250px] bg-primary5 w-full pt-[32px] pb-[136px] text-[20px] text-black1 min-h-[90vh] ">
      <Header text="Customers" />
      <Subheader text="See all your customers in one place" />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="pt-[24px] flex justify-between h-auto flex-col lg:flex-row ">
        <SearchBar
          searchValue={searchTerm}
          onChange={handleSearch}
          onSearch={onSearch}
        />
        <div
          className="bg-green1 p-[16px] space-x-[10px] flex items-center justify-center rounded-[6px] cursor-pointer mt-4 lg:mt-0 w-fit"
          onClick={handleOpenModal}
        >
          <span>
            <CreateCampaignIcon className="text-white" />
          </span>
          <span className=" text-white">Create a campaign</span>
        </div>
      </div>
      <div className="pt-[24px]">
        <Table data={campaigns} isLoading={campaignDataLoading} />
      </div>
      <Pagination
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        itemsPerPage={itemsPerPage}
        total={totalCampaigns}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        setCampaignCreated={setCampaignCreated}
      />
    </div>
  );
};

export default Customers;
