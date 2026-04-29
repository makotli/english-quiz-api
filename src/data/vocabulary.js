export const categoryLabels = {
  food: "food",
  travel: "travel",
  hotel: "hotel",
  "daily-life": "daily life",
  business: "business",
  emotions: "emotions"
};

export const levelBands = {
  1: "A1",
  2: "A2-B1",
  3: "A2-B1",
  4: "B2-C1",
  5: "B2-C1"
};

export const vocabularyDataset = {
  food: [
    {
      level: 1,
      baseWords: ["bread", "butter", "breakfast"],
      correctAssociations: [
        {
          word: "toast",
          explanation: "Toast is bread that is often eaten with butter at breakfast."
        }
      ],
      distractors: ["airport", "invoice", "angry"]
    },
    {
      level: 1,
      baseWords: ["fruit", "yellow", "monkey"],
      correctAssociations: [
        {
          word: "banana",
          explanation: "A banana is a yellow fruit and is commonly associated with monkeys."
        }
      ],
      distractors: ["meeting", "passport", "blanket"]
    },
    {
      level: 2,
      baseWords: ["bar", "alcohol", "drink"],
      correctAssociations: [
        {
          word: "beer",
          explanation: "Beer is an alcoholic drink commonly served in a bar."
        }
      ],
      distractors: ["cat", "suitcase", "printer"]
    },
    {
      level: 3,
      baseWords: ["recipe", "oven", "sweet"],
      correctAssociations: [
        {
          word: "cake",
          explanation: "Cake is a sweet food that is usually made from a recipe and baked in an oven."
        }
      ],
      distractors: ["boarding", "deadline", "lonely"]
    },
    {
      level: 4,
      baseWords: ["fermented", "cabbage", "side dish"],
      correctAssociations: [
        {
          word: "sauerkraut",
          explanation: "Sauerkraut is fermented cabbage, often eaten as a side dish."
        }
      ],
      distractors: ["itinerary", "merger", "euphoria"]
    },
    {
      level: 5,
      baseWords: ["aroma", "herbs", "delicate flavor"],
      correctAssociations: [
        {
          word: "seasoning",
          explanation: "Seasoning uses herbs and spices to add aroma and delicate flavor to food."
        }
      ],
      distractors: ["liability", "jet lag", "resentment"]
    }
  ],
  travel: [
    {
      level: 1,
      baseWords: ["plane", "ticket", "airport"],
      correctAssociations: [
        {
          word: "flight",
          explanation: "A flight is a journey by plane, usually connected with tickets and airports."
        }
      ],
      distractors: ["soup", "pillow", "salary"]
    },
    {
      level: 1,
      baseWords: ["map", "city", "walk"],
      correctAssociations: [
        {
          word: "tour",
          explanation: "A tour is a visit around a city or place, often using a map and walking."
        }
      ],
      distractors: ["cheese", "meeting", "fear"]
    },
    {
      level: 2,
      baseWords: ["passport", "border", "country"],
      correctAssociations: [
        {
          word: "visa",
          explanation: "A visa is an official document that allows someone to enter another country."
        }
      ],
      distractors: ["sandwich", "blanket", "invoice"]
    },
    {
      level: 3,
      baseWords: ["schedule", "route", "trip"],
      correctAssociations: [
        {
          word: "itinerary",
          explanation: "An itinerary is a planned route or schedule for a trip."
        }
      ],
      distractors: ["dessert", "laundry", "jealousy"]
    },
    {
      level: 4,
      baseWords: ["delay", "time zone", "fatigue"],
      correctAssociations: [
        {
          word: "jet lag",
          explanation: "Jet lag is tiredness caused by traveling quickly across time zones."
        }
      ],
      distractors: ["appetizer", "promotion", "contentment"]
    },
    {
      level: 5,
      baseWords: ["remote", "unexplored", "destination"],
      correctAssociations: [
        {
          word: "uncharted",
          explanation: "Uncharted describes a place or route that is not well mapped or explored."
        }
      ],
      distractors: ["utensil", "memo", "nostalgia"]
    }
  ],
  hotel: [
    {
      level: 1,
      baseWords: ["room", "sleep", "hotel"],
      correctAssociations: [
        {
          word: "bed",
          explanation: "A bed is where guests sleep in a hotel room."
        }
      ],
      distractors: ["banana", "airport", "anger"]
    },
    {
      level: 1,
      baseWords: ["key", "front desk", "guest"],
      correctAssociations: [
        {
          word: "reception",
          explanation: "Reception is the hotel area where guests get keys and help from the front desk."
        }
      ],
      distractors: ["salad", "train", "profit"]
    },
    {
      level: 2,
      baseWords: ["booking", "date", "room"],
      correctAssociations: [
        {
          word: "reservation",
          explanation: "A reservation is an arrangement to keep a hotel room for specific dates."
        }
      ],
      distractors: ["noodles", "airport", "curiosity"]
    },
    {
      level: 3,
      baseWords: ["clean towels", "room service", "staff"],
      correctAssociations: [
        {
          word: "housekeeping",
          explanation: "Housekeeping is the hotel staff or service that cleans rooms and provides items such as towels."
        }
      ],
      distractors: ["souvenir", "spreadsheet", "envy"]
    },
    {
      level: 4,
      baseWords: ["late arrival", "reserved room", "guarantee"],
      correctAssociations: [
        {
          word: "confirmation",
          explanation: "A confirmation proves that a booking or reserved hotel room is guaranteed."
        }
      ],
      distractors: ["cuisine", "layover", "skepticism"]
    },
    {
      level: 5,
      baseWords: ["luxury", "personal service", "hotel guest"],
      correctAssociations: [
        {
          word: "concierge",
          explanation: "A concierge provides personalized help for hotel guests, especially in higher-end hotels."
        }
      ],
      distractors: ["marinade", "shareholder", "melancholy"]
    }
  ],
  "daily-life": [
    {
      level: 1,
      baseWords: ["teeth", "morning", "bathroom"],
      correctAssociations: [
        {
          word: "toothbrush",
          explanation: "A toothbrush is used in the bathroom to clean teeth, often in the morning."
        }
      ],
      distractors: ["ticket", "steak", "contract"]
    },
    {
      level: 1,
      baseWords: ["clothes", "dirty", "washing"],
      correctAssociations: [
        {
          word: "laundry",
          explanation: "Laundry means dirty clothes that need washing or the task of washing them."
        }
      ],
      distractors: ["flight", "dessert", "joy"]
    },
    {
      level: 2,
      baseWords: ["money", "shop", "pay"],
      correctAssociations: [
        {
          word: "wallet",
          explanation: "A wallet is used to carry money and cards for paying in shops."
        }
      ],
      distractors: ["concierge", "appetizer", "jealous"]
    },
    {
      level: 3,
      baseWords: ["appointment", "calendar", "reminder"],
      correctAssociations: [
        {
          word: "schedule",
          explanation: "A schedule organizes appointments and reminders on a calendar."
        }
      ],
      distractors: ["sauce", "boarding pass", "revenue"]
    },
    {
      level: 4,
      baseWords: ["rent", "utilities", "monthly expenses"],
      correctAssociations: [
        {
          word: "budget",
          explanation: "A budget is a plan for managing money, including rent, utilities, and other monthly expenses."
        }
      ],
      distractors: ["jet lag", "buffet", "resentful"]
    },
    {
      level: 5,
      baseWords: ["routine", "automatic behavior", "repeated action"],
      correctAssociations: [
        {
          word: "habitual",
          explanation: "Habitual describes behavior that happens regularly or automatically through repetition."
        }
      ],
      distractors: ["appraisal", "suite", "exquisite"]
    }
  ],
  business: [
    {
      level: 1,
      baseWords: ["work", "company", "money"],
      correctAssociations: [
        {
          word: "job",
          explanation: "A job is work someone does for a company or employer to earn money."
        }
      ],
      distractors: ["banana", "passport", "sad"]
    },
    {
      level: 1,
      baseWords: ["team", "talk", "office"],
      correctAssociations: [
        {
          word: "meeting",
          explanation: "A meeting is when people on a team talk together, often in an office."
        }
      ],
      distractors: ["pasta", "ticket", "blanket"]
    },
    {
      level: 2,
      baseWords: ["client", "price", "document"],
      correctAssociations: [
        {
          word: "invoice",
          explanation: "An invoice is a document that asks a client to pay a price for goods or services."
        }
      ],
      distractors: ["shampoo", "luggage", "relieved"]
    },
    {
      level: 3,
      baseWords: ["goal", "sales", "growth"],
      correctAssociations: [
        {
          word: "revenue",
          explanation: "Revenue is the money a business earns from sales, often linked to growth goals."
        }
      ],
      distractors: ["reception", "omelet", "homesick"]
    },
    {
      level: 4,
      baseWords: ["contract", "risk", "responsibility"],
      correctAssociations: [
        {
          word: "liability",
          explanation: "Liability is legal or financial responsibility for a risk, often defined in contracts."
        }
      ],
      distractors: ["itinerary", "cereal", "euphoria"]
    },
    {
      level: 5,
      baseWords: ["two companies", "combine", "acquisition"],
      correctAssociations: [
        {
          word: "merger",
          explanation: "A merger happens when two companies combine into one business."
        }
      ],
      distractors: ["amenity", "simmer", "anxiety"]
    }
  ],
  emotions: [
    {
      level: 1,
      baseWords: ["smile", "happy", "good"],
      correctAssociations: [
        {
          word: "joy",
          explanation: "Joy is a strong feeling of happiness, often shown with a smile."
        }
      ],
      distractors: ["bread", "hotel", "invoice"]
    },
    {
      level: 1,
      baseWords: ["cry", "bad", "alone"],
      correctAssociations: [
        {
          word: "sad",
          explanation: "Sad describes an unhappy feeling, sometimes connected with crying or feeling alone."
        }
      ],
      distractors: ["cheese", "passport", "meeting"]
    },
    {
      level: 2,
      baseWords: ["test", "worry", "nervous"],
      correctAssociations: [
        {
          word: "anxiety",
          explanation: "Anxiety is a worried or nervous feeling, often before a test or difficult event."
        }
      ],
      distractors: ["reservation", "noodles", "salary"]
    },
    {
      level: 3,
      baseWords: ["friend success", "want same thing", "unhappy"],
      correctAssociations: [
        {
          word: "jealousy",
          explanation: "Jealousy is an unhappy feeling when someone else has something you want."
        }
      ],
      distractors: ["housekeeping", "boarding", "dessert"]
    },
    {
      level: 4,
      baseWords: ["achievement", "deep happiness", "excited"],
      correctAssociations: [
        {
          word: "euphoria",
          explanation: "Euphoria is an intense feeling of happiness or excitement, often after an achievement."
        }
      ],
      distractors: ["liability", "concierge", "seasoning"]
    },
    {
      level: 5,
      baseWords: ["past memories", "longing", "bittersweet"],
      correctAssociations: [
        {
          word: "nostalgia",
          explanation: "Nostalgia is a bittersweet feeling of longing for past experiences or memories."
        }
      ],
      distractors: ["merger", "amenity", "cuisine"]
    }
  ]
};
