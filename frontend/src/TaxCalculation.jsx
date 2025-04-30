import React, { useState } from "react";
import TaxDetails from "./TaxDetails";
const TaxCalculation = () => {
  // to store the tax calculation result from the backend
  const [formdata, setformdata] = useState({
    year: "",
    categery: "",
    age: "",
    resStatus: "",
    income: "",
    regime: "",
  });

  //to store the data fetch from backend
  const [data, setdata] = useState(null);

  // handle form input changes
  let handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // to post the data to backend and fetch the tax Calculation result
  let handleSubmit = async (e) => {
    e.preventDefault(); //to prevent the form default behavior
    try {
      let responce = await fetch(`${import.meta.env.VITE_API_BASE_URL}/calculate-tax`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      let result = await responce.json();
      setdata(result); // set the output from backend to data State

      e.target.reset(); // reset the form fields
    } catch (error) {
      console.log(error); // log any errors to the console
    }
  };

  return (
    <>
      <div className=" w-full rounded-xl mb-20 ">
        {/* form to submit user input */}
        <form onSubmit={handleSubmit}>
          <div className="flex text-xl  flex-col w-full items-center">
            <div className="flex flex-col gap-4  pb-2 w-full min-md:px-10 px-2">
              {/* regime type */}
              <div className="flex flex-col gap-4 pb-2 ">
                <label htmlFor="regime">Regime</label>
                <select
                  name="regime"
                  id="regime"
                  className="border-t border-b rounded-xl py-4 px-2 "
                  onChange={handleChange}
                  required
                >
                  <option  className=" font-semibold" value="" disabled selected>
                    Select your Regime
                  </option>
                  <option  className="bg-[#262140] font-semibold" value="oldRegime">Old Regime</option>
                  <option  className="bg-[#262140] font-semibold" value="newRegime">New Regime</option>
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
                    <option  className=" font-semibold" value="" disabled selected>
                      Select your Assisment Year
                    </option>
                    <option  className="bg-[#262140] font-semibold" value="2025-2026">2025-2026</option>
                    <option  className="bg-[#262140] font-semibold" value="2024-2025">2024-2025</option>
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
                    <option  className=" font-semibold" value="" disabled selected>
                      Select your Taxpayer Categery
                    </option>
                    <option  className="bg-[#262140] font-semibold" value="individual">Individual</option>
                    <option  className="bg-[#262140] font-semibold" value="huf">HUF</option>
                    <option  className="bg-[#262140] font-semibold" value="aop">
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
                    <option  className=" font-semibold" value="" disabled selected>
                      Select your Your Age
                    </option>
                    <option  className="bg-[#262140] font-semibold" value="0-60">Below 60 years</option>
                    <option  className="bg-[#262140] font-semibold" value="60-79">Between 60-79</option>
                    <option  className="bg-[#262140] font-semibold" value="80">80 and above</option>
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
                    <option  className=" font-semibold" value="" disabled selected>
                      Select your Residental Status
                    </option>
                    <option  className="bg-[#262140] font-semibold" value="res">RES &#40;Resident&#41;</option>
                    <option  className="bg-[#262140] font-semibold" value="nr">NR &#40;Non Resident&#41;</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-10 w-full">
                <div className="flex flex-col min-md:w-1/2 w-full gap-4">
                  {/* total income  */}
                  <label htmlFor="income">Total Anual Income</label>
                  <input
                    type="number"
                    className="border-t border-b rounded-xl py-4 px-2"
                    id="income"
                    name="income"
                    placeholder="0"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#362f5d]  text-[#f8b3ac] font-medium rounded-lg text-2xl min-md:w-1/3 w-1/2 mt-10  px-5 py-2.5 text-center me-2 mb-2"
            >
              Sumbit
            </button>
          </div>
        </form>

        {/* // Display the tax calculation result */}
        {/*// show result section only if income is present in response*/}
        {data != null && (
    <TaxDetails data={data}></TaxDetails>
        )}
      </div>
    </>
  );
};

export default TaxCalculation;
