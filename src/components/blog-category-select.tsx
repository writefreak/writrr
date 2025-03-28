"use client";
import { useEffect, useMemo, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getBlogCategories } from "@/lib/actions";

interface BlogCategorySelectProps {
  name: string;
  onValueChange: (name: string) => void;
}

interface BlogCategory {
  name: string;
}

const BlogCategorySelect = ({
  name,
  onValueChange,
}: BlogCategorySelectProps) => {
  const [categories, setBlogCategories] = useState<BlogCategory[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const categories = await getBlogCategories();
      console.log(categories);
      setBlogCategories(categories);
    };
    fetchCountries();
  }, []);
  const category = useMemo(() => {
    return categories && categories.find((item) => item.name == name)?.name;
  }, [name, categories]);
  return (
    <div>
      <Select value={category} onValueChange={onValueChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {categories.map((item) => (
              <SelectItem key={item.name} value={item.name}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BlogCategorySelect;
