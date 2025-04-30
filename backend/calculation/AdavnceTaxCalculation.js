const {
    newRegimeSlab_2425,
    newRegimeSlab_2526,
    oldRegimeIndivisual,
    oldRegimeSeniorCitizen,
    oldRegimeSuperSeniorCitizen,
  } = require("./taxSlab");
  

module.exports = function AdvanceTax(input){
     // Convert all values to numbers
  const num = (val) => parseFloat(val) || 0;

   //  Income from Salary
   const salaryIncome = 
   num(input.basicSalary) +
   num(input.dearnessAllowance) +
   num(input.houseRentAllowance) +
   num(input.otherAllowances) +
   num(input.perquisites) -
   num(input.professionalTax) -
   num(input.standardDeduction);

   //  Income from House Property
  let housePropertyIncome = num(input.rentalIncome);
  if (input.propertyType === 'Self-Occupied') {
    housePropertyIncome -= Math.min(num(input.section24b), 200000);
  } else {
    housePropertyIncome -= num(input.section24b); // No limit if let out
  }

   //  Business/Profession Income
   const businessIncome = 
   num(input.businesses) +
   num(input.freelancers) +
   num(input.selfEmployed);

   //  Capital Gains
  let capitalGains = 0;
  if (input.holdingPeriod === 'Long-Term') {
    const gain = num(input.saleValue) - num(input.purchaseCost);
    capitalGains = Math.max(gain, 0); // No loss deduction in this model
  }
  if (input.holdingPeriod === 'Short-Term') {
    capitalGains = Math.max(num(input.saleValue) - num(input.purchaseCost), 0);
  }

  //  Income from Other Sources
  const otherIncome = 
    num(input.dividendIncome) +
    num(input.giftIncome) +
    num(input.lotteryOrWinnings);

     //  Gross Total Income   
  const grossIncome = 
  salaryIncome + housePropertyIncome + businessIncome + capitalGains + otherIncome;


   //  Deductions (Chapter VI-A)
   const totalDeductions =
   Math.min(num(input.section80C), 150000) +
   num(input.section80D) +
   num(input.section80E) +
   num(input.section80G) +
   num(input.section80TTA);


   // Step 8: Net Taxable Income
  const taxableIncome = Math.max(grossIncome - totalDeductions, 0);


//   old code

  let tax = 0;
  let totalTax = 0;
  let taxBreakdown = [];
  const regime = input.regime;
const age = parseInt(input.age);

  // slab
  let slabs;

  // if newregime and year is 2025-2026
  // then use new regime slab 2526 else new regime slab 2425
  if (regime === "newRegime") {
    if (input.year === "2025-2026") {
      slabs = newRegimeSlab_2526;
    } else {
      slabs = newRegimeSlab_2425;
    }
  } else {
     
    // if odregime &&  age >= 80 use old regime super senior citizen
    // if odregime &&  age >= 60 use old regime  senior citizen
    // if odregime &&  age <60 use old regime indivisual
    if (age >= "80") {
      slabs = oldRegimeSuperSeniorCitizen;
    } else if (age >= "60") {
      slabs = oldRegimeSeniorCitizen;
    } else {
      slabs = oldRegimeIndivisual;
    }
  }

  // Iterate throught the slab if taxable income < slb.from then continue
  for (let slab of slabs) {
    if (taxableIncome < slab.from) continue;

    let slabFrom = slab.from;
    let slabTo = Math.min(taxableIncome, slab.to);
    let slabIncome = slabTo - slabFrom;

    // slab rate calcualtion
    let slabTax = (slabIncome * slab.rate) / 100;
    tax += slabTax;

    // adding taxbreakdown
    taxBreakdown.push({
      slab: `₹${slabFrom} - ₹${slabTo}`,
      rate: slab.rate / 100,
      amount: Math.round(slabTax),
    });
      // if taxable income <= slab.to then break
    if (taxableIncome <= slab.to) break;
  }

  // added all tax in totaltax first
  totalTax += tax;

   // // Apply surcharge based on income slabs
   let surchargeRate = 0;
   if (taxableIncome > 5000000 && taxableIncome <= 10000000) {
     surchargeRate = 10;
   } else if (taxableIncome > 10000000 && taxableIncome <= 20000000) {
     surchargeRate = 15;
   } else if (taxableIncome > 20000000) {
     surchargeRate = 25;
   }
   let surchargeAmount = (tax * surchargeRate) / 100;
   totalTax += surchargeAmount;
 
   // Apply cess
   let cess = 0.04 * totalTax;
   totalTax += cess;
 
   //  if new Regime and taxable income <= 1200000 
   // then you dont need to pay tax 
   if(regime === "newRegime") {
     if(input.year === "2025-2026" && taxableIncome <= 1200000){
       totalTax = 0;
       tax = 0;
       cess = 0;
       taxBreakdown = [];
     } else if(input.year === "2024-2025" && taxableIncome <= 700000){
       totalTax = 0;
       tax = 0;
       cess = 0;
       taxBreakdown = [];
     }
   }
   
   
   //  if old Regime and taxable income <= 500000 
   // then you dont need to pay tax 
    if(regime === "oldRegime" && taxableIncome <=500000){
     totalTax = 0;
     tax = 0;
     cess = 0;
     taxBreakdown = []
   }

   return {
    grossIncome,
    taxableIncome,
    tax: Math.round(tax),
    surcharge: Math.round(surchargeAmount),
    surchargeRate,
    cess: Math.round(cess),
    deduction: Math.round(totalDeductions),
    totalTax: Math.round(totalTax),
    taxBreakdown,
  };

}