import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building, BookOpen, Users, MapPin, Phone, Clock, Star, Award } from "lucide-react";
import calligraphyImage from "@/assets/calligraphy.jpg";

const Facilities = () => {
  const mainFacilities = [
    {
      icon: Building,
      title: "Ruang Belajar",
      count: "19 Lokal",
      description: "Ruang kelas yang nyaman dan kondusif untuk pembelajaran dengan kapasitas optimal"
    },
    {
      icon: Users,
      title: "Ruang Kantor",
      count: "2 Lokal",
      description: "Ruang administrasi dan manajemen untuk pelayanan terbaik kepada siswa dan wali murid"
    },
    {
      icon: BookOpen,
      title: "Perpustakaan",
      count: "1 Lokal",
      description: "Perpustakaan dengan koleksi buku-buku Islam, umum, dan referensi pembelajaran"
    },
    {
      icon: Star,
      title: "Papan Tulis",
      count: "19 Unit",
      description: "Fasilitas papan tulis modern di setiap ruang kelas untuk mendukung proses pembelajaran"
    }
  ];

  const locations = [
    {
      title: "Kampus Utama",
      address: "Ruko Bumi Kencana Permai, Jl. Perumahan Bumi Kencana Permai RT 01/RW 10, Kelurahan Kencana, Kecamatan Tanah Sereal, Kota Bogor",
      features: ["Lokasi Strategis", "Akses Mudah", "Lingkungan Kondusif", "Dekat Pusat Kota"],
      isMain: true
    },
    {
      title: "Kampus Cabang",
      address: "Jl. Anggrek Raya KP. Cibeleuleut RT 01 RW 06 Kelurahan Cibuhul, Kecamatan Bogor Utara, Kota Bogor",
      features: ["Lokasi Strategis", "Lingkungan Asri", "Dekat Permukiman", "Akses Transportasi"],
      isMain: false
    }
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "Jadwal Fleksibel",
      description: "Waktu pembelajaran yang disesuaikan dengan kebutuhan siswa dan keluarga"
    },
    {
      icon: Users,
      title: "Kelas Kecil",
      description: "Rasio guru dan siswa yang ideal untuk pembelajaran yang lebih personal"
    },
    {
      icon: Award,
      title: "Tenaga Pendidik Berkualitas",
      description: "15+ tenaga pendidik berpengalaman dan berdedikasi tinggi"
    },
    {
      icon: Star,
      title: "Lingkungan Islami",
      description: "Suasana pembelajaran yang Islami dan mendukung pembentukan karakter"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gradient-to-br from-islamic-cream to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Fasilitas & Lokasi
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">
            Fasilitas Pendukung Pembelajaran
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kami menyediakan fasilitas lengkap dan lokasi strategis untuk mendukung 
            proses pembelajaran yang optimal dan nyaman.
          </p>
        </div>

        {/* Main Facilities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainFacilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <Card key={index} className="text-center p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-islamic-green-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-islamic-green transition-colors duration-300">
                    <Icon className="w-8 h-8 text-islamic-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-islamic-green mb-2">{facility.count}</h3>
                  <h4 className="font-semibold text-islamic-green mb-3">{facility.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Campus Locations */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-islamic-green text-center mb-12">
            Lokasi Kampus
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className={`shadow-soft ${location.isMain ? 'ring-2 ring-islamic-green/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-islamic-green flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      {location.title}
                    </CardTitle>
                    {location.isMain && (
                      <Badge variant="default" className="bg-islamic-green">
                        Utama
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {location.address}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-islamic-gold mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6 border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                    <MapPin className="w-4 h-4 mr-2" />
                    Lihat Lokasi
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-islamic-green mb-8">
              Keunggulan Fasilitas Kami
            </h3>
            <div className="space-y-6">
              {additionalFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-islamic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-islamic-green" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-islamic-green mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <Button variant="islamic" className="mt-8">
              <Phone className="w-4 h-4 mr-2" />
              Jadwalkan Kunjungan
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={calligraphyImage} 
                alt="Kaligrafi Islamic di Kuttab Al-Fatih"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-islamic-green/80 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h4 className="text-xl font-bold mb-2">Lingkungan Belajar Islami</h4>
              <p className="text-sm opacity-90">
                Suasana yang kondusif dengan nuansa Islami untuk mendukung pembelajaran optimal
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;