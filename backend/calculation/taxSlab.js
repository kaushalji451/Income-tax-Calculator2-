// Tax Slab from New Regime 2025-2026
module.exports.newRegimeSlab_2526 = [
    { from: 0, to: 300000, rate: 0 },
    { from: 300001, to: 700000, rate: 5 },
    { from: 700001, to: 1000000, rate: 10 },
    { from: 1000001, to: 1200000, rate: 15 },
    { from: 1200001, to: 1500000, rate: 20 },
    { from: 1500001, to: Infinity, rate: 30 },
  ];
  
  // Tax Slab from New Regime 2024-2025
  module.exports.newRegimeSlab_2425 = [
    { from: 0, to: 300000, rate: 0 },
    { from: 300001, to: 600000, rate: 5 },
    { from: 600001, to: 900000, rate: 10 },
    { from: 900001, to: 1200000, rate: 15 },
    { from: 1200001, to: 1500000, rate: 20 },
    { from: 1500001, to: Infinity, rate: 30 },
  ];
  
  // Tax Slab from Old Regime Indivisual
  module.exports.oldRegimeIndivisual = [
    { from: 0, to: 250000, rate: 0 },
    { from: 250001, to: 500000, rate: 5 },
    { from: 500001, to: 1000000, rate: 20 },
    { from: 1000001, to: Infinity, rate: 30 },
  ];
  
  // Tax Slab from Old Regime Senior Citizen
  module.exports.oldRegimeSeniorCitizen = [
    { from: 0, to: 300000, rate: 0 },
    { from: 300001, to: 500000, rate: 5 },
    { from: 500001, to: 1000000, rate: 20 },
    { from: 1000001, to: Infinity, rate: 30 },
  ];
  
  // Tax Slab from Old Regime Super Senior Citizen
  module.exports.oldRegimeSuperSeniorCitizen = [
    { from: 0, to: 500000, rate: 0 },
    { from: 500001, to: 1000000, rate: 20 },
    { from: 1000001, to: Infinity, rate: 30 },
  ];
  