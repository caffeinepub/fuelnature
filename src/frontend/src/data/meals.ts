export type Goal = "Strength" | "Endurance" | "Flexibility" | "Recovery";
export type MealType = "Pre-Workout" | "Post-Workout";

export interface Meal {
  id: string;
  name: string;
  description: string;
  image: string;
  goal: Goal;
  type: MealType;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  price: number; // in INR
  ingredients: string[];
  tags: string[];
}

export interface Bite {
  id: string;
  name: string;
  description: string;
  image: string;
  calories: number;
  protein: number;
  price: number; // in INR, per pack of 2
  keyBenefit: string;
  ingredients: string[];
}

export interface EliteMeal {
  id: string;
  name: string;
  description: string;
  image: string;
  goal: Goal;
  type: MealType;
  price: number;
  brandedIngredients: string[];
  tags: string[];
}

export interface EliteBite {
  id: string;
  name: string;
  description: string;
  image: string;
  calories: number;
  packSize: number;
  price: number;
  keyBenefit: string;
  ingredients: string[];
}

export const meals: Meal[] = [
  {
    id: "1",
    name: "Power Dal Makhani Bowl",
    description:
      "Slow-cooked black lentils in a rich tomato-butter base, served with brown rice and a side of sabzi. High protein, deeply satisfying post-workout fuel.",
    image: "/assets/generated/meal-dal-makhani-bowl.dim_600x450.jpg",
    goal: "Strength",
    type: "Post-Workout",
    calories: 480,
    protein: 28,
    carbs: 65,
    fat: 8,
    price: 279,
    ingredients: [
      "Black lentils",
      "Brown rice",
      "Tomatoes",
      "Butter",
      "Ginger",
      "Garlic",
    ],
    tags: ["High-Protein", "Iron-Rich", "Gut-Friendly"],
  },
  {
    id: "2",
    name: "Rajma Quinoa Power Bowl",
    description:
      "Spiced kidney beans on fluffy quinoa with pickled onions, cucumber raita and a squeeze of lime. Perfect recovery after a heavy session.",
    image: "/assets/generated/meal-rajma-quinoa-bowl.dim_600x450.jpg",
    goal: "Endurance",
    type: "Post-Workout",
    calories: 520,
    protein: 22,
    carbs: 72,
    fat: 14,
    price: 299,
    ingredients: ["Rajma", "Quinoa", "Curd", "Cucumber", "Onion", "Lime"],
    tags: ["Complete Protein", "Probiotic", "Vegan"],
  },
  {
    id: "3",
    name: "Paneer Stir-Fry with Millets",
    description:
      "Cubed paneer tossed in haldi-ginger masala with seasonal vegetables, served over foxtail millets. Anti-inflammatory and joint-friendly.",
    image: "/assets/generated/meal-paneer-millet-stirfry.dim_600x450.jpg",
    goal: "Flexibility",
    type: "Post-Workout",
    calories: 390,
    protein: 24,
    carbs: 35,
    fat: 16,
    price: 319,
    ingredients: [
      "Paneer",
      "Foxtail millet",
      "Bell pepper",
      "Turmeric",
      "Ginger",
      "Mustard oil",
    ],
    tags: ["Anti-Inflammatory", "Calcium-Rich", "Millet-Based"],
  },
  {
    id: "4",
    name: "Sweet Potato Chana Wrap",
    description:
      "Roasted sweet potato and spiced kabuli chana in a whole-wheat roti with mint chutney. Complex carbs for sustained pre-workout energy.",
    image: "/assets/generated/meal-sweet-potato-chana-wrap.dim_600x450.jpg",
    goal: "Endurance",
    type: "Pre-Workout",
    calories: 450,
    protein: 18,
    carbs: 78,
    fat: 9,
    price: 249,
    ingredients: [
      "Sweet potato",
      "Kabuli chana",
      "Whole-wheat roti",
      "Mint chutney",
      "Onion",
      "Spices",
    ],
    tags: ["Slow-Carb", "Fiber-Rich", "Whole-Grain"],
  },
  {
    id: "5",
    name: "Banana Moong Smoothie Bowl",
    description:
      "Thick blended banana, sprouted moong and spirulina smoothie topped with mixed berries, flaxseeds and homemade granola. Ultimate pre-training energiser.",
    image: "/assets/generated/meal-banana-moong-smoothie-bowl.dim_600x450.jpg",
    goal: "Strength",
    type: "Pre-Workout",
    calories: 380,
    protein: 26,
    carbs: 52,
    fat: 7,
    price: 269,
    ingredients: [
      "Banana",
      "Sprouted moong",
      "Spirulina",
      "Berries",
      "Flaxseeds",
      "Granola",
    ],
    tags: ["Quick Energy", "Vitamin-C", "Sprout-Powered"],
  },
  {
    id: "6",
    name: "Dahi Quinoa Salad",
    description:
      "Protein-rich quinoa with cucumber, pomegranate, roasted peanuts and a hung curd dressing. Light, vibrant and deeply nourishing post-workout.",
    image: "/assets/generated/meal-dahi-quinoa-salad.dim_600x450.jpg",
    goal: "Recovery",
    type: "Post-Workout",
    calories: 420,
    protein: 20,
    carbs: 55,
    fat: 12,
    price: 259,
    ingredients: [
      "Quinoa",
      "Hung curd",
      "Pomegranate",
      "Cucumber",
      "Peanuts",
      "Lemon",
    ],
    tags: ["Electrolytes", "Probiotic", "Gut-Friendly"],
  },
];

