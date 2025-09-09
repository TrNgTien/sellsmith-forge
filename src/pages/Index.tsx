import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AddItemDialog } from "@/components/AddItemDialog";
import { ItemGrid } from "@/components/ItemGrid";
import { GoogleFormEmbed } from "@/components/GoogleFormEmbed";
import { ShoppingBag, Users, Shield, Star } from "lucide-react";
import heroImage from "@/assets/marketplace-hero.jpg";

interface Item {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  condition: string;
  category: string;
}

const Index = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: "1",
      title: "MacBook Pro 13-inch",
      price: 1299.99,
      description: "Excellent condition MacBook Pro with M2 chip, 8GB RAM, 256GB SSD. Perfect for work or study.",
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&h=500&fit=crop",
      condition: "Like New",
      category: "Electronics"
    },
    {
      id: "2",
      title: "Vintage Leather Jacket",
      price: 89.99,
      description: "Genuine leather jacket in great condition. Size Medium. Classic brown color with silver zippers.",
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop",
      condition: "Good",
      category: "Clothing"
    },
    {
      id: "3",
      title: "Kitchen Stand Mixer",
      price: 199.99,
      description: "Powerful 6-quart stand mixer with multiple attachments included. Perfect for baking enthusiasts.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=500&fit=crop",
      condition: "New",
      category: "Home & Garden"
    }
  ]);

  const addItem = (newItem: Omit<Item, "id">) => {
    const item: Item = {
      ...newItem,
      id: Date.now().toString(),
    };
    setItems([item, ...items]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-marketplace-primary to-marketplace-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Your Personal Marketplace
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Sell your items easily and collect customer data with embedded Google Forms. 
            Simple, secure, and professional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AddItemDialog onAddItem={addItem} />
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-marketplace-primary"
              onClick={() => document.getElementById('items-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Browse Items
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-marketplace-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marketplace-primary">Easy Listing</h3>
              <p className="text-muted-foreground">Add your items quickly with our simple form interface.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-marketplace-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marketplace-primary">Customer Data</h3>
              <p className="text-muted-foreground">Collect valuable insights with embedded Google Forms.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-marketplace-success rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-marketplace-primary">Secure & Reliable</h3>
              <p className="text-muted-foreground">Built with modern web technologies for optimal performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Items Section */}
      <section id="items-section" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-marketplace-primary mb-2">
                Featured Items
              </h2>
              <p className="text-muted-foreground">
                {items.length} {items.length === 1 ? 'item' : 'items'} available
              </p>
            </div>
            <AddItemDialog onAddItem={addItem} />
          </div>
          
          <ItemGrid items={items} />
        </div>
      </section>

      {/* Google Form Section */}
      <GoogleFormEmbed />

      {/* Footer */}
      <footer className="bg-marketplace-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Your Marketplace</h3>
              <p className="opacity-90">
                The perfect platform to sell your items and connect with customers through data collection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2 opacity-90">
                <li>• Item listing & management</li>
                <li>• Google Form integration</li>
                <li>• Responsive design</li>
                <li>• Secure platform</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Started</h4>
              <p className="opacity-90 mb-4">
                Start selling your items today with our easy-to-use platform.
              </p>
              <div className="flex items-center gap-1 text-sm opacity-75">
                <Star className="w-4 h-4 fill-current" />
                <span>Built with modern web technologies</span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>&copy; 2024 Your Marketplace. Built for selling success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;