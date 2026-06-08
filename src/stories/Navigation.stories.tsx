import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UtensilsCrossed, Search, User } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const meta: Meta = {
  title: "UI/Navigation",
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
};

export default meta;

function ListItem({ className, title, children, href = "#" }: { className?: string; title: string; children: React.ReactNode; href?: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a href={href} className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

export const AppHeader: StoryObj = {
  render: () => (
    <header className="border-b bg-background">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <UtensilsCrossed className="h-5 w-5" /> EatSimply
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="#">
                        <UtensilsCrossed className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">EatSimply</div>
                        <p className="text-sm leading-tight text-muted-foreground">Simple, nourishing meals planned for your week.</p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="#" title="Browse recipes">Filter by cuisine, diet, and prep time</ListItem>
                  <ListItem href="#" title="Collections">Curated packs for every goal</ListItem>
                  <ListItem href="#" title="Seasonal picks">Fresh ideas based on what&apos;s in season</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="#">Log meal</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Search"><Search className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" aria-label="Profile"><User className="h-4 w-4" /></Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
    </header>
  ),
};
