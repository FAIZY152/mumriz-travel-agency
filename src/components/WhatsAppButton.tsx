import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppButton = () => {
  const adminWhatsApp = "923443443047"; // Admin number without '+' (e.g., 92 for Pakistan)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() =>
          (window.location.href = `https://wa.me/${adminWhatsApp}`)
        }
        className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
        size="icon">
        <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  );
};
