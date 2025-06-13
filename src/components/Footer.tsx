import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mumriz & Brothers</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Licensed travel agency specializing in Saudi Arabian visas. Your
              trusted partner for fast, reliable visa processing with expert
              guidance.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors">
                <span className="text-xs font-bold">W</span>
              </div>
              <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center cursor-pointer hover:bg-blue-500 transition-colors">
                <span className="text-xs font-bold">@</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Visa Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-white cursor-pointer transition-colors">
                Work Visa
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Visit Visa
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Umrah & Hajj
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Business Visa
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Family Visa
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Student Visa
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>+923443443047</li>
              <li>Mumriz_999@yahoo.com</li>
              <li>Peshawar, Pakistan</li>
              <li className="pt-2">
                <span className="text-sm">🌐 English • اردو • العربية</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; 2024 Mumriz & Brothers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Licensed Travel Agency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
