
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, Users, Clock } from "lucide-react";

const achievements = [
  {
    icon: Shield,
    title: "Government Approved",
    description: "Licensed and authorized by Saudi authorities",
    bgColor: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    icon: Users,
    title: "10,000+ Happy Customers",
    description: "Trusted by thousands of satisfied clients",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround times for all visa types",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Professional guidance every step of the way",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600"
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted Travel Agency
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mumriz & Brothers is a licensed travel agency specializing in Saudi Arabian visas. 
            With years of experience and government approval, we are your trusted partner for all travel needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">Licensed & Authorized</h4>
                  <p className="text-muted-foreground">Officially licensed by Saudi authorities with all necessary permits and certifications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">Expert Guidance</h4>
                  <p className="text-muted-foreground">Our experienced team provides professional guidance throughout the visa application process.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold mb-2">Multilingual Support</h4>
                  <p className="text-muted-foreground">Available in English, Urdu, and Arabic to serve our diverse clientele.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-200 to-indigo-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?ixlib=rb-4.0.3" 
                alt="Saudi Arabian landscape"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h4 className="font-bold mb-2 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