export const bites: Bite[] = [
  {
    id: "b1",
    name: "Peanut Oat Energy Balls",
    description:
      "Natural peanut butter, rolled oats and jaggery rolled into power balls. 15g quick carbs, no refined sugar.",
    image: "/assets/generated/bite-peanut-oat.dim_400x400.jpg",
    calories: 85,
    protein: 4,
    price: 99,
    keyBenefit: "Quick carb boost",
    ingredients: ["Peanut butter", "Oats", "Jaggery", "Cardamom"],
  },
  {
    id: "b2",
    name: "Date & Almond Bites",
    description:
      "Medjool dates stuffed with almonds and rolled in coconut. Natural sugars for instant, clean energy.",
    image: "/assets/generated/bite-date-almond.dim_400x400.jpg",
    calories: 75,
    protein: 2,
    price: 119,
    keyBenefit: "Instant natural energy",
    ingredients: ["Medjool dates", "Almonds", "Desiccated coconut", "Cinnamon"],
  },
  {
    id: "b3",
    name: "Chana Jaggery Bites",
    description:
      "Roasted chana and jaggery blended with sesame. A desi pre-workout classic — protein + iron + fast fuel.",
    image: "/assets/generated/bite-chana-jaggery.dim_400x400.jpg",
    calories: 70,
    protein: 5,
    price: 89,
    keyBenefit: "Iron + protein boost",
    ingredients: ["Roasted chana", "Jaggery", "Sesame", "Black pepper"],
  },
  {
    id: "b4",
    name: "Moringa Banana Bites",
    description:
      "Ripe banana, moringa powder and chia seeds shaped into bites. Electrolyte-rich, anti-fatigue superfood snack.",
    image: "/assets/generated/bite-moringa-banana.dim_400x400.jpg",
    calories: 65,
    protein: 3,
    price: 109,
    keyBenefit: "Anti-fatigue electrolytes",
    ingredients: ["Banana", "Moringa powder", "Chia seeds", "Honey"],
  },
];

export const eliteMeals: EliteMeal[] = [
  {
    id: "e1",
    name: "Conscious Food Quinoa Power Bowl",
    description:
      "Certified organic quinoa from Conscious Food, slow-cooked with Organic India turmeric, seasonal vegetables and True Elements pumpkin seeds. Macro-perfect and chef-calibrated.",
    image: "/assets/generated/elite-meal-quinoa-power-bowl.dim_600x450.jpg",
    goal: "Strength",
    type: "Post-Workout",
    price: 399,
    brandedIngredients: [
      "Conscious Food quinoa",
      "Organic India turmeric",
      "True Elements seeds",
      "Cold-pressed olive oil",
    ],
    tags: ["Certified Organic", "Chef-Curated", "Complete Protein"],
  },
  {
    id: "e2",
    name: "Organic India Dal Shorba",
    description:
      "Heritage red lentils simmered in Sattvic ghee with cold-pressed spices and Organic India herb blend. Deeply nourishing, aromatic, and performance-grade.",
    image: "/assets/generated/elite-meal-dal-shorba.dim_600x450.jpg",
    goal: "Recovery",
    type: "Post-Workout",
    price: 359,
    brandedIngredients: [
      "Sattvic ghee",
      "Heritage lentils",
      "Organic India herbs",
      "Cold-pressed spices",
    ],
    tags: ["Sattvic", "Gut-Healing", "Ayurvedic"],
  },
  {
    id: "e3",
    name: "True Elements Granola Smoothie Bowl",
    description:
      "A vibrant base of seasonal berries and banana blended thick, topped with True Elements granola, Organic India ashwagandha, and raw honey. Pre-workout royalty.",
    image: "/assets/generated/elite-meal-granola-smoothie-bowl.dim_600x450.jpg",
    goal: "Endurance",
    type: "Pre-Workout",
    price: 379,
    brandedIngredients: [
      "True Elements granola",
      "Organic India ashwagandha",
      "Seasonal berries",
      "Raw honey",
    ],
    tags: ["Adaptogenic", "Energy-Boosting", "Superfood"],
  },
  {
    id: "e4",
    name: "Sattvic Paneer & Amaranth Wrap",
    description:
      "Handmade paneer in a Sattvic masala paired with amaranth roti and Conscious Food herb blend. Ancient grains, modern performance.",
    image: "/assets/generated/elite-meal-paneer-amaranth-wrap.dim_600x450.jpg",
    goal: "Flexibility",
    type: "Post-Workout",
    price: 419,
    brandedIngredients: [
      "Handmade paneer",
      "Amaranth roti",
      "Conscious Food herb blend",
      "Sattvic ghee",
    ],
    tags: ["Ancient Grain", "Anti-Inflammatory", "Calcium-Rich"],
  },
];

