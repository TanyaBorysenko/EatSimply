import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup, SelectLabel } from "@/components/ui/select";

const meta: Meta = {
  title: "UI/Form Inputs",
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;

export const TextInput: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2 w-[320px]">
      <Label htmlFor="search">Search recipes</Label>
      <Input id="search" placeholder="e.g. chicken, pasta..." />
    </div>
  ),
};

export const CheckboxGroup: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-3 w-[240px]">
      <p className="text-sm font-medium">Dietary restrictions</p>
      {["Vegetarian", "Vegan", "Gluten-free", "Dairy-free", "Nut-free"].map((label) => (
        <div key={label} className="flex items-center gap-2">
          <Checkbox id={label} />
          <Label htmlFor={label} className="font-normal cursor-pointer">{label}</Label>
        </div>
      ))}
    </div>
  ),
};

export const SelectMealType: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2 w-[240px]">
      <Label>Meal type</Label>
      <Select>
        <SelectTrigger><SelectValue placeholder="Select meal type" /></SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Daily meals</SelectLabel>
            <SelectItem value="breakfast">Breakfast</SelectItem>
            <SelectItem value="lunch">Lunch</SelectItem>
            <SelectItem value="dinner">Dinner</SelectItem>
            <SelectItem value="snack">Snack</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  ),
};
