import React from "react";
import { useState } from "react";
import AdvanceTaxDetails from "./AdvanceTaxDetails";
import { useEffect } from "react";
const AdvanceTaxCalculation = () => {
  const [formdata, setformdata] = useState({
    // basic details
    year: "",
    categery: "",
    age: "",
    resStatus: "",
    regime: "",
    // salary income
    basicSalary: "",
    dearnessAllowance: "",
    houseRentAllowance: "",
    otherAllowances: "",
    perquisites: "",
    professionalTax: "",
    // house and property
    propertyType: "",
    rentalIncome: "",
    standardDeduction: "",
    homeLoanInterest: "",
    // profit gain from business
    selfEmployed: "",
    freelancers: "",
    businesses: "",
    // capital gain
    assetType: "",
    holdingPeriod: "",
    saleValue: "",
    purchaseCost: "",
    section54 : "",
    section54F : "",
    section54EC : "",
    // other income
    dividendIncome: "",
    giftIncome: "",
    lotteryOrWinnings: "",
    // tax paid & tds
    tdsDeducted: "",
    advanceTaxPaid: "",
    // deduction
    section80C: "",
    section80D: "",
    section80E: "",
    section80G: "",
    section80TTA: "",
    section24b: "",
  });

  
    //to store the data fetch from backend
    const [data, setdata] = useState(null);

  // handle form input changes
  let handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formdata);
    // send data to backend
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/adv_tax`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    let result = await response.json();
    setdata(result); // set the output from backend to data State
    // e.target.reset(); // reset the form fields
    console.log(result);
  };

  return (
    <>
      <div className=" w-full rounded-xl mb-20 ">
        {/* form to submit user input */}
        <form onSubmit={handleSubmit}>
          <div className="flex text-xl  flex-col w-full items-center">
            <div className="flex flex-col gap-4  pb-2 w-full min-md:px-10 px-2">
              {/* regime type */}
              <h1 className="font-bold text-2xl">Basic Details</h1>
              <div className="flex flex-col gap-4 pb-2 ">
                <label htmlFor="regime">Regime</label>
                <select
                  name="regime"
                  id="regime"
                  className="border-t border-b rounded-xl py-4 px-2 "
                  onChange={handleChange}
                  required
                >
                  <option className=" font-semibold" value="" disabled selected>
                    Select your Regime
                  </option>
                  <option
                    className="bg-[#262140] font-semibold"
                    value="oldRegime"
                  >
                    Old Regime
                  </option>
                  <option
                    className="bg-[#262140] font-semibold"
                    value="newRegime"
                  >
                    New Regime
                  </option>
                </select>
              </div>
              <div className="min-md:flex w-full gap-10">
                {/* assisment year */}
                <div className="flex flex-col gap-4  pb-2 min-md:w-1/2">
                  {" "}
                  <label htmlFor="year">Assessment Year</label>
                  <select
                    name="year"
                    id="year"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option
                      className=" font-semibold"
                      value=""
                      disabled
                      selected
                    >
                      Select your Assisment Year
                    </option>
                    <option
                      className="bg-[#262140] font-semibold"
                      value="2025-2026"
                    >
                      2025-2026
                    </option>
                    <option
                      className="bg-[#262140] font-semibold"
                      value="2024-2025"
                    >
                      2024-2025
                    </option>
                  </select>
                </div>
                {/* Taxpayer Categery */}
                <div className="flex flex-col gap-4  pb-2 min-md:w-1/2">
                  <label htmlFor="categery">Taxpayer Categery</label>
                  <select
                    name="categery"
                    id="categery"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option
                      className=" font-semibold"
                      value=""
                      disabled
                      selected
                    >
                      Select your Taxpayer Categery
                    </option>
                    <option
                      className="bg-[#262140] font-semibold"
                      value="individual"
                    >
                      Individual
                    </option>
                    <option className="bg-[#262140] font-semibold" value="huf">
                      HUF
                    </option>
                    <option className="bg-[#262140] font-semibold" value="aop">
                      Association of Persons &#40;AOP &#41;
                    </option>
                  </select>
                </div>
              </div>
              <div className="min-md:flex gap-10">
                {/* Your age  */}
                <div className="flex flex-col gap-4  pb-2 min-md:w-1/2">
                  {" "}
                  <label htmlFor="age">Your Age</label>
                  <select
                    name="age"
                    id="age"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    required
                  >
                    <option
                      className=" font-semibold"
                      value=""
                      disabled
                      selected
                    >
                      Select your Your Age
                    </option>
                    <option className="bg-[#262140] font-semibold" value="0-60">
                      Below 60 years
                    </option>
                    <option
                      className="bg-[#262140] font-semibold"
                      value="60-79"
                    >
                      Between 60-79
                    </option>
                    <option className="bg-[#262140] font-semibold" value="80">
                      80 and above
                    </option>
                  </select>
                </div>

                {/* Ressidencial stataus   */}
                <div className="flex flex-col gap-4  pb-2 min-md:w-1/2">
                  {" "}
                  <label htmlFor="resStatus">Residental Status</label>
                  <select
                    name="resStatus"
                    id="resStatus"
                    className="border-t border-b rounded-xl py-4 px-2"
                    required
                    onChange={handleChange}
                  >
                    <option
                      className=" font-semibold"
                      value=""
                      disabled
                      selected
                    >
                      Select your Residental Status
                    </option>
                    <option className="bg-[#262140] font-semibold" value="res">
                      RES &#40;Resident&#41;
                    </option>
                    <option className="bg-[#262140] font-semibold" value="nr">
                      NR &#40;Non Resident&#41;
                    </option>
                  </select>
                </div>
              </div>
              {/* sallery income */}
              <h1 className="font-bold text-2xl">Salary Income</h1> {/*Done*/}
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="basicSalary">Basic Salary</label>
                  <input
                    type="number"
                    name="basicSalary"
                    placeholder="Basic Salary"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="dearnessAllowance">Dearness Allowance</label>
                  <input
                    type="number"
                    name="dearnessAllowance"
                    placeholder="Dearness Allowance"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="houseRentAllowance">
                    House Rent Allowance
                  </label>
                  <input
                    type="number"
                    name="houseRentAllowance"
                    placeholder="HRA Received"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="otherAllowances">Other Allowances</label>
                  <input
                    type="number"
                    name="otherAllowances"
                    placeholder="Other Allowances"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="perquisites">Perquisites</label>
                  <input
                    type="number"
                    name="perquisites"
                    placeholder="Perquisites (e.g., Car)"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="professionalTax">Professional Tax</label>
                  <input
                    type="number"
                    name="professionalTax"
                    placeholder="Professional Tax Paid"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* house and property */}
              <h1 className="font-bold text-2xl">House and Property</h1>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="propertyType">Property Type</label>
                  <select
                    name="propertyType"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  >
                    <option value="">Property Type</option>
                    <option value="Self-Occupied">Self-Occupied</option>
                    <option value="Let-Out">Let-Out</option>
                  </select>
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="rentalIncome">Rental Income</label>
                  <input
                    type="number"
                    name="rentalIncome"
                    placeholder="Rental Income (if any)"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="standardDeduction">Standard Deduction</label>
                  <input
                    type="number"
                    name="standardDeduction"
                    placeholder="Standard Deduction"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="homeLoanInterest">Home Loan Interest</label>
                  <input
                    type="number"
                    name="homeLoanInterest"
                    placeholder="Home Loan Interest"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="section24b">section24b</label>
                  <input
                    type="number"
                    name="section24b"
                    placeholder="24(b) - Home Loan Interest (Self-Occupied)"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* profit gain from bussiness */}
              <h1 className="font-bold text-2xl">Profit Gain From Bussiness</h1>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="selfEmployed">Self Employed</label>
                  <input
                    type="number"
                    name="selfEmployed"
                    placeholder="self-employed"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="freelancers">freelancers</label>
                  <input
                    type="number"
                    name="freelancers"
                    placeholder="freelancers"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex flex-col gap-4">
                  <label htmlFor="businesses">Businesses</label>
                  <input
                    type="number"
                    name="businesses"
                    placeholder="businesses"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* capital gain*/}
              <h1 className="font-bold text-2xl">Capital Gain</h1>
              <div className="p-4">
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="assetType">Asset Type</label>
                    <input
                      type="text"
                      name="assetType"
                      placeholder="Asset Type (e.g., Land, Shares)"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="holdingPeriod">holding Period</label>
                    <select
                      name="holdingPeriod"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    >
                      <option value="">Holding Period</option>
                      <option value="Short-Term">Short-Term</option>
                      <option value="Long-Term">Long-Term</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <label htmlFor="saleValue">Sale Value</label>
                    <input
                      type="number"
                      name="saleValue"
                      placeholder="Sale Value"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="purchaseCost">Purchase Cost</label>
                    <input
                      type="number"
                      name="purchaseCost"
                      placeholder="Purchase Cost"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                  {/* exemptions */}
                  <div className="flex flex-col gap-4">
                    <label htmlFor="section54">Section 54</label>
                    <input
                      type="number"
                      name="section54"
                      placeholder="section54"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="section54F">Section 54F</label>
                    <input
                      type="number"
                      name="section54F"
                      placeholder="section54F"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label htmlFor="section54EC">Section 54EC</label>
                    <input
                      type="number"
                      name="section54EC"
                      placeholder="section54EC"
                      className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* other income */}
              <h1 className="font-bold text-2xl">Other Income</h1>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="dividendIncome">Dividend Income</label>
                  <input
                    type="number"
                    name="dividendIncome"
                    placeholder="Dividend Income"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="giftIncome">Gifts Received</label>
                  <input
                    type="number"
                    name="giftIncome"
                    placeholder="Gifts Received"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="lotteryOrWinnings">Lottery/Winnings</label>
                  <input
                    type="number"
                    name="lotteryOrWinnings"
                    placeholder="Lottery/Winnings"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* tax paid & tds */}
              <h1 className="font-bold text-2xl">Tax Paid & TDS</h1>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="tdsDeducted">TDS Deducted</label>
                  <input
                    type="number"
                    name="tdsDeducted"
                    placeholder="TDS Deducted"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="advanceTaxPaid">Advance Tax Paid</label>
                  <input
                    type="number"
                    name="advanceTaxPaid"
                    placeholder="Advance Tax Paid"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* deduction */}
              <h1 className="font-bold text-2xl">Deduction</h1>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <label htmlFor="section80C">section80C</label>
                  <input
                    type="number"
                    name="section80C"
                    placeholder="80C - PPF, LIC, ELSS"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="section80D">section80D</label>
                  <input
                    type="number"
                    name="section80D"
                    placeholder="80D - Health Insurance"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="section80E">section80E</label>
                  <input
                    type="number"
                    name="section80E"
                    placeholder="80E - Education Loan Interest"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="section80G">section80G</label>
                  <input
                    type="number"
                    name="section80G"
                    placeholder="80G - Donations"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <label htmlFor="section80TTA">section80TTA</label>
                  <input
                    type="number"
                    name="section80TTA"
                    placeholder="80TTA - Savings Interest"
                    className="border-t border-b rounded-xl py-4 px-2"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* submit button */}
              <button
              type="submit"
              className="bg-[#362f5d]  text-[#f8b3ac] font-medium rounded-lg text-2xl min-md:w-1/3 w-1/2 mt-10  px-5 py-2.5 text-center me-2 mb-2"
            >
              Sumbit
            </button>
            </div>
          </div>
        </form>
        {/* tax details */}
        {data != null && (
    <AdvanceTaxDetails data={data}></AdvanceTaxDetails>
        )}
      

      </div>
    </>
  );
};

export default AdvanceTaxCalculation;
