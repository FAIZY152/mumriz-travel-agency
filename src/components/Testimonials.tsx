
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Ahmed Al-Hassan",
    location: "Riyadh, Saudi Arabia",
    text: "Excellent service! They processed my work visa in just 3 days. Very professional and helpful throughout the process.",
    rating: 5,
    type: "Work Visa"
  },
  {
    name: "Fatima Khan",
    location: "Peshawar, Pakistan",
    text: "Made my Umrah journey possible with their quick visa processing. The team was very supportive and guided me at every step.",
    rating: 5,
    type: "Umrah Visa"
  },
  {
    name: "Mohammad Ali",
    location: "Karachi, Pakistan",
    text: "Reliable and trustworthy agency. They helped me get my family visa without any hassles. Highly recommended!",
    rating: 5,
    type: "Family Visa"
  },
  {
    name: "Sarah Abdullah",
    location: "Lahore, Pakistan",
    text: "Professional service with competitive pricing. They made the visa application process very smooth and stress-free.",
    rating: 5,
    type: "Visit Visa"
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by thousands of satisfied customers from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {testimonial.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
