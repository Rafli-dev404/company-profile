import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"
import { Input } from "@/Components/ui/input"
import { Textarea } from "@/Components/ui/textarea"
import { Label } from "@/Components/ui/label"
import { Phone, Mail, Building2, Users, Award } from "lucide-react"
import Navbar from "@/Components/Navbar"

import React from "react"
import LayoutMain from "../Layout/LayoutMain"

export default function Index() {
  return (
    <LayoutMain title="Contact Us">
       <div className="min-h-screen bg-gradient-to-br from-[#E45EFC] via-50% via-[#A5DBFB] to-[#387AFF]">
      {/* Company Description Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-16">
            <h1 className="text-5xl font-bold text-black mb-6">Contact Us</h1>
            <h2 className="text-2xl font-bold text-black/90 mb-4">Kami selalu siap membantu Anda</h2>
            <p className="text-xl text-black/90 max-w-4xl mx-left leading-relaxed">
             Apabila Anda membutuhkan informasi lebih lanjut, silahkan menghubungi kami melalui
             kontak yang disediakan sesuai kebutuhan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Visit Our office At</CardTitle>
                <CardDescription className="text-gray-600">PT MAKSI INTEGRASI TEKNOLOGI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center flex items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">Komplek Sanggar Hurip - Jl. Sanggar Kencana VIII No.3 RT. 001 RW. 003 kelurahan Jatisari, Kecamatan Buah Batu, Kota Bandung, Jawa Barat, 40286</h4>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl text-gray-800">Message Us</CardTitle>
                <CardDescription className="text-lg text-gray-600 pt-6">
                  <h4 className="font-semibold text-gray-800"> Email : admin@maksitech.id</h4>
                  <h4 className="font-semibold text-gray-800">telp : 0818 8284 2888</h4>
                  <h4 className="font-semibold text-gray-800">www.maksitech.com</h4>
                </CardDescription>
              </CardHeader>

            </Card>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Hubungi Kami</h2>
            <p className="text-gray-600 text-center mb-8">Siap membantu kebutuhan teknologi perusahaan Anda</p>

            <form className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Nama Perusahaan</Label>
                  <Input id="company-name" placeholder="PT. Contoh Perusahaan" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="full-name">Nama Lengkap</Label>
                  <Input id="full-name" placeholder="John Doe" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="whatsapp">Nomor WhatsApp</Label>
                  <Input id="whatsapp" placeholder="+62 812-3456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Lokasi</Label>
                  <Input id="location" placeholder="Jakarta, Indonesia" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="needs">Kebutuhan</Label>
                  <Input id="needs" placeholder="Pengembangan Aplikasi Web" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message">Pesan</Label>
                <Textarea
                  id="message"
                  placeholder="Ceritakan lebih detail tentang kebutuhan teknologi perusahaan Anda..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg">
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Lokasi Kantor</h2>
            <p className="text-gray-600 text-center mb-8">Kunjungi kantor pusat kami untuk konsultasi langsung</p>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Building2 className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Alamat Kantor</h4>
                    <p className="text-gray-600">
                      PT. Maksi Media Indonesia
                      <br />
                      Bandung, Jawa Barat
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-gray-600">0818 8284 2888</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Mail className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">admin@maksitech.id</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8977!2d107.6637574!3d-6.9355865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ddeffad67007%3A0xddd55dce7bb92a83!2sPT.%20Maksi%20Media%20Indonesia!5e0!3m2!1sen!2sid!4v1635123456789!5m2!1sen!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    </LayoutMain>
  )
}
