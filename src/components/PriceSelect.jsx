import { useId } from "react"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PriceSelect({options, setFilter}) {
  const id = useId()
  return (
    <div className="mt-6">
      <Label htmlFor={id}>Sortiraj po ceni</Label>
      <Select onValueChange={(value) => setFilter(value)}>
        <SelectTrigger id={id}>
          <SelectValue placeholder="Filter" />
        </SelectTrigger>
        <SelectContent>
          {
            options.map((option, index)=>(
              <SelectItem key={option.text} value={option.value}>{option.text}</SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </div>
  );
}
