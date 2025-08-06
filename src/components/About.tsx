import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target, Heart, Star, Award, User, UserCheck } from "lucide-react";
import studentsImage from "@/assets/students-learning.jpg";
import islamicPattern from "@/assets/islamic-pattern.jpg";

const About = () => {
  const visionMissions = [
    {
      icon: Target,
      title: "Pengajaran Aqidah dan Tauhid",
      description: "Menanamkan fondasi keimanan yang kuat melalui pengajaran aqidah dan tauhid yang benar."
    },
    {
      icon: BookOpen,
      title: "Program Tahfidz Al-Qur'an",
      description: "Menghafal Al-Qur'an dengan metode yang terbukti efektif dan menyenangkan."
    },
    {
      icon: Star,
      title: "Menggali Kemukjizatan Al-Qur'an",
      description: "Meneliti dan membuktikan kemukjizatan Al-Qur'an melalui berbagai disiplin ilmu."
    },
    {
      icon: Users,
      title: "Bahasa Peradaban",
      description: "Menguasai Bahasa Arab dan Bahasa Inggris sebagai bahasa peradaban dunia."
    },
    {
      icon: Award,
      title: "Keterampilan Hidup",
      description: "Membekali siswa dengan life skills yang dibutuhkan untuk masa depan."
    }
  ];

  const achievements = [
    { number: "19", label: "Ruang Belajar", icon: BookOpen },
    { number: "2", label: "Lokasi Kampus", icon: Users },
    { number: "100+", label: "Siswa Aktif", icon: Star },
    { number: "15+", label: "Tenaga Pendidik", icon: Award }
  ];

  const yayasanStructure = [
    { position: "Pembina", name: "Elvin Sasmita E., S. Kom.", icon: UserCheck },
    { position: "Pengawas", name: "Iwan Setiawan, Lc.", icon: User },
    { position: "Ketua", name: "Sahril Mubarak", icon: Users },
    { position: "Sekretaris", name: "Ahmad Arief Rosjidi", icon: User },
    { position: "Bendahara", name: "Muhammad Ilham Sembodo", icon: User },
    { position: "Ketua PKBM Kuttab", name: "Ikhsan Sahid Sanjani, S.E.I.", icon: Award }
  ];

  const pkbmStructure = [
    { position: "Kepala PKBM Kuttab", name: "Ikhsan Sahid Sanjani, S.E.I.", icon: Award },
    { position: "Koordinator Kelas Tinggi", name: "Alaudin Naufal As Siraj, S.E.I", icon: Users },
    { position: "Koordinator Kelas Rendah", name: "Raysman Hakim", icon: Users },
    { position: "Koordinator Keuangan dan Tata Usaha", name: "Krisnha Octavianus, S.Kom.", icon: User }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-islamic-cream to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">
            Pusat Kegiatan Belajar Masyarakat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kuttab Al-Fatih Bogor hadir sebagai wadah pendidikan Islam yang menggabungkan 
            pendidikan agama dan umum untuk melahirkan generasi gemilang di usia belia.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={studentsImage} 
                alt="Siswa-siswi Kuttab Al-Fatih sedang belajar"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-islamic-gold rounded-full flex items-center justify-center shadow-medium">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            {/* Pattern overlay */}
            <div 
              className="absolute -bottom-8 -left-8 w-32 h-32 opacity-20 rounded-full"
              style={{ backgroundImage: `url(${islamicPattern})`, backgroundSize: 'cover' }}
            ></div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-bold text-islamic-green mb-6">
              Visi: Melahirkan Generasi Gemilang di Usia Belia
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Pendirian PKBM Kuttab Al-Fatih Bogor berawal dari komunitas pengajian yang menyadari 
              kebutuhan akan lembaga pendidikan yang lebih mengedepankan pendidikan agama. Dengan 
              lokasi strategis di Kelurahan Kencana, Kecamatan Tanah Sereal, Kota Bogor, kami 
              berkomitmen menghadirkan pendidikan berkualitas.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="text-center p-4 bg-white shadow-soft">
                    <CardContent className="p-0">
                      <Icon className="w-8 h-8 text-islamic-blue mx-auto mb-2" />
                      <h4 className="text-2xl font-bold text-islamic-green">{item.number}</h4>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Organizational Structure */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-islamic-green text-center mb-12">
            Struktur Organisasi
          </h3>
          
          {/* Yayasan Structure */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-islamic-green mb-6 text-center">
              Yayasan Taawun Wakaf Indonesia
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {yayasanStructure.map((member, index) => {
                const Icon = member.icon;
                return (
                  <Card key={index} className="p-4 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <Icon className="w-8 h-8 text-islamic-blue mx-auto mb-2" />
                      <h5 className="font-semibold text-islamic-green mb-1">{member.position}</h5>
                      <p className="text-sm text-muted-foreground">{member.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* PKBM Structure */}
          <div className="mb-12">
            <h4 className="text-xl font-semibold text-islamic-green mb-6 text-center">
              PKBM Kuttab Al-Fatih Bogor
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {pkbmStructure.map((member, index) => {
                const Icon = member.icon;
                return (
                  <Card key={index} className="p-4 bg-white shadow-soft hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-0 text-center">
                      <Icon className="w-8 h-8 text-islamic-blue mx-auto mb-2" />
                      <h5 className="font-semibold text-islamic-green mb-1">{member.position}</h5>
                      <p className="text-sm text-muted-foreground">{member.name}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mission Cards */}
        <div>
          <h3 className="text-2xl font-bold text-islamic-green text-center mb-12">
            Misi Kami
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionMissions.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 bg-white shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-islamic-green-light rounded-full flex items-center justify-center mb-4 group-hover:bg-islamic-green transition-colors duration-300">
                      <Icon className="w-6 h-6 text-islamic-green group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h4 className="text-lg font-semibold text-islamic-green mb-3">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;