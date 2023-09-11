interface Props {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabNavigation: React.FC<Props> = ({ activeTab, setActiveTab }) => {
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
    <div className="pt-[40px] flex space-x-[12px] border-b-[2px] border-gray2">
      {renderActiveTab("Customer Log")}
      {renderActiveTab("Campaigns")}
    </div>
  );
};

export default TabNavigation;
