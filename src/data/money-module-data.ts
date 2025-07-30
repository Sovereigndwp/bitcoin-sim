import { QuizQuestion, MoneyTrait } from '@/types';

export const quizQuestions: QuizQuestion[] = [
  {
    id: "divisibility",
    text: "You own a cow but can't split it for shoes.",
    question: "Why couldn't this work?",
    options: ["Cows are too smelly", "You can't break one in two", "Everyone loves beef"],
    answer: 1,
    takeaway: "Money must be divisible.",
    unlock: "Divisibility"
  },
  {
    id: "scarcity",
    text: "Rare shells were used until traders flooded markets.",
    question: "What went wrong?",
    options: ["Shell use spread", "Scarcity vanished", "Picked wrong shell"],
    answer: 1,
    takeaway: "Money must be hard to reproduce.",
    unlock: "Scarcity"
  },
  {
    id: "portability",
    text: "Gold coins were perfect—but heavy to carry everywhere.",
    question: "Biggest weakness?",
    options: ["Too beautiful", "Too heavy", "Too rare"],
    answer: 1,
    takeaway: "Money needs portability.",
    unlock: "Portability"
  },
  {
    id: "fungibility",
    text: "Roman emperors shaved silver off coins, breaking trust.",
    question: "What broke?",
    options: ["Trust in appearance", "People liked new coins", "They melted coins"],
    answer: 0,
    takeaway: "Money requires fungibility.",
    unlock: "Fungibility"
  },
  {
    id: "durability",
    text: "Salt money dissolved in rain and rotted.",
    question: "Why did it fail?",
    options: ["Too common", "It wouldn't last", "Nobody liked salt"],
    answer: 1,
    takeaway: "Money must be durable.",
    unlock: "Durability"
  },
  {
    id: "ledger-consensus",
    text: "Yap used giant stone discs—ownership just remembered.",
    question: "Key insight?",
    options: ["Money must be physical", "Shared memory matters", "Rocks are heavy"],
    answer: 1,
    takeaway: "Ledger consensus is critical.",
    unlock: "Ledger Consensus"
  },
  {
    id: "acceptability",
    text: "Every town minted coins; only gold worked everywhere.",
    question: "Why gold?",
    options: ["It was pretty", "Everyone trusted it", "It was heaviest"],
    answer: 1,
    takeaway: "Money needs wide acceptance.",
    unlock: "Acceptability"
  },
  {
    id: "store-of-value",
    text: "Germany 1923: prices doubled daily—spent fast or lost everything.",
    question: "Lesson?",
    options: ["Spending fast is fun", "Money must hold value", "Prices should flex"],
    answer: 1,
    takeaway: "Store of value is essential.",
    unlock: "Store of Value"
  },
  {
    id: "censorship-resistance-1",
    text: "Nixon ended gold backing in one TV decision.",
    question: "What does this show?",
    options: ["Stability improved", "One can reshape money", "Rules never change"],
    answer: 1,
    takeaway: "Resist arbitrary control.",
    unlock: "Censorship Resistance"
  },
  {
    id: "borderless",
    text: "1980s FX woes: travelers paid big fees and waited days.",
    question: "Why painful?",
    options: ["Rates always fair", "Needed many tickets", "Fees & delays drained you"],
    answer: 2,
    takeaway: "Money must be borderless.",
    unlock: "Borderless"
  },
  {
    id: "censorship-resistance-2",
    text: "2020: protesters had accounts frozen without warning.",
    question: "What did this show?",
    options: ["Banks protect you", "Accounts can be censored", "Everyone thought fair"],
    answer: 1,
    takeaway: "Money must resist censorship.",
    unlock: "Censorship Resistance"
  }
];

export const moneyTraits: MoneyTrait[] = [
  {
    name: "Divisibility",
    icon: "➗",
    description: "Can split units small or large",
    unlocked: false
  },
  {
    name: "Scarcity",
    icon: "💎",
    description: "Limited supply, can't be minted at will",
    unlocked: false
  },
  {
    name: "Portability",
    icon: "🚀",
    description: "Easy to carry and send",
    unlocked: false
  },
  {
    name: "Fungibility",
    icon: "⚖️",
    description: "All units identical",
    unlocked: false
  },
  {
    name: "Durability",
    icon: "🛡️",
    description: "Lasts over time",
    unlocked: false
  },
  {
    name: "Ledger Consensus",
    icon: "📋",
    description: "Shared record of who owns what",
    unlocked: false
  },
  {
    name: "Acceptability",
    icon: "🤝",
    description: "Trusted by everyone",
    unlocked: false
  },
  {
    name: "Store of Value",
    icon: "🏦",
    description: "Holds purchasing power",
    unlocked: false
  },
  {
    name: "Censorship Resistance",
    icon: "🛡️",
    description: "Can't be frozen",
    unlocked: false
  },
  {
    name: "Borderless",
    icon: "🌐",
    description: "Moves across borders freely",
    unlocked: false
  }
];

export const recapSteps = [
  {
    id: 1,
    title: "☕ Coffee Purchase",
    description: "Hand over one coin → get a latte instantly. No chains, no timing headaches."
  },
  {
    id: 2,
    title: "💰 Store of Value",
    description: "Sell veggies for money → come back tomorrow → still good. Money doesn't spoil."
  },
  {
    id: 3,
    title: "📏 Compare Prices",
    description: "Cleaning=$40, Cake=$25, Rice=$5 → easy to pick the best deal with one consistent measure."
  }
];

export const moduleConfig = {
  title: "Module 1: If You Don’t Define It, It Will Define You",
  subtitle: "Learn why money exists, how past experiments failed, what traits sound money must have, and how Bitcoin fits in.",
  totalSteps: 18
};
