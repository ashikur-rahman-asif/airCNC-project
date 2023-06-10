import React from "react";
import DatePicker from "./DatePicker";
import Button from "../Button/Button";

const RoomReservation = () => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flew-row items-center gap-1 p-4">
        <div className="text-3xl font-semibold ">$ 200</div>
        <div className="font-light text-neutral-600">Night</div>
      </div>
        <hr />
          <DatePicker />
          <hr />
          <div className="p-4">
              <Button label="Reserve"/>
              
          </div>
          <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
              <div>
                  total
              </div>
              <div>
                  $500
              </div>
          </div>
    </div>
  );
};

export default RoomReservation;
