import { useId } from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PriceSelect({options}) {
  const id = useId()
  return (
    <div className="mt-6">
      <Label htmlFor={id}>Sortiraj po ceni</Label>
      <Select>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          {
            options.map((option,index)=>(
              <SelectItem key={option} value={index}>{option}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  );
}
