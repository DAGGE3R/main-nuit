import Brain from "@/public/svgs/brain.svg"
import Lungs from "@/public/svgs/lungs.svg"
import Heart from "@/public/svgs/heart.svg"
import Kidney from "@/public/svgs/kidneys.svg"
import Liver from "@/public/svgs/liver.svg"
import Stomach from "@/public/svgs/digestive.svg"

import { OrganData } from "@/types/organs"




export const organs: OrganData[] = [
  {
    id: 'brain',
    src: Brain,
    alt: 'Brain',
    position: 'top-[2%] left-[19%]',
    width: 'w-[10%]'
  },
  {
    id: 'lungs',
    src: Lungs,
    alt: 'Lungs',
    position: 'top-[17%] left-[15%]',
    width: 'w-[15%]'
  },
  {
    id: 'heart',
    src: Heart,
    alt: 'Heart',
    position: 'top-[20%] left-[22%]',
    width: 'w-[8%]'
  },
  {
    id: 'liver',
    src: Liver,
    alt: 'Liver',
    position: 'top-[32%] left-[14%]',
    width: 'w-[12%]'
  },
  {
    id: 'kidneys',
    src: Kidney,
    alt: 'Kidneys',
    position: 'top-[35%] left-[16%]',
    width: 'w-[15%]'
  },
  {
    id: 'stomach',
    src: Stomach,
    alt: 'Digestive System',
    position: 'top-[40%] left-[17%]',
    width: 'w-[12%]'
  }
] as const
