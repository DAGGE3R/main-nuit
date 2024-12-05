"use client"


import { SheetContainer } from './sheet-container';
import { Button } from './ui/button';
import { useStoreDrawer } from "@/hooks/use-store-drawer";


export const ComparisonViewer = () => {
  const { toggleDrawer } = useStoreDrawer()

  return (
    <div className='w-full'>
      <SheetContainer />
      <Button onClick={toggleDrawer} >Click me</Button>
    </div>
  )
};
