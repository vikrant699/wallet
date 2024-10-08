import { Dimensions, Platform } from "react-native";

export const { width, height } = Dimensions.get("window");
export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

export const transactionCategories = [
  {
    id: "1",
    name: "Food & Drinks",
    icon: "restaurant",
    color: "#ff5733",
    subCategories: [
      {
        id: "1-1",
        name: "Groceries",
        icon: "local-grocery-store",
        color: "#ff5733",
      },
      {
        id: "1-2",
        name: "Restaurant, Fast Food",
        icon: "food",
        color: "#ff5733",
      },
      {
        id: "1-3",
        name: "Bar, Cafe",
        icon: "sports-bar",
        color: "#ff5733",
      },
    ],
  },
  {
    id: "2",
    name: "Housing",
    icon: "house",
    color: "#33a1ff",
    subCategories: [
      {
        id: "2-1",
        name: "Rent / Mortgage",
        icon: "key-variant",
        color: "#33a1ff",
      },
      {
        id: "2-2",
        name: "Utilities",
        icon: "lightbulb-variant",
        color: "#33a1ff",
      },
      {
        id: "2-3",
        name: "Maintenance / Repairs",
        icon: "hammer-wrench",
        color: "#33a1ff",
      },
      {
        id: "2-4",
        name: "Services",
        icon: "home-repair-service",
        color: "#33a1ff",
      },
    ],
  },
  {
    id: "3",
    name: "Transportation",
    icon: "car",
    color: "#b5bbbb",
    subCategories: [
      {
        id: "3-1",
        name: "Public Transport",
        icon: "bus",
        color: "#b5bbbb",
      },
      {
        id: "3-2",
        name: "Car/Bike Maintenance",
        icon: "wrench",
        color: "#b5bbbb",
      },
      {
        id: "3-3",
        name: "Ride-hailing Services",
        icon: "car-hatchback",
        color: "#b5bbbb",
      },
      {
        id: "3-4",
        name: "Flight",
        icon: "airplane",
        color: "#b5bbbb",
      },
    ],
  },
  {
    id: "4",
    name: "Entertainment",
    icon: "film",
    color: "#db5af7",
    subCategories: [
      {
        id: "4-1",
        name: "Movies / Streaming Services",
        icon: "play-circle",
        color: "#db5af7",
      },
      {
        id: "4-2",
        name: "Concert / Events",
        icon: "music",
        color: "#db5af7",
      },
      {
        id: "4-3",
        name: "Hobbies",
        icon: "sports-baseball",
        color: "#db5af7",
      },
      {
        id: "4-4",
        name: "Video games",
        icon: "google-controller",
        color: "#db5af7",
      },
    ],
  },
  {
    id: "5",
    name: "Health & Fitness",
    icon: "human-handsup",
    color: "#5ff75a",
    subCategories: [
      {
        id: "5-1",
        name: "Memberships & Equipments",
        icon: "dumbbell",
        color: "#5ff75a",
      },
      {
        id: "5-2",
        name: "Health care & doctor",
        icon: "doctor",
        color: "#5ff75a",
      },
      {
        id: "5-3",
        name: "Medication & Suppliments",
        icon: "pill",
        color: "#5ff75a",
      },
    ],
  },
  {
    id: "6",
    name: "Shopping",
    icon: "shopping",
    color: "#f7f25a",
    subCategories: [
      {
        id: "6-1",
        name: "Clothing",
        icon: "tshirt-crew",
        color: "#f7f25a",
      },
      {
        id: "6-2",
        name: "Jewels & Accessories",
        icon: "diamond-stone",
        color: "#f7f25a",
      },
      {
        id: "6-3",
        name: "Electronics",
        icon: "computer",
        color: "#f7f25a",
      },
      {
        id: "6-4",
        name: "Home & Kitchen Appliances",
        icon: "sofa",
        color: "#f7f25a",
      },
      {
        id: "6-5",
        name: "Garden & Pets",
        icon: "paw",
        color: "#f7f25a",
      },
      {
        id: "6-6",
        name: "Toys & Games",
        icon: "toy-brick",
        color: "#f7f25a",
      },
      {
        id: "6-7",
        name: "Books & Applications",
        icon: "menu-book",
        color: "#f7f25a",
      },
      {
        id: "6-8",
        name: "Art & Craft",
        icon: "brush",
        color: "#f7f25a",
      },
    ],
  },
  {
    id: "7",
    name: "Personal Care",
    icon: "heart",
    color: "#f75a76",
    subCategories: [
      {
        id: "7-1",
        name: "Salon / Beauty Parlour",
        icon: "face-man-shimmer",
        color: "#f75a76",
      },
      {
        id: "7-2",
        name: "Beauty Products & Cosmetics",
        icon: "lipstick",
        color: "#f75a76",
      },
      {
        id: "7-3",
        name: "Personal Hygiene",
        icon: "flower-tulip",
        color: "#f75a76",
      },
    ],
  },
  {
    id: "8",
    name: "Education",
    icon: "school",
    color: "#5af7ab",
    subCategories: [
      {
        id: "8-1",
        name: "School / College",
        icon: "book-education",
        color: "#5af7ab",
      },
      {
        id: "8-2",
        name: "Books & Stationery",
        icon: "book",
        color: "#5af7ab",
      },
      {
        id: "8-3",
        name: "Tution / Coaching",
        icon: "human-male-board-poll",
        color: "#5af7ab",
      },
    ],
  },
  {
    id: "9",
    name: "Financial Expenses",
    icon: "bank-transfer",
    color: "#e1c16e",
    subCategories: [
      {
        id: "9-1",
        name: "Taxes",
        icon: "list-alt",
        color: "#e1c16e",
      },
      {
        id: "9-2",
        name: "Insurance",
        icon: "shield-check",
        color: "#e1c16e",
      },
      {
        id: "9-3",
        name: "Credit / Loan / Interests",
        icon: "credit-card",
        color: "#e1c16e",
      },
      {
        id: "9-4",
        name: "Fines",
        icon: "gavel",
        color: "#e1c16e",
      },
      {
        id: "9-5",
        name: "Advisory",
        icon: "person",
        color: "#e1c16e",
      },
      {
        id: "9-6",
        name: "Charges / Fees",
        icon: "payments",
        color: "#e1c16e",
      },
    ],
  },
  {
    id: "10",
    name: "Savings & Investments",
    icon: "piggy-bank",
    color: "#ffd700",
    subCategories: [
      {
        id: "10-1",
        name: "Liquid Money",
        icon: "attach-money",
        color: "#ffd700",
      },
      {
        id: "10-2",
        name: "Fixed Deposits / Bonds",
        icon: "account-cash",
        color: "#ffd700",
      },
      {
        id: "10-3",
        name: "Mutual Funds",
        icon: "chart-line",
        color: "#ffd700",
      },
      {
        id: "10-4",
        name: "Stock market Investments",
        icon: "finance",
        color: "#ffd700",
      },
      {
        id: "10-5",
        name: "Emergency Funds",
        icon: "payments",
        color: "#ffd700",
      },
      {
        id: "10-6",
        name: "Retirement Savings",
        icon: "piggy-bank",
        color: "#ffd700",
      },
    ],
  },
  {
    id: "11",
    name: "Income",
    icon: "hand-coin",
    color: "#00ff00",
    subCategories: [
      {
        id: "11-1",
        name: "Wages / Invoices",
        icon: "payments",
        color: "#00ff00",
      },
      {
        id: "11-2",
        name: "Interests / Dividents",
        icon: "percent",
        color: "#00ff00",
      },
      {
        id: "11-3",
        name: "Sales",
        icon: "shopping-cart",
        color: "#00ff00",
      },
      {
        id: "11-4",
        name: "Rental Income",
        icon: "home",
        color: "#00ff00",
      },
      {
        id: "11-6",
        name: "Dues & Grants",
        icon: "check-circle",
        color: "#00ff00",
      },
      {
        id: "11-7",
        name: "Lending / Renting",
        icon: "handshake",
        color: "#00ff00",
      },
      {
        id: "11-8",
        name: "Checks / Coupons",
        icon: "receipt",
        color: "#00ff00",
      },
      {
        id: "11-9",
        name: "Lottery / Gambling",
        icon: "casino",
        color: "#00ff00",
      },
      {
        id: "11-10",
        name: "Refunds",
        icon: "cash-refund",
        color: "#00ff00",
      },
    ],
  },
  {
    id: "12",
    name: "Festivals & Ceremonies",
    icon: "emoticon",
    color: "#ff0000",
    subCategories: [
      {
        id: "12-1",
        name: "Festivals / Rituals",
        icon: "firework",
        color: "#ff0000",
      },
      {
        id: "12-2",
        name: "Celebrations",
        icon: "cake-variant",
        color: "#ff0000",
      },
      {
        id: "12-3",
        name: "Gift",
        icon: "gift",
        color: "#ff0000",
      },
    ],
  },
  {
    id: "13",
    name: "Travel",
    icon: "island",
    color: "#00fa9a",
    subCategories: [
      {
        id: "13-1",
        name: "Domestic Trips",
        icon: "airplane-takeoff",
        color: "#00fa9a",
      },
      {
        id: "13-2",
        name: "International Trips",
        icon: "earth",
        color: "#00fa9a",
      },
      {
        id: "13-3",
        name: "Staycations / Weekend Getaway",
        icon: "beach",
        color: "#00fa9a",
      },
    ],
  },
  {
    id: "14",
    name: "Miscellaneous",
    icon: "dots-horizontal-circle",
    color: "#f5f5dc",
    subCategories: [
      {
        id: "14-1",
        name: "Gifts",
        icon: "gift",
        color: "#f5f5dc",
      },
      {
        id: "14-2",
        name: "Donations / Charity",
        icon: "hand-heart",
        color: "#f5f5dc",
      },
    ],
  },
  {
    id: "15",
    name: "Others",
    icon: "question-mark",
    color: "#808080",
  },
];
