import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ItemCardProps {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  condition: string;
  category: string;
}

export function ItemCard({ title, price, description, image, condition, category }: ItemCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card className="group hover:shadow-[var(--shadow-hover)] transition-all duration-300 overflow-hidden border-border/50">
      <CardHeader className="p-0">
        <div className="aspect-square overflow-hidden bg-muted rounded-t-lg">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-300 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          {!imageLoaded && (
            <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
              <div className="w-12 h-12 bg-muted-foreground/20 rounded-full" />
            </div>
          )}
        </div>
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge variant="secondary" className="bg-marketplace-accent text-marketplace-primary font-medium">
            {category}
          </Badge>
          <Badge 
            variant={condition === 'New' ? 'default' : 'outline'} 
            className={condition === 'New' ? 'bg-marketplace-success text-white' : ''}
          >
            {condition}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2 text-foreground mb-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-marketplace-primary">
            ${price.toFixed(2)}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-marketplace-primary hover:bg-marketplace-primary-light transition-colors">
          Contact Seller
        </Button>
      </CardFooter>
    </Card>
  );
}