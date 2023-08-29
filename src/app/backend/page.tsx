import React from "react";
import Table from "../components/table";

const page = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <h2>Table name</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
      <Table />
    </div>
  );
};

export default page;
