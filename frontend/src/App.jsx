import React from "react";
import TaxCalculation from "./TaxCalculation";
import TaxHistory from "./TaxHistory";
import { Routes, Route, Link } from "react-router-dom";
import AdvanceTaxCalculation from "./AdvanceTaxCalculation";
const App = () => {
  return (
    <>
      <div className=" flex justify-center w-full items-center overflow-auto scrollbar-hide  text-[#f8b3ac] bg-[#262140]">
        <div className=" min-md:w-[95%] w-full h-full rounded-xl p-4 pt-15">
          <h1 className="text-center pb-6 font-bold text-4xl">
            Income Tax Calculater
          </h1>
          <div className="flex gap-5 min-md:ps-10 pb-4">
            <Link to="/">
              <button
                type="button"
                class="bg-[#362f5d] text-[#f8b3ac] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Calculator
              </button>
            </Link>
            <Link to="/advanceTax">
              <button
                type="button"
                class="bg-[#362f5d] text-[#f8b3ac] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Advance Calculator
              </button>
            </Link>
            <Link to="/history">
              <button
                type="button"
                class="bg-[#362f5d] text-[#f8b3ac] font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                History
              </button>
            </Link>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<TaxCalculation />}></Route>
              <Route path="/history" element={<TaxHistory />}></Route>
              <Route path="/advanceTax" element={<AdvanceTaxCalculation />}></Route>
              
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
