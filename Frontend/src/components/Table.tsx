import React from "react";
import { Campaign } from "../../types";

type Props = {
    data: Campaign[]
}
const Table: React.FC<Props> = ({data}) => {
  return (
    <div className="rounded-t-lg overflow-hidden">
      <table className="border-collapse w-full">
        <thead>
          <tr className=" bg-gray4 border-[2px] border-b-[0px] border-gray3 text-left rounded-t-lg ">
            <th className="p-4 w-[193px]">Campaign Title</th>
            <th className="p-4 w-[193px]">Description</th>
            <th className="p-4 w-[193px]">Target Group</th>
            <th className="p-4 w-[193px]">Campaign Status</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((item: Campaign) => (
            <tr className="border-b-[1px] border-gray1">
              <td className="p-4">{item.title}</td>
              <td className="p-4">{item.description}</td>
              <td className="p-4">{item.targetGroup}</td>
              <td className="p-4">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
