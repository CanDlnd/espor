E-Spor Organizasyon Web Sitesi - Ürün Gereksinim Dokümanı (PRD)
📋 Proje Özeti
Bu proje, Valorant ve CS2 turnuvalarına odaklanan ESL benzeri yeni bir e-spor organizasyonu için modern, yenilikçi ve kullanıcı dostu bir web sitesi oluşturmayı amaçlamaktadır. Platform, e-spor meraklılarının turnuvaları canlı takip edebileceği, geçmiş karşılaşmaları inceleyebileceği ve kullanıcı dostu bir arayüzle etkileşimde bulunabileceği kapsamlı bir deneyim sunacaktır.

🎯 Hedefler
# E-Spor Turnuva Platformu PRD

## Tamamlanan Özellikler

### Kullanıcı Yönetimi
- [x] Kullanıcı kaydı ve girişi
- [x] Şifre doğrulama ve güvenlik kontrolleri
- [x] Admin paneli ve yönetimi
- [x] Rol tabanlı yetkilendirme (admin/user)
- [x] Kullanıcı listesi görüntüleme ve silme

### Arayüz
- [x] Modern ve responsive tasarım
- [x] Kullanıcı dostu formlar
- [x] Hata mesajları ve bildirimler
- [x] Dinamik menü (kullanıcı rolüne göre)

## Gelecek Özellikler

### 1. Turnuva Yönetimi (Yakın Dönem)
- [ ] Turnuva oluşturma ve düzenleme
- [ ] Turnuva detay sayfası
- [ ] Turnuva kategorileri (oyun türü, platform)
- [ ] Turnuva takvimi ve programı
- [ ] Kayıt ve katılım yönetimi

### 2. Takım Yönetimi
- [ ] Takım oluşturma ve düzenleme
- [ ] Takım üyeleri yönetimi
- [ ] Takım profili ve istatistikleri
- [ ] Takım içi iletişim

### 3. Maç Yönetimi
- [ ] Maç programlama ve düzenleme
- [ ] Sonuç girişi ve doğrulama
- [ ] Maç istatistikleri
- [ ] Canlı skor takibi

### 4. İletişim ve Sosyal Özellikler
- [ ] Mesajlaşma sistemi
- [ ] Turnuva ve maç yorumları
- [ ] Bildirim sistemi
- [ ] Discord/Twitch entegrasyonu

### 5. İçerik Yönetimi
- [ ] Haberler ve duyurular
- [ ] Blog yazıları
- [ ] Medya galerisi
- [ ] Canlı yayın entegrasyonu

### 6. Ödül ve Sıralama Sistemi
- [ ] Puan sistemi
- [ ] Liderlik tablosu
- [ ] Başarı rozetleri
- [ ] Ödül dağıtım yönetimi

## Teknik Altyapı

### Mevcut Durum
- Node.js ve Express.js backend
- MongoDB veritabanı
- JWT tabanlı kimlik doğrulama
- Responsive frontend tasarım

### Geliştirilecek Alanlar
- WebSocket entegrasyonu (canlı skor ve bildirimler için)
- Redis önbelleği (performans optimizasyonu)
- Dosya yükleme ve depolama sistemi
- API dökümantasyonu
- Test otomasyonu

## Öncelik Sırası
1. Turnuva Yönetimi
2. Takım Yönetimi
3. Maç Yönetimi
4. İletişim Özellikleri
5. İçerik Yönetimi
6. Ödül Sistemi

## Sonraki Adımlar
1. Turnuva oluşturma ve yönetim sisteminin geliştirilmesi
2. Takım oluşturma ve yönetim sisteminin eklenmesi
3. Maç yönetim sisteminin kurulması
4. Temel iletişim özelliklerinin eklenmesi

🔹 Sayfa Yapısı ve Gereksinimler
1. Anasayfa
Özellikler:

Canlı oynanan turnuvanın skor tahtası
Takım logoları
"VS" etiketi
Güncel skor bilgisi
"LIVE" göstergesi
Daha önce oynanan turnuvaların görselleri ve kazanan takım bilgileri
En son 3-4 turnuvanın özet görünümü
Her turnuva için küçük bir resim, tarih ve kazanan takım bilgisi
Organizasyon hakkında kısa tanıtım yazısı
Misyon ve vizyon
Kısa tarihçe
Öne çıkan başarılar
Yaklaşan turnuva duyuruları
Kayıt tarihleri
Turnuva formatı
Ödül havuzu bilgisi
2. Turnuvalar Sayfası
Özellikler:

