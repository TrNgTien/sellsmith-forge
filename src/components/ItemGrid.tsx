import { ItemCard } from "./ItemCard";

interface Item {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  condition: string;
  category: string;
}

interface ItemGridProps {
  items: Item[];
}

export function ItemGrid({ items }: ItemGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="w-12 h-12 bg-muted-foreground/20 rounded-full" />
        </div>
        <h3 className="text-xl font-semibold text-muted-foreground mb-2">No items yet</h3>
        <p className="text-muted-foreground">Add your first item to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
}