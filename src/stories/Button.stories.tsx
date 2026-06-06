import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Trash2, Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["default", "destructive", "outline", "secondary", "ghost", "link"] },
    size: { control: "select", options: ["default", "sm", "lg", "icon"] },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = { args: { children: "Add to meal plan", variant: "default", size: "default" } };
export const Secondary: Story = { args: { children: "View recipe", variant: "secondary" } };
export const Outline: Story = { args: { children: "Save for later", variant: "outline" } };
export const Destructive: Story = { args: { children: "Remove meal", variant: "destructive" } };
export const Ghost: Story = { args: { children: "Skip day", variant: "ghost" } };
export const Link: Story = { args: { children: "See all recipes", variant: "link" } };
export const Small: Story = { args: { children: "Quick add", size: "sm" } };
export const Large: Story = { args: { children: "Start meal plan", size: "lg" } };
export const IconButton: Story = { args: { size: "icon", variant: "outline", children: <Trash2 className="h-4 w-4" />, "aria-label": "Delete meal" } };
export const WithIcon: Story = { args: { children: <><Plus className="h-4 w-4" />Add ingredient</> } };
export const Loading: Story = { args: { disabled: true, children: <><Loader2 className="h-4 w-4 animate-spin" />Saving...</> } };
export const Disabled: Story = { args: { children: "Add to meal plan", disabled: true } };
