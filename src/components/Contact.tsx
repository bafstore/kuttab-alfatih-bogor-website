import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Facebook, Instagram, Globe } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      value: "082298474800",
      subtitle: "Hubungi kami untuk informasi lebih lanjut",
      action: "tel:082298474800"
    },
    {
      icon: Mail,
      title: "Email",
      value: "kafbogor@gmail.com",
      subtitle: "Kirim pertanyaan via email",
      action: "mailto:kafbogor@gmail.com"
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.kuttabalfatih.com",
      subtitle: "Kunjungi website resmi kami",
      action: "https://www.kuttabalfatih.com"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      value: "Senin - Kamis: 07.30 - 14.00",
      subtitle: "Jumat: 07.30 - 10.30",
      action: null
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "Kuttab Al-Fatih Bogor",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "Kuttab Al-Fatih Bogor",
      color: "bg-pink-600 hover:bg-pink-700"
    }
  ];

  const locations = [
    {
      title: "Kampus Utama",
      address: "Ruko Bumi Kencana Permai, Jl. Perumahan Bumi Kencana Permai RT 01/RW 10, Kelurahan Kencana, Kecamatan Tanah Sereal, Kota Bogor",
      isMain: true
    },
    {
      title: "Kampus Cabang",
      address: "Jl. Anggrek Raya KP. Cibeleuleut RT 01 RW 06 Kelurahan Cibuhul, Kecamatan Bogor Utara, Kota Bogor",
      isMain: false
    }
  ];

  const faqItems = [
    {
      question: "Bagaimana cara mendaftar?",
      answer: "Hubungi kami melalui telepon atau datang langsung ke kampus untuk informasi pendaftaran lengkap."
    },
    {
      question: "Apakah ada tes masuk?",
      answer: "Ada tes sederhana untuk mengetahui tingkat kemampuan anak dan penempatan kelas yang tepat."
    },
    {
      question: "Berapa biaya pendidikan?",
      answer: "Untuk informasi biaya terkini, silakan hubungi kami langsung via telepon atau kunjungi kampus."
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Hubungi Kami
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-islamic-green mb-6">
            Mari Bergabung Bersama Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Siap untuk memberikan pendidikan terbaik bagi putra-putri Anda? 
            Hubungi kami untuk konsultasi dan informasi lebih lanjut.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-islamic-green flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Informasi Kontak
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="p-4 bg-islamic-cream/30 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-islamic-green-light rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-islamic-green" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-islamic-green">{info.title}</h4>
                          <p className="text-sm font-medium text-foreground">{info.value}</p>
                          <p className="text-xs text-muted-foreground mt-1">{info.subtitle}</p>
                          {info.action && (
                            <Button variant="link" className="p-0 h-auto mt-2 text-islamic-blue" asChild>
                              <a href={info.action}>Hubungi Sekarang</a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-islamic-green">Media Sosial</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {socialMedia.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-islamic-cream/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 ${social.color} rounded-full flex items-center justify-center transition-colors duration-300`}>
                          <Icon className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-islamic-green">{social.name}</p>
                          <p className="text-xs text-muted-foreground">{social.handle}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Ikuti
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-islamic-green flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </CardTitle>
                <p className="text-muted-foreground">
                  Isi formulir di bawah ini dan kami akan segera menghubungi Anda.
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-islamic-green mb-2 block">
                        Nama Lengkap *
                      </label>
                      <Input placeholder="Masukkan nama lengkap" className="border-islamic-green/30 focus:border-islamic-green" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-islamic-green mb-2 block">
                        Nomor Telepon *
                      </label>
                      <Input placeholder="Masukkan nomor telepon" className="border-islamic-green/30 focus:border-islamic-green" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-islamic-green mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="Masukkan alamat email" className="border-islamic-green/30 focus:border-islamic-green" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-islamic-green mb-2 block">
                      Subjek
                    </label>
                    <select className="w-full p-3 border border-islamic-green/30 rounded-md focus:border-islamic-green focus:outline-none">
                      <option value="">Pilih subjek</option>
                      <option value="pendaftaran">Informasi Pendaftaran</option>
                      <option value="biaya">Informasi Biaya</option>
                      <option value="kurikulum">Informasi Kurikulum</option>
                      <option value="fasilitas">Informasi Fasilitas</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-islamic-green mb-2 block">
                      Pesan *
                    </label>
                    <Textarea 
                      placeholder="Tulis pesan Anda di sini..."
                      className="min-h-32 border-islamic-green/30 focus:border-islamic-green"
                    />
                  </div>

                  <Button variant="islamic" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Locations */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {locations.map((location, index) => (
                <Card key={index} className="shadow-soft">
                  <CardHeader>
                    <CardTitle className="text-islamic-green flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-2" />
                        {location.title}
                      </div>
                      {location.isMain && (
                        <Badge variant="default" className="bg-islamic-green">
                          Utama
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {location.address}
                    </p>
                    <Button variant="outline" className="w-full border-islamic-green text-islamic-green hover:bg-islamic-green hover:text-white">
                      <MapPin className="w-4 h-4 mr-2" />
                      Lihat di Maps
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* FAQ */}
            <Card className="mt-8 shadow-soft">
              <CardHeader>
                <CardTitle className="text-islamic-green">Pertanyaan Umum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqItems.map((faq, index) => (
                    <div key={index} className="p-4 bg-islamic-cream/30 rounded-lg">
                      <h4 className="font-semibold text-islamic-green mb-2">{faq.question}</h4>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;