"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function PriceSlider({changePriceRange, maxRange}) {
  const min_price = 300
  const max_price = maxRange
  const [value, setValue] = useState([min_price, max_price])

  const formatPrice = (price) => {
    return price === max_price
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
          min={min_price}
          max={max_price}
          aria-label="Price range slider" />
        <Button onClick={()=>applyPriceRange()} variant="outline" className="hover:cursor-pointer">Primeni</Button>
      </div>
    </div>
  );
}
