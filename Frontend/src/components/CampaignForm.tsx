import React, { useState } from "react";
import { Campaign, CreateCampaignInputError } from "../../types";
import InputComponent from "./InputComponent";
import CustomTextArea from "./CustomTextArea";
import CustomDropdown from "./CustomDropdown";
import { createCampaign } from "../helpers/createCampaign";

interface Props {
  handleCloseModal: () => void;
  setCampaignCreated: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateCampaignForm: React.FC<Props> = ({
  handleCloseModal,
  setCampaignCreated,
}) => {
  const [input, setInput] = useState<Campaign>({
    title: "",
    description: "",
    targetGroup: "",
    status: "Active",
  });

  const [error, setError] = useState<CreateCampaignInputError>({
    titleErr: "",
    descriptionErr: "",
    targetGroupErr: "",
    statusErr: "",
  });

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSelect = (selected: string) => {
    setInput({
      ...input,
      targetGroup: selected,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Initialize an error object

    const newErrors: CreateCampaignInputError = {
      titleErr: "",
      descriptionErr: "",
      targetGroupErr: "",
      statusErr: "",
    };

    // Validation logic
    if (!input.title && input.title.length < 3) {
      newErrors.titleErr = "Campaign title must be at least 3 characters long";
    }
    if (!input.description || input.description.length < 10) {
      newErrors.descriptionErr =
        "Description must be at least 10 characters long";
    }
    if (!input.targetGroup) {
      newErrors.targetGroupErr = "Please select a target group";
    }

    setError(newErrors);
    if (
      !newErrors.titleErr &&
      !newErrors.descriptionErr &&
      !newErrors.targetGroupErr
    ) {
      setIsLoading(true)
      await createCampaign(input).then((res) => {
        if(res){
          setCampaignCreated(true);
          alert("Campaign created successfully")
        }
      });
      setIsLoading(false)
      handleCloseModal();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 pt-[20px]">
      <InputComponent
        placeholder="Write your campaign title here"
        onChange={handleChange}
        value={input.title}
        label="Campaign Title"
        name="title"
        error={error.titleErr}
      />
      <CustomTextArea
        placeholder="Write your message here"
        onChange={handleChange}
        maxWords={100}
        value={input.description}
        label="Description"
        name="description"
        error={error.descriptionErr}
      />
      <CustomDropdown
        options={["All customers"]}
        onSelect={handleSelect}
        label="Target group"
        error={error.targetGroupErr}
      />
      <button
        type="submit"
        className="h-12 bg-green1 flex justify-center items-center rounded-[6px] cursor-pointer outline-none border-none w-full text-white mt-10"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Submit your comment"}
      </button>
    </form>
  );
};

export default CreateCampaignForm;
