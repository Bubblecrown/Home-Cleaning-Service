export const PriceData = {
  title: "pricing",
  sectionTitle: "our pricing plans",
  headTitle: false,
  center: true,
};
export const TierData = [
  {
    tier: "basic",
    price: "$299",
    serviceList: [
      { service: true, textList: "window cleaning" },
      { service: true, textList: "carpet cleaning" },
      { service: false, textList: "furniture cleaning" },
      { service: false, textList: "car cleaning" },
      { service: false, textList: "bathroom cleaning" },
    ],
  },
  {
    tier: "standard",
    price: "$499",
    serviceList: [
      { service: true, textList: "window cleaning" },
      { service: true, textList: "carpet cleaning" },
      { service: true, textList: "furniture cleaning" },
      { service: true, textList: "car cleaning" },
      { service: false, textList: "bathroom cleaning" },
    ],
  },
  {
    tier: "premium",
    price: "$899",
    serviceList: [
      { service: true, textList: "window cleaning" },
      { service: true, textList: "carpet cleaning" },
      { service: true, textList: "furniture cleaning" },
      { service: true, textList: "car cleaning" },
      { service: true, textList: "bathroom cleaning" },
    ],
  },
];
