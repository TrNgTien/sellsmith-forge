import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, FileText } from "lucide-react";

export function GoogleFormEmbed() {
  const [formUrl, setFormUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");
  const { toast } = useToast();

  const convertToEmbedUrl = (url: string) => {
    return url;
  };

  const handleEmbedForm = () => {
    if (!formUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a Google Form URL to embed.",
        variant: "destructive",
      });
      return;
    }

    const convertedUrl = convertToEmbedUrl(formUrl);
    setEmbedUrl(convertedUrl);
    
    toast({
      title: "Form Embedded!",
      description: "Your Google Form has been successfully embedded.",
    });
  };

  const clearEmbed = () => {
    setEmbedUrl("");
    setFormUrl("");
    toast({
      title: "Form Removed",
      description: "The embedded form has been cleared.",
    });
  };

  return (
    <section className="py-16 bg-marketplace-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-marketplace-primary mb-4">
            Data Collection Form
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Embed your Google Form to collect additional data from customers, feedback, or any custom information you need.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-marketplace-primary">
                <FileText className="w-5 h-5" />
                Embed Google Form
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="form-url">Google Form URL</Label>
                <div className="flex gap-2">
                  <Input
                    id="form-url"
                    type="url"
                    value={formUrl}
                    onChange={(e) => setFormUrl(e.target.value)}
                    placeholder="https://docs.google.com/forms/d/..."
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleEmbedForm}
                    className="bg-marketplace-primary hover:bg-marketplace-primary-light"
                  >
                    Embed Form
                  </Button>
                  {embedUrl && (
                    <Button variant="outline" onClick={clearEmbed}>
                      Clear
                    </Button>
                  )}
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">How to get your Google Form URL:</p>
                <ol className="list-decimal list-inside space-y-1 ml-4">
                  <li>Open your Google Form</li>
                  <li>Click the "Send" button</li>
                  <li>Click the link icon (🔗)</li>
                  <li>Copy the URL and paste it above</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {embedUrl && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-marketplace-primary">Embedded Form</span>
                  <a
                    href={formUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-marketplace-primary hover:text-marketplace-primary-light"
                  >
                    Open in new tab
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full">
                  <iframe
                    src={embedUrl}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="rounded-lg border border-border"
                  >
                    Loading form...
                  </iframe>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}