import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  Heart,
  GraduationCap,
  Building,
  Stethoscope,
} from "lucide-react";

const visaServices = [
  {
    icon: Briefcase,
    title: "Work Visa",
    description: "Professional work permits for all Saudi sectors",
    features: [
      "Multiple entry",
      "1-2 year validity",
      "Family sponsorship available",
    ],
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Umrah & Hajj Visas",
    description: "Sacred journey permits with complete guidance",
    features: ["Group packages", "Individual permits", "Religious guidance"],
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: Users,
    title: "Visit Visa",
    description: "Tourist and family visit permits",
    features: ["30-90 days", "Multiple entry", "Tourist attractions access"],
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Building,
    title: "Business Visa",
    description: "Commercial and investment permits",
    features: ["Meeting permits", "Investment visas", "Trade licenses"],
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Users,
    title: "Family Visa",
    description: "Family reunion and dependent permits",
    features: ["Spouse visas", "Children permits", "Parent visas"],
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description: "Educational permits for all levels",
    features: ["University permits", "Research visas", "Training programs"],
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Saudi Arabian Visa Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide all types of Saudi Arabian visas with fast processing and
            expert guidance. Licensed and approved by Saudi authorities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {visaServices.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/30">
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full ${service.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>
                <CardTitle className="text-xl font-bold">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-10 text-foreground">
            Simple 4-Step Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Document Review",
                desc: "Submit your documents for verification",
              },
              {
                step: "2",
                title: "Application",
                desc: "We prepare and submit your visa application",
              },
              {
                step: "3",
                title: "Processing",
                desc: "Track your application status in real-time",
              },
              {
                step: "4",
                title: "Delivery",
                desc: "Receive your approved visa quickly",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {item.step}
                </div>
                <h4 className="font-semibold mb-2 text-foreground">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
