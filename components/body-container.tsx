"use client"
import Image from "next/image"
import Body from "@/public/svgs/body.svg"

import { organs } from "@/data/organs-data"
import { useStoreDrawer } from "@/hooks/use-store-drawer"
import { OrganId } from "@/types/organs"

export const BodyContainer = () => {
  const { toggleDrawer, setSelectedOrgan } = useStoreDrawer()

  const handleOrganClick = (organId: OrganId) => {
    setSelectedOrgan(organId)
    toggleDrawer()
  }

  return (
    <div className="mt-6 px-4 w-1/3 ml-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <div className="relative">
          <Image
            src={Body}
            alt="body_organ"
            className="w-full h-auto object-contain"
          />
        </div>

        <div>
          {organs.map((organ) => (
            <Image
              key={organ.id}
              src={organ.src}
              alt={organ.alt}
              onClick={() => handleOrganClick(organ.id)}
              className={`absolute ${organ.position} ${organ.width} h-auto hover:scale-105 transition-all duration-200 hover:cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
