import React from 'react'

const TaxDetails = ({data}) => {
  return (
    <div className=" bg-[#262140] mt-20  mt-4 min-md:px-20 px-2">
    <div className='flex items-center pt-10'>
      <h1 className='w-1/4'>{data.updatedAt.slice(0,10)}</h1>
    <h1 className="font-bold min-md:text-4xl min-md:w-1/2 text-2xl text-center pb-6 py-6">
      Your Tax Details
    </h1>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl ">Regime Type</p>
      {data.regime === "oldRegime" ? (
        <p className='text-xl'>Old Regime</p>
      ) : (
        <p className='text-xl'>New Regime</p>
      )}
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl">Gross Total Income</p>
      <p className='text-xl'>₹{data.anualIncome}</p>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl ">Eligible Deduction</p>
      <p className='text-xl'>₹{data.deduction}</p>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl ">Total Income</p>
      <p className='text-xl'>₹{data.taxableIncome}</p>
    </div>

    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <h1 className="text-2xl py-6 font-semibold">
        Computation fo Tax Liability
      </h1>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl">
        Income tax After relief u/s 87A
      </p>
      <p className='text-xl'>₹{data.tax}</p>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl">Surcharge</p>
      <p className='text-xl'>₹{data.surcharge}</p>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl">
        Health And Education Cess
      </p>
      <p className='text-xl'>₹{data.cess}</p>
    </div>
    <div className="flex justify-between border-t border-[#f8b3ac] py-4 ">
      <p className="px-4 text-[#f8b3ac] text-xl">Total Tax Liability</p>
      <p className='text-xl'>₹{data.totalTax}</p>
    </div>
    <div className="my-4 py-4 pt-20 ">
      <p className="font-bold text-4xl text-center">Tax BreakDown</p>
      <div className="flex justify-around py-4 font-bold text-2xl">
        <p>Tax Slab</p>
        <p>Tax Amount</p>
      </div>
      <p>
        {/* map to get all taxbreakdown one by one */}
        {data != null &&
          data.taxBreakdown.map((d) => (
            <div className="flex gap-5  justify-around text-2xl border-t py-3">
                <p className="">{d.slab || 0}</p>
              <p className='text-xl'>₹{Math.floor(d.amount)}</p>
            </div>
          ))}
      </p>
    </div>
  </div>
  )
}

export default TaxDetails
