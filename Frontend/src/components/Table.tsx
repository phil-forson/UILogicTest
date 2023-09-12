import React from "react";
import { Campaign } from "../../types";

type Props = {
  data: Campaign[];
  isLoading: boolean;
};
const Table: React.FC<Props> = ({ data, isLoading }) => {
  return (
    <div className="overflow-x-auto">
      <div className="rounded-t-lg overflow-hidden min-w-full">
        <table className="border-collapse w-full">
          <thead>
            <tr className=" bg-gray4 border-[2px] border-b-[0px] border-gray3 text-left rounded-t-lg  ">
              <th className="p-4 w-[193px] ">Campaign Title</th>
              <th className="p-4 w-[449px]">Description</th>
              <th className="p-4 w-[193px]">Target Group</th>
              <th className="p-4 w-[193px]">Campaign Status</th>
            </tr>
          </thead>
          {!isLoading && (
            <tbody className="bg-white text-primary3">
              {data?.map((item: Campaign, index: number) => (
                <tr className="border-b-[1px] border-gray1" key={index}>
                  <td className="p-4">{item.title}</td>
                  <td className="p-4 max-h-[1.5em] truncate max-w-[2px] vsm:max-w-[15px] sm:max-w-[100px] md:max-w-[200px] bd:max-w-[300px] lg:max-w-[449px] ">
                    {item.description}
                  </td>
                  <td className="p-4">{item.targetGroup}</td>
                  <td className="p-4">{item.status}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        {isLoading && (
          <div className="h-12 bg-white text-primary3 w-[100%] flex justify-center items-center">
            Loading...
          </div>
        )}
        {data?.length === 0 && !isLoading && (
          <div className="h-12 bg-white text-primary3 w-[100%] flex justify-center items-center">
            No data found 
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
