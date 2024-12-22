import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProfileCateg() {
  return (
    <div className="space-y-3 pt-10">
      <div>
        <h3 className="text-lg font-bold">Category</h3>
        <p className="text-gray-500 text-xs md:text-sm">
          Please Select a corresponding category
        </p>
      </div>
      <Select>
        <SelectTrigger className="w-[300px]">
          <SelectValue placeholder="Select a blog category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
