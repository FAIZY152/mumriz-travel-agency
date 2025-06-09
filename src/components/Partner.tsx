
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plane } from "lucide-react";

export const Partner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-200">
            Our Trusted Partner
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Alsudais Travel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with us for all your air ticket needs. From international flights to domestic travel, 
            we ensure the best rates and seamless booking experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-3xl font-bold mb-4 text-foreground">International & Domestic Air Tickets</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Through our partnership with Alsudais Travel, we provide comprehensive flight booking services 
                with competitive rates and excellent customer service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <Plane className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold mb-2">International Flights</h4>
                <p className="text-sm text-muted-foreground">Worldwide destinations with major airlines</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <Plane className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold mb-2">Domestic Flights</h4>
                <p className="text-sm text-muted-foreground">All Saudi Arabian domestic routes</p>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white">
              Book Flight Tickets
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3" 
                alt="Airplane flying over mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
