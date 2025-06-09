
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Your Visa Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact us through any of these channels for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Inquiry Form</CardTitle>
              <p className="text-muted-foreground">Send us your details and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <Label htmlFor="visaType">Visa Type</Label>
                <select id="visaType" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select visa type</option>
                  <option value="work">Work Visa</option>
                  <option value="visit">Visit Visa</option>
                  <option value="umrah">Umrah/Hajj Visa</option>
                  <option value="business">Business Visa</option>
                  <option value="family">Family Visa</option>
                  <option value="student">Student Visa</option>
                </select>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                Submit Inquiry
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">WhatsApp</h3>
                    <p className="text-muted-foreground">Instant support available</p>
                  </div>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Support</h3>
                    <p className="text-muted-foreground">+966 XX XXX XXXX</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span>info@mumrizbrothers.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-foreground">Office Hours</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Friday: 2:00 PM - 6:00 PM</p>
                <p>Saturday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
