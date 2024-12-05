import { OrganId, OrganInfo } from "@/types/organs"

export const organsInfo: Record<OrganId, OrganInfo> = {
  brain: {
    title: "Brain",
    description: "The brain is the control center of the human body, responsible for thought, emotion, and sensory processing.",
    functions: [
      "Controls thought and emotion",
      "Regulates body functions",
      "Processes sensory information"
    ]
  },
  heart: {
    title: "Heart",
    description: "The heart is a muscular organ that pumps blood throughout the body, delivering oxygen and nutrients.",
    functions: [
      "Pumps blood throughout the body",
      "Delivers oxygen and nutrients",
      "Removes waste products"
    ]
  },
  lungs: {
    title: "Lungs",
    description: "The lungs are vital organs for respiration, exchanging oxygen and carbon dioxide with the blood.",
    functions: [
      "Enable breathing and oxygen exchange",
      "Regulate blood pH",
      "Excrete carbon dioxide"
    ]
  },
  liver: {
    title: "Liver",
    description: "The liver detoxifies chemicals and metabolizes drugs, also producing bile for digestion.",
    functions: [
      "Detoxifies the blood",
      "Produces bile for digestion",
      "Stores vitamins and minerals"
    ]
  },
  kidneys: {
    title: "Kidneys",
    description: "The kidneys filter blood to remove waste products and maintain fluid balance.",
    functions: [
      "Filter blood and produce urine",
      "Regulate blood pressure",
      "Maintain electrolyte balance"
    ]
  },
  stomach: {
    title: "Digestive System",
    description: "The stomach plays a key role in digestion by breaking down food with acids and enzymes.",
    functions: [
      "Breaks down food for digestion",
      "Absorbs nutrients",
      "Produces digestive enzymes"
    ]
  }
} as const;