export const eliteBites: EliteBite[] = [
  {
    id: "eb1",
    name: "Conscious Food Almond Butter Balls",
    description:
      "Pure Conscious Food almond butter blended with Medjool dates and raw cacao. 3 bites per pack — clean fuel, zero compromise.",
    image: "/assets/generated/bite-date-almond.dim_400x400.jpg",
    calories: 95,
    packSize: 3,
    price: 169,
    keyBenefit: "Pure almond energy",
    ingredients: [
      "Conscious Food almond butter",
      "Medjool dates",
      "Raw cacao",
      "Himalayan salt",
    ],
  },
  {
    id: "eb2",
    name: "Organic India Moringa Energy Bites",
    description:
      "Organic India moringa + coconut butter + cashew blended into dense energy bites. Anti-fatigue adaptogens in every bite.",
    image: "/assets/generated/bite-moringa-banana.dim_400x400.jpg",
    calories: 85,
    packSize: 3,
    price: 189,
    keyBenefit: "Adaptogenic energy",
    ingredients: [
      "Organic India moringa",
      "Coconut butter",
      "Cashew",
      "Jaggery",
    ],
  },
];

export const plans = [
  {
    id: "daily",
    name: "Daily Fuel",
    price: "\u20b9549",
    period: "/ day",
    meals: "2 meals daily",
    badge: null,
    highlight: false,
    features: [
      "2 chef-prepared meals/day",
      "Choose Pre or Post-workout",
      "Fresh same-day delivery",
      "Flexible daily cancellation",
      "Nutrition tracking included",
    ],
  },
  {
    id: "weekly",
    name: "Weekly Boost",
    price: "\u20b93,299",
    period: "/ week",
    meals: "14 meals/week",
    badge: null,
    highlight: false,
    features: [
      "14 chef-prepared meals/week",
      "Full Pre & Post-workout menu",
      "Priority fresh delivery",
      "Weekly menu customisation",
      "Goal-based meal planning",
    ],
  },
  {
    id: "monthly",
    name: "Monthly Performance",
    price: "\u20b910,999",
    period: "/ month",
    meals: "60 meals/month",
    badge: "Best Value!",
    highlight: true,
    features: [
      "60 chef-prepared meals/month",
      "Full access to all 30+ meals",
      "Free express delivery in Gurgaon",
      "1-on-1 nutrition coaching call",
      "Custom meal plan + macros",
    ],
  },
];

export const elitePlans = [
  {
    id: "elite-daily",
    name: "Elite Daily",
    price: "\u20b9749",
    period: "/ day",
    meals: "2 elite meals daily",
    badge: null,
    features: [
      "Branded ingredients only",
      "Chef-curated macros",
      "Priority delivery (7am–9am slot)",
      "Exclusive eco-packaging",
      "Dedicated support",
    ],
  },
  {
    id: "elite-weekly",
    name: "Elite Weekly",
    price: "\u20b94,299",
    period: "/ week",
    meals: "14 elite meals/week",
    badge: "Most Popular",
    features: [
      "Branded ingredients only",
      "Chef-curated macros",
      "Priority delivery (7am–9am slot)",
      "Exclusive eco-packaging",
      "Dedicated support",
    ],
  },
  {
    id: "elite-monthly",
    name: "Elite Monthly",
    price: "\u20b913,999",
    period: "/ month",
    meals: "60 elite meals/month",
    badge: null,
    features: [
      "Branded ingredients only",
      "Chef-curated macros",
      "Priority delivery (7am–9am slot)",
      "Exclusive eco-packaging",
      "Dedicated support",
    ],
  },
];
