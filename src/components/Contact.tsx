import React, { forwardRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    visaType: "",
    userWhatsApp: "",
  });

  const adminWhatsApp = "923443443047"; // Admin number without '+' (e.g., 92 for Pakistan)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, phone, visaType, userWhatsApp } =
      formData;

    const message = `*New Visa Inquiry*\n\n👤 Name: ${firstName} ${lastName}\n📧 Email: ${email}\n📞 Phone: ${phone}\n🛂 Visa Type: ${visaType}\n💬 User WhatsApp: ${userWhatsApp}`;

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div id="contactSection" className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            Contact Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get Your Visa Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey? Contact us through any of these
            channels for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Quick Inquiry Form</CardTitle>
              <p className="text-muted-foreground">
                Send us your details and we’ll get back to you via WhatsApp
                instantly.
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="visaType">Visa Type</Label>
                <select
                  id="visaType"
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select visa type</option>
                  <option value="Work">Work Visa</option>
                  <option value="Visit">Visit Visa</option>
                  <option value="Umrah/Hajj">Umrah/Hajj Visa</option>
                  <option value="Business">Business Visa</option>
                  <option value="Family">Family Visa</option>
                  <option value="Student">Student Visa</option>
                </select>
              </div>
              <div>
                <Label htmlFor="userWhatsApp">Your WhatsApp Number</Label>
                <Input
                  id="userWhatsApp"
                  placeholder="e.g. 923001234567"
                  onChange={handleChange}
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                onClick={handleSubmit}>
                Send via WhatsApp
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
                    <p className="text-muted-foreground">
                      Instant support available
                    </p>
                  </div>
                </div>
                <Button
                  onClick={() =>
                    (window.location.href = `https://wa.me/${adminWhatsApp}`)
                  }
                  className="w-full bg-green-600 hover:bg-green-700">
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
                    <p className="text-muted-foreground">+92 344 3443047</p>
                  </div>
                </div>
                <Button
                  onClick={() =>
                    (window.location.href = `tel:${adminWhatsApp}`)
                  }
                  variant="outline"
                  className="w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <span>Mumriz_999@yahoo.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                    <span>Peshawar, Pakistan</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg p-6">
              <h3 className="font-semibold mb-2 text-foreground">
                Office Hours
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Mon - Friday: 9:00 AM - 6:00 PM</p>
                <p>Friday: 2:00 PM - 6:00 PM</p>
                <p>Sunday</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
