import React from "react";
import { useState, useEffect } from "react";
import TaxDetails from "./TaxDetails";

const TaxHistory = () => {
  // A state variable to store the Tax Calculation History
  const [data, setdata] = useState(null);

  // Fetch history data from backend
  useEffect(() => {
    let handleData = async () => {
      let responce = await fetch(`${import.meta.env.VITE_API_BASE_URL}/calculations`);
      let result = await responce.json();
      if (result) {
        setdata(result);
      }
    };
    handleData();
  }, []);

  return (
    <>
      <div className="h-[80vh]  bg-[#262140] border-t mt-5 pt-6">
        <h1 className="font-bold text-3xl text-center">
          Your History of Calculating Income Tax
        </h1>

        {/* // Render history if data is available */}
        {data == null && <p>Loading...</p>}
        {data != null &&
          data.map((data) => (
            <div>
              <TaxDetails data={data}></TaxDetails>
            </div>
          ))}
      </div>
    </>
  );
};

export default TaxHistory;
