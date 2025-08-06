import { Button } from "@/components/ui/button";
import { Star, BookOpen, Heart, Award } from "lucide-react";
import heroImage from "@/assets/hero-mosque.jpg";

const Hero = () => {
  const highlights = [
    { icon: BookOpen, label: "Tahfidz Al-Qur'an", value: "Program Unggulan" },
    { icon: Star, label: "Akreditasi", value: "Terakreditasi" },
    { icon: Heart, label: "Akhlak Mulia", value: "Pembentukan Karakter" },
    { icon: Award, label: "Prestasi", value: "Gemilang di Usia Belia" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-islamic-green/90 via-islamic-green/70 to-islamic-blue/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                🌟 Pusat Kegiatan Belajar Masyarakat (PKBM)
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Kuttab Al-Fatih</span>
              <span className="block text-islamic-gold">Bogor</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 font-medium">
              Gemilang di Usia Belia
            </p>
            
            <p className="text-lg mb-10 leading-relaxed opacity-90">
              Melahirkan generasi gemilang melalui pendidikan Islam yang menggabungkan 
              tahfidz Al-Qur'an, pembentukan akhlak mulia, dan pendidikan umum berkualitas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Daftar Sekarang
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-islamic-green">
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <Icon className="w-8 h-8 mx-auto mb-2 text-islamic-gold" />
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs opacity-80">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:flex justify-center hidden">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-strong max-w-md">
              <h3 className="text-2xl font-bold text-islamic-green mb-6 text-center">
                Mengapa Memilih Kami?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-islamic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-islamic-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-islamic-green">Program Tahfidz</h4>
                    <p className="text-sm text-muted-foreground">Menghafal Al-Qur'an dengan metode yang terbukti efektif</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-islamic-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-islamic-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-islamic-green">Pembentukan Akhlak</h4>
                    <p className="text-sm text-muted-foreground">Menanamkan nilai-nilai Islam dalam kehidupan sehari-hari</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-islamic-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-islamic-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-islamic-green">Kurikulum Terintegrasi</h4>
                    <p className="text-sm text-muted-foreground">Menggabungkan pendidikan agama dan umum secara seimbang</p>
                  </div>
                </div>
              </div>

              <Button variant="islamic" className="w-full mt-8">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-islamic-gold/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-islamic-blue/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;