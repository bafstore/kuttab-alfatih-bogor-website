import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, Target, Heart, Award, Globe } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Pendidikan Agama dan Budi Pekerti",
      description: "Program komprehensif yang mencakup aqidah, fiqh, akhlak, dan sejarah Islam",
      hours: "3-8 JP/Pekan",
      level: "Tingkat I & II",
      icon: Heart,
      color: "bg-islamic-green",
      features: ["Aqidah dan Tauhid", "Fiqh Ibadah", "Akhlak Islami", "Sejarah Islam"]
    },
    {
      title: "Program Tahfidz Al-Qur'an",
      description: "Menghafal Al-Qur'an dengan metode yang terbukti efektif dan menyenangkan",
      hours: "3-4 JP/Pekan",
      level: "Tingkat I & II",
      icon: BookOpen,
      color: "bg-islamic-blue",
      features: ["Metode Tahfidz Modern", "Tilawah yang Benar", "Tajwid", "Hafalan Berkualitas"]
    },
    {
      title: "Bahasa Peradaban",
      description: "Penguasaan Bahasa Arab dan Bahasa Inggris sebagai bahasa internasional",
      hours: "Terintegrasi",
      level: "Semua Tingkat",
      icon: Globe,
      color: "bg-islamic-gold",
      features: ["Bahasa Arab", "Bahasa Inggris", "Conversation", "Grammar"]
    },
    {
      title: "Keterampilan Hidup (Life Skills)",
      description: "Membekali siswa dengan keterampilan praktis untuk kehidupan sehari-hari",
      hours: "2-5 JP/Pekan",
      level: "Tingkat I & II",
      icon: Target,
      color: "bg-accent",
      features: ["Keterampilan Praktis", "Problem Solving", "Leadership", "Entrepreneurship"]
    },
    {
      title: "Literasi dan Numerasi",
      description: "Pengembangan kemampuan membaca, menulis, dan berhitung yang solid",
      hours: "4 JP/Pekan",
      level: "Semua Tingkat",
      icon: Star,
      color: "bg-secondary",
      features: ["Literasi Bahasa", "Numerasi", "Critical Thinking", "Analisis"]
    },
    {
      title: "Pendidikan Karakter",
      description: "Pembentukan karakter mulia melalui keteladanan dan pembiasaan",
      hours: "Terintegrasi",
      level: "Semua Tingkat",
      icon: Award,
      color: "bg-primary",
      features: ["Akhlak Mulia", "Kedisiplinan", "Tanggung Jawab", "Kerjasama"]
    }
  ];

  const subjects = [
    { name: "Pendidikan Agama dan Budi Pekerti", tingkat1: 3, tingkat2: 8, kkm: 6 },
    { name: "Pendidikan Pancasila dan Kewarganegaraan", tingkat1: 2, tingkat2: 3, kkm: 6 },
    { name: "Bahasa Indonesia", tingkat1: 3, tingkat2: 4, kkm: 6 },
    { name: "Matematika", tingkat1: 2, tingkat2: 2, kkm: 6 },
    { name: "IPA", tingkat1: 2, tingkat2: 2, kkm: 6 },
    { name: "IPS", tingkat1: 2, tingkat2: 2, kkm: 6 },
    { name: "Membaca Al-Quran", tingkat1: 2, tingkat2: 3, kkm: 6 },
    { name: "Tahfidz", tingkat1: 3, tingkat2: 4, kkm: 6 },
    { name: "Menulis Indah (Kaligrafi)", tingkat1: 4, tingkat2: 2, kkm: 7 },
    { name: "Olahraga/Beladiri Dasar", tingkat1: 2, tingkat2: 2, kkm: "-" }
  ];

  const schedule = [
    { time: "07.30 – 08.00", session: "Pembelajaran 1" },
    { time: "08.00 – 08.30", session: "Pembelajaran 2" },
    { time: "08.30 – 09.00", session: "Pembelajaran 3" },
    { time: "09.00 – 09.30", session: "Pembelajaran 4" },
    { time: "09.30 – 10.00", session: "Rehat" },
    { time: "10.00 – 10.30", session: "Pembelajaran 5" },
    { time: "10.30 – 11.00", session: "Pembelajaran 6" },
    { time: "11.00 – 11.30", session: "Pembelajaran 7" },
    { time: "11.30 – 12.00", session: "Ishoma" }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Program Pendidikan
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">
            Program Unggulan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kurikulum terintegrasi yang menggabungkan pendidikan agama dan umum 
            untuk menghasilkan lulusan yang gemilang di usia belia.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 shadow-soft">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${program.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-islamic-green text-lg">
                    {program.title}
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {program.hours}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Users className="w-3 h-3 mr-1" />
                      {program.level}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Star className="w-4 h-4 text-islamic-gold mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Curriculum Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-islamic-green text-center mb-12">
            Struktur Kurikulum dan Alokasi Waktu
          </h3>
          <Card className="overflow-hidden shadow-soft">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-islamic-green text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Mata Pelajaran</th>
                      <th className="px-6 py-4 text-center">Tingkat I</th>
                      <th className="px-6 py-4 text-center">Tingkat II</th>
                      <th className="px-6 py-4 text-center">KKM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-islamic-cream/30" : "bg-white"}>
                        <td className="px-6 py-4 font-medium text-islamic-green">{subject.name}</td>
                        <td className="px-6 py-4 text-center">{subject.tingkat1} JP</td>
                        <td className="px-6 py-4 text-center">{subject.tingkat2} JP</td>
                        <td className="px-6 py-4 text-center font-semibold">{subject.kkm}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Schedule */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-islamic-green flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Jadwal Pembelajaran
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schedule.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-islamic-cream/30 rounded-lg">
                    <span className="font-medium text-islamic-green">{item.time}</span>
                    <span className="text-muted-foreground">{item.session}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-islamic-green-light rounded-lg">
                <p className="text-sm text-islamic-green">
                  <strong>Catatan:</strong> Tingkat II memiliki tambahan 2 sesi pembelajaran hingga pukul 14.00 WIB
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-islamic-green flex items-center">
                <Award className="w-5 h-5 mr-2" />
                Profil Lulusan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "Beriman dan bertakwa kepada Allah SWT",
                  "Taat beribadah dan berakhlak mulia",
                  "Cinta tanah air dan NKRI",
                  "Mampu membaca Al-Quran dengan baik",
                  "Memahami kisah Nabi Muhammad SAW",
                  "Cakap, berilmu, kreatif, dan mandiri",
                  "Sehat fisik dan mental",
                  "Mencintai kebersihan dan lingkungan",
                  "Mampu berkomunikasi dengan baik",
                  "Berkontribusi sebagai warga dunia"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Star className="w-4 h-4 text-islamic-gold mt-1 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="islamic" className="w-full mt-6">
                Konsultasi Program
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;