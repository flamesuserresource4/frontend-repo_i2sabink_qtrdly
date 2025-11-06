import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-blue-900 text-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold text-lg">
              Badan Pendapatan Daerah Kabupaten Agam
            </h3>
            <p className="mt-3 text-blue-100/80">
              Professional • Accountable • Innovative
            </p>
          </div>
          <div>
            <h4 className="font-medium text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" />Jl. Sudirman No. 1, Agam, Sumatera Barat</li>
              <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5" />(+62) 75xx-xxxx</li>
              <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5" />info@bapenda.agam.go.id</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white">Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#values" className="hover:underline">Values</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-blue-200/80 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Bapenda Agam. All rights reserved.</p>
          <p>Blue + Gold palette • Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