Aktif ve yaklaşan turnuvaların listesi
Turnuva adı
Tarihi
Oyun türü (Valorant/CS2)
Katılımcı sayısı
Ödül bilgisi
Turnuva filtreleme özellikleri
Oyun türüne göre (Valorant/CS2)
Duruma göre (Aktif/Yaklaşan/Tamamlanmış)
Tarihe göre
Turnuva kayıt butonları (aktif kayıtlar için)
3. Turnuva Detay Sayfası
Özellikler:

Katılım şartları
Minimum/maksimum oyuncu sayısı
Yaş sınırlamaları
Teknik gereksinimler
Eşleşmeler
Bracket şeması
Maç programı
Maç sonuçları
Turnuva kuralları
Genel kurallar
Oyun özel kuralları
Ceza ve itiraz prosedürleri
Ödül havuzu detayları
4. Turnuva Plan Sayfası
Özellikler:

En son turnuva detaylı analizi
Takım performansları
Önemli anlar/istatistikler
Oyuncu başarıları
Turnuva sonuçları
Final sıralaması
Ödül dağılımı
MVP ve özel ödüller
İstatistik grafikleri ve görselleştirmeler
5. Turnuva İzleme Sayfası
Özellikler:

Twitch embed canlı yayın alanı
Tam ekran seçeneği
Yayın kalitesi ayarları
Canlı skor tablosu
Canlı sohbet/yorum alanı
Geçmiş yayınlara erişim linkleri
6. İletişim Sayfası
Özellikler:

İletişim formu
Ad-soyad
E-posta
Konu
Mesaj
İletişim bilgileri
E-posta adresi
Sosyal medya hesapları
(Varsa) fiziksel adres
SSS (Sıkça Sorulan Sorular) bölümü
7. Giriş/Kayıt Sayfası
Özellikler:

Kullanıcı girişi
E-posta/kullanıcı adı ve şifre alanları
"Beni hatırla" seçeneği
Şifremi unuttum fonksiyonu
Yeni kullanıcı kaydı
Temel bilgiler (ad, soyad, e-posta)
Kullanıcı adı ve şifre oluşturma
Oyuncu/Takım seçeneği
Takım kaydı ek alanları
Takım adı
Takım logosu yükleme
Takım üyeleri

🎨 Tasarım Gereksinimleri
Renk Şeması: E-spor atmosferine uygun koyu tonlar, canlı aksan renkleri (mavi, kırmızı, neon yeşil gibi)
Tipografi: Okunabilir, modern fontlar (önerilen: Roboto, Montserrat, Oswald)
Görsel Öğeler:
Yüksek kaliteli oyun görselleri
Takım logoları
Animasyonlu geçişler
Responsive tasarım (mobil ve tablet uyumlu)
UI Elementleri:
Modern butonlar
Dikkat çekici CTA'lar
Kullanıcı dostu formlar
Görsel skorboard'lar

💻 Teknik Gereksinimler
Frontend: HTML5, CSS3 (responsive tasarım için)
İnteraktif Elementler: JavaScript (gerektiğinde)
Tarayıcı Desteği: Chrome, Firefox, Safari, Edge (son 2 sürüm)
Performans: Sayfa yüklenme süresi <3 saniye
Responsive Tasarım: Minimum ekran genişliği 320px

 İş Listesi
Tamamlananlar
[x] Proje kapsamının belirlenmesi
[x] Sayfa yapısının tanımlanması
[x] PRD dokümanının hazırlanması
[x] Temel proje yapısının oluşturulması
[x] Anasayfa HTML yapısının oluşturulması
[x] Anasayfa CSS kodlaması ve responsive tasarım
[x] Turnuvalar sayfası HTML/CSS kodlaması
[x] Turnuva detay sayfası HTML/CSS kodlaması
[x] İletişim sayfası HTML/CSS kodlaması
[x] Giriş/Kayıt sayfası HTML/CSS kodlaması
[x] Turnuva izleme sayfası HTML/CSS kodlaması
[x] Görsel yapısının oluşturulması
[x] JavaScript fonksiyonlarının eklenmesi

Yapılacaklar
[ ] Görsellerin temin edilmesi ve yüklenmesi
[ ] Twitch API entegrasyonu
[ ] Kullanıcı testleri
[ ] İçerik girişlerinin tamamlanması


 Başarı Metrikleri
Aylık ziyaretçi sayısı
Kullanıcı kaydı sayısı
Ortalama site üzerinde geçirilen süre
Turnuva katılım oranları
Canlı yayın izlenme istatistikleri