"use client"

import { useState, useEffect, use } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function PriceSlider({changePriceRange, minRange, maxRange, resetFilters}) {
  const [value, setValue] = useState([minRange, maxRange])

  useEffect(() => {
    setValue([minRange, maxRange])
  }, [minRange, maxRange])
  
  const formatPrice = (price) => {
    return price === maxRange
      ? `${price.toLocaleString()}+ RSD`
      : `${price.toLocaleString()} RSD`;
  }

  function applyPriceRange(){
     changePriceRange(value)
  }

  return (
    <div className="mt-6">
      <Label className="tabular-nums">
        Od {formatPrice(value[0])} do {formatPrice(value[1])}
      </Label>
      <div className="flex flex-col items-start gap-4 mt-4">
        <Slider
          value={value}
          onValueChange={setValue}
          min={minRange}
          max={maxRange}
          aria-label="Price range slider" />
          <div className="flex justify-between gap-4">
          <Button onClick={()=>applyPriceRange()} variant="outline" className="hover:cursor-pointer">Primeni</Button>
          <Button onClick={()=>{
            resetFilters()
            setValue([minRange, maxRange])
            }} variant="outline" className="hover:cursor-pointer border-[#DC2525] text-[#DC2525] hover:text-primary-white hover:bg-[#DC2525] transition">Poništi</Button>
          </div>
      </div>
    </div>
  );
}
