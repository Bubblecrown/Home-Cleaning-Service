export const PriceData = {
  title: "pricing",
  sectionTitle: "our pricing plans",
  headTitle:false,
  center: true,
};
export const TierData = {
  basic:{
    tier: "basic",
    price: "$299",
    window: true,
    carpet: true,
    furniture: false,
    car: false,
    bathroom: false,
  },
  standard:{
    tier: "standard",
    price: "$499",
    window: true,
    carpet: true,
    furniture: true,
    car: true,
    bathroom: false,
  },
  premium:{
    tier: "premium",
    price: "$899",
    window: true,
    carpet: true,
    furniture: true,
    car: true,
    bathroom: true,
  },
};

export const PriceService = [
  "window cleaning",
  "carpet cleaning",
  "furniture cleaning",
  "car cleaning",
  "bathroom cleaning",
];
