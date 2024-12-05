"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useStoreDrawer } from "@/hooks/use-store-drawer"
import { organsInfo } from "@/data/organs-info"
import QuizGame from "./quizz"

export const SheetContainer = () => {
  const { isDrawerOpen, toggleDrawer, selectedOrgan } = useStoreDrawer()

  const organData = selectedOrgan ? organsInfo[selectedOrgan] : null

  return (
    <Sheet open={isDrawerOpen} onOpenChange={toggleDrawer}>
      <SheetContent className="w-full sm:w-[50vw] max-w-[800px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {organData ? organData.title : 'Human Body Organs'}
          </SheetTitle>
          <SheetDescription>
            {organData ? organData.description : 'Click on any organ to learn more about it'}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col space-y-32">

          <div>
            {organData && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Key Functions:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {organData.functions.map((function_, index) => (
                    <li key={index}>{function_}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <QuizGame />

        </div>

      </SheetContent>


    </Sheet>
  )
}
