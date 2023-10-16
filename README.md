

- Uygulama durumunu yönetmek ve verileri tutmak için Redux kullanıldı. Redux, merkezi bir veri deposu sağlayarak bileşenler arasında veri iletişimini kolaylaştırdı.

- Sayfa yönlendirmelerini ve gezinmeyi sağlamak için React Router Dom kullanıldı. Bu, kullanıcıların farklı sayfalar arasında geçiş yapabilmesini sağladı.
- Kullanıcı arayüzünü oluşturmak için Bootstrap kullanıldı. Bootstrap'in hazır bileşenleri ve stil yapısı, hızlı ve şık bir tasarım oluşturmama yardımcı oldu.
- Görsel kaydırma öğelerini uygulamaya entegre etmek için React Splide kullanıldı. Bu, kullanıcılara filmleri veya içerikleri göz atmaları için interaktif bir deneyim sağladı.
- Redux'un state yönetimini kolaylaştırmak için reducer'lar kullanıldı. Bu sayede farklı veri bölümleri için ayrı reducer'lar oluşturuldu ve karmaşıklık azaltıldı.
- Verileri çekmek için Axios kullandım çünkü Axios, HTTP isteklerini kolayca yapmamı sağladı ve TMDB'nin API'si ile iletişim kurmamı sağladı. 

# Önizleme

![ezgif com-video-to-gif (5)](https://github.com/zeynepdeli/react-netfl-x-clone/assets/129688573/78f5a0a8-0e53-4d0e-a7f5-0a586a6d5c2f)


# Kütüphaneler
- react-router-dom
- redux
- react-redux
- redux-thunk
- axios
- @splidejs/react-splide

# Kaynaklar
- Api: https://developer.themoviedb.org/reference/configuration-countries

# Yapılacaklar
- Redux kurulumunu
- Kullanıcı anasayfaya gelince:
- Popüler film verini çek > store'a aktar
- Rastgele popüler bir filmi seç Hero.jsx de ekrana bas
- Filmlerin kategori verisini çek > store'a aktar
- Herbir kategori için ekrana o kategoriye ait filmleri listeleyecek bir bileşen MovieList.jsx bas
  bu bileşene listelenecek kategorinin isminin ve id'sini gönder
  gelen id'ye göre film verisini çek ve ekrana bas
