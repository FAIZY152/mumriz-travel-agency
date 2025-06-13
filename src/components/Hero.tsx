import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

const phoneNumber = "+923443443047";
export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center text-white">
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Mumriz & Brothers
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-500 mx-auto mb-4"></div>
            <p className="text-xl md:text-2xl font-light text-blue-100">
              Licensed Travel Agency
            </p>
          </div>

          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Your Trusted Partner for Saudi Arabian Visas
            </h2>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
              Fast processing • Government approved • Expert guidance •
              Multilingual support
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-semibold">Work Visa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-semibold">Umrah & Hajj</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-semibold">Visit Visa</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-sm font-semibold">Business Visa</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 text-lg group">
              Get Your Visa Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex gap-3">
              <Button
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                variant="outline"
                size="lg"
                className="border-white/30 text-black hover:bg-blue-300 hover:text-blue-900 px-6 hover:bg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>

              <Button
                onClick={() =>
                  (window.location.href = `https://wa.me/${phoneNumber}`)
                }
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-green-600 border-green-600 px-6">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-8 text-sm text-blue-200">
            <p>🌐 Available in English • اردو • العربية</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
