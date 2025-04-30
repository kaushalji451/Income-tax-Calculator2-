const {
  newRegimeSlab_2425,
  newRegimeSlab_2526,
  oldRegimeIndivisual,
  oldRegimeSeniorCitizen,
  oldRegimeSuperSeniorCitizen,
} = require("./taxSlab");

module.exports = function calculateTax(taxData) {
  let { income, regime, age } = taxData;
  let taxableincome = income;
  let deduction = 0;
  let tax = 0;
  let totalTax = 0;
  let taxBreakdown = [];

  // if new regime then deduction is 75000
  // if old regime then deduction is 50000
  regime === "newRegime" ? deduction = 75000 : deduction = 50000;
  
  // taxable income is gross income - deduction
  taxableincome = income - deduction;

  // slab
  let slabs;

  // if newregime and year is 2025-2026
  // then use new regime slab 2526 else new regime slab 2425
  if (regime === "newRegime") {
    if (taxData.year === "2025-2026") {
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
    if (taxableincome < slab.from) continue;

    let slabFrom = slab.from;
    let slabTo = Math.min(taxableincome, slab.to);
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
    if (taxableincome <= slab.to) break;
  }

  // added all tax in totaltax first
  totalTax += tax;

  // // Apply surcharge based on income slabs
  let surchargeRate = 0;
  if (taxableincome > 5000000 && taxableincome <= 10000000) {
    surchargeRate = 10;
  } else if (taxableincome > 10000000 && taxableincome <= 20000000) {
    surchargeRate = 15;
  } else if (taxableincome > 20000000) {
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
    if(taxData.year === "2025-2026" && taxableincome <= 1200000){
      totalTax = 0;
      tax = 0;
      cess = 0;
      taxBreakdown = {};
    } else if(taxData.year === "2024-2025" && taxableincome <= 700000){
      totalTax = 0;
      tax = 0;
      cess = 0;
      taxBreakdown = {};
    }
  }
  
  
  //  if old Regime and taxable income <= 500000 
  // then you dont need to pay tax 
   if(regime === "oldRegime" && taxableincome <=500000){
    totalTax = 0;
    tax = 0;
    cess = 0;
    taxBreakdown = {}
  }

  return {
    taxableincome,
    tax: Math.round(tax),
    surcharge: Math.round(surchargeAmount),
    surchargeRate,
    cess: Math.round(cess),
    deduction,
    totalTax: Math.round(totalTax),
    taxBreakdown,
  };
};
