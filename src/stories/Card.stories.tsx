import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Clock, Flame, Heart } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Greek Salad</CardTitle>
        <CardDescription>Fresh Mediterranean vegetables with feta</CardDescription>
      </CardHeader>
      <CardContent><p className="text-sm text-muted-foreground">A classic Greek salad with crisp cucumbers, ripe tomatoes, Kalamata olives, red onion, and creamy feta cheese.</p></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Save recipe</Button>
        <Button>Add to plan</Button>
      </CardFooter>
    </Card>
  ),
};

export const RecipeCard: Story = {
  render: () => (
    <Card className="w-[320px] overflow-hidden">
      <div className="h-40 bg-muted flex items-center justify-center text-muted-foreground text-sm">Recipe image</div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg">Avocado Toast</CardTitle>
          <button aria-label="Save to favourites"><Heart className="h-5 w-5 text-muted-foreground hover:text-red-500 transition-colors" /></button>
        </div>
        <CardDescription>Breakfast · 2 servings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 10 min</span>
          <span className="flex items-center gap-1"><Flame className="h-4 w-4" /> 320 kcal</span>
        </div>
      </CardContent>
      <CardFooter><Button className="w-full">Add to today</Button></CardFooter>
    </Card>
  ),
};

export const NutritionCard: Story = {
  render: () => (
    <Card className="w-[280px]">
      <CardHeader><CardTitle className="text-base">Today&apos;s Nutrition</CardTitle></CardHeader>
      <CardContent className="space-y-3">
        {[
          { label: "Calories", value: "1,840 / 2,000 kcal", pct: 92 },
          { label: "Protein", value: "98 / 120 g", pct: 82 },
          { label: "Carbs", value: "210 / 250 g", pct: 84 },
          { label: "Fat", value: "62 / 70 g", pct: 89 },
        ].map(({ label, value, pct }) => (
          <div key={label}>
            <div className="flex justify-between text-sm mb-1"><span className="font-medium">{label}</span><span className="text-muted-foreground">{value}</span></div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden"><div className="h-full rounded-full bg-primary" style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </CardContent>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader><CardTitle>Meal logged</CardTitle><CardDescription>Your breakfast has been recorded</CardDescription></CardHeader>
    </Card>
  ),
};
