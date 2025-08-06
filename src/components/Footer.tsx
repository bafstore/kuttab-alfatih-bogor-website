import { BookOpen, Phone, Mail, MapPin, Facebook, Instagram, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Fasilitas", href: "#facilities" },
    { name: "Kontak", href: "#contact" }
  ];

  const programs = [
    { name: "Tahfidz Al-Qur'an", href: "#programs" },
    { name: "Pendidikan Agama", href: "#programs" },
    { name: "Bahasa Arab", href: "#programs" },
    { name: "Bahasa Inggris", href: "#programs" },
    { name: "Life Skills", href: "#programs" }
  ];

  const contactInfo = [
    { icon: Phone, text: "082298474800", href: "tel:082298474800" },
    { icon: Mail, text: "kafbogor@gmail.com", href: "mailto:kafbogor@gmail.com" },
    { icon: Globe, text: "www.kuttabalfatih.com", href: "https://www.kuttabalfatih.com" }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", href: "#", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", href: "#", color: "hover:text-pink-600" }
  ];

  return (
    <footer className="bg-islamic-green text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-islamic-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kuttab Al-Fatih</h3>
                <p className="text-sm opacity-80">Gemilang di Usia Belia</p>
              </div>
            </div>
            
            <p className="text-sm opacity-90 leading-relaxed mb-6">
              Pusat Kegiatan Belajar Masyarakat yang mengedepankan pendidikan Islam 
              berkualitas untuk melahirkan generasi gemilang di usia belia.
            </p>

            <div className="flex space-x-4">
              {socialMedia.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white hover:scale-110`}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-islamic-gold transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Program Kami</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-islamic-gold transition-all duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a 
                    key={index}
                    href={contact.href}
                    className="flex items-start space-x-3 text-sm opacity-90 hover:opacity-100 hover:text-islamic-gold transition-all duration-300 group"
                  >
                    <Icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span>{contact.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Locations */}
            <div className="mt-6">
              <h5 className="font-medium mb-3 text-islamic-gold">Lokasi:</h5>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 text-xs opacity-90">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Kampus Utama: Ruko Bumi Kencana Permai, Tanah Sereal, Bogor</span>
                </div>
                <div className="flex items-start space-x-2 text-xs opacity-90">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>Kampus Cabang: Jl. Anggrek Raya, Bogor Utara</span>
                </div>
              </div>
            </div>

            <Button variant="gold" className="mt-6">
              Daftar Sekarang
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-90 text-center md:text-left">
              <p>&copy; 2024 Kuttab Al-Fatih Bogor. Semua hak dilindungi.</p>
              <p className="mt-1">
                Pusat Kegiatan Belajar Masyarakat (PKBM) terakreditasi
              </p>
            </div>
            
            <div className="flex items-center space-x-2 text-sm opacity-90">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-islamic-gold" />
              <span>untuk generasi gemilang</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;