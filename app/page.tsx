"use client";

export default function OrhanerArtistWebsite() {
  const tracks = [
    { title: "NASIL BAŞARDIN", type: "Official Video", duration: "3:20", url: "https://www.youtube.com/watch?v=fqv5Llch34o" },
    { title: "Kalp Yarası", type: "Official Video", duration: "3:11", url: "https://www.youtube.com/watch?v=PjcTzmPsTtI" },
    { title: "Farklı Biri", type: "Official Video", duration: "3:35", url: "https://www.youtube.com/watch?v=rkwtKr33SAY" },
    { title: "Çıkmaz Yolum", type: "Official Video", duration: "3:08", url: "https://www.youtube.com/watch?v=eMZbK5YQH9Y" },
  ];

  const shows = [
    { city: "Wien", venue: "Yakında açıklanacak", date: "Yeni etkinlikler yakında" },
    { city: "Linz", venue: "Yakında açıklanacak", date: "Takipte kal" },
    { city: "Salzburg", venue: "Yakında açıklanacak", date: "Yeni dönem" },
  ];

  const gallery = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];
  const videos = ["fqv5Llch34o", "PjcTzmPsTtI", "rkwtKr33SAY", "eMZbK5YQH9Y"];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <div className="text-2xl font-black tracking-[0.35em]">ORHANER</div>
            <div className="text-xs uppercase tracking-[0.25em] text-white/50">Official Artist Website</div>
          </div>

          <nav className="hidden gap-8 text-sm text-white/70 md:flex">
            <a href="#home" className="transition hover:text-white">Ana Sayfa</a>
            <a href="#music" className="transition hover:text-white">Müzik</a>
            <a href="#about" className="transition hover:text-white">Hakkında</a>
            <a href="#shows" className="transition hover:text-white">Etkinlikler</a>
            <a href="#gallery" className="transition hover:text-white">Galeri</a>
            <a href="#contact" className="transition hover:text-white">İletişim</a>
            <a href="https://www.youtube.com/@orhaner11" target="_blank" rel="noreferrer" className="transition hover:text-white">YouTube</a>
            <a href="https://www.instagram.com/orhaner___?hl=de" target="_blank" rel="noreferrer" className="transition hover:text-white">Instagram</a>
            <a href="https://www.tiktok.com/@orhaner__" target="_blank" rel="noreferrer" className="transition hover:text-white">TikTok</a>
          </nav>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_75%_55%,rgba(255,255,255,0.06),transparent_22%)]" />
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute right-10 top-24 h-96 w-96 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />

        <div className="mx-auto grid min-h-[100vh] max-w-7xl items-center gap-8 px-6 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="relative z-10 pt-10 lg:pt-0">
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70 backdrop-blur-sm">
              Yeni Nesil Sanatçı
            </div>

            <h1 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.2rem]">
              ORHANER
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              Güçlü vokal, karanlık atmosfer, duygusal sözler ve modern sound. Müzikler, klipler, konser tarihleri, galeri, biyografi ve iletişim alanları tek bir premium deneyimde buluşuyor.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#music" className="rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.03]">
                Şarkıları Dinle
              </a>
              <a href="#contact" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                İletişim
              </a>
              <a href="https://www.youtube.com/@orhaner11" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                YouTube
              </a>
            </div>

            <div className="mt-11 grid max-w-xl grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black">4</div>
                <div className="mt-1 text-sm text-white/60">Öne Çıkan Şarkı</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black">3</div>
                <div className="mt-1 text-sm text-white/60">Sosyal Platform</div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="text-3xl font-black">2026</div>
                <div className="mt-1 text-sm text-white/60">Yeni Dönem</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative flex h-[980px] w-full max-w-[980px] items-end justify-center overflow-visible">
              <div className="absolute inset-y-10 right-[10%] w-[70%] rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_58%)] blur-xl" />
              <div className="absolute bottom-8 right-[12%] h-52 w-[68%] rounded-full bg-white/10 blur-3xl" />
              <div className="absolute bottom-0 right-[8%] h-24 w-[62%] rounded-full bg-black/70 blur-2xl" />
              <img
                src="/hero.png"
                alt="Orhaner hero"
                className="relative z-10 h-[1100px] w-auto max-w-none object-contain drop-shadow-[0_40px_110px_rgba(0,0,0,0.88)]"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-transparent to-black/10 blur-xl" />
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="music" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Müzik</div>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Öne Çıkan Yayınlar</h2>
          </div>
          <div className="hidden text-sm text-white/55 md:block">Orhaner’in yayınları</div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="mb-6">
              <div className="text-lg font-bold">Şarkı Listesi</div>
              <div className="text-sm text-white/50">YouTube üzerinden dinlenebilir.</div>
            </div>

            <div className="space-y-4">
              {tracks.map((track, i) => (
                <a
                  key={track.url}
                  href={track.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-sm font-black text-black">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="font-semibold">{track.title}</div>
                      <div className="text-sm text-white/50">{track.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="text-sm text-white/50">{track.duration}</div>
                    <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black">Aç</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-bold">Klip / Şarkılar</div>
            <div className="mt-2 text-sm leading-6 text-white/55">
              Öne çıkan yayınları doğrudan izleyebilirsin.
            </div>

            <div className="mt-6 grid gap-4">
              {videos.map((videoId) => (
                <iframe
                  key={videoId}
                  className="h-56 w-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={videoId}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Hakkında</div>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Sesini hikâyeye dönüştüren bir sanatçı</h2>
            <p className="mt-6 max-w-4xl text-base leading-8 text-white/70">
              Orhaner; duygusal anlatımı, güçlü sahne enerjisi ve modern altyapılarla şekillenen tarzıyla dikkat çeken yeni nesil bir sanatçı. Müziğinde karanlık atmosferi, gerçek duyguları ve modern sound çizgisini bir araya getirir.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-white/70">
              Her parçada kendi dünyasını yansıtan Orhaner, görsel dili ve sahne enerjisiyle dinleyicisinde iz bırakan bir atmosfer kurmayı hedefliyor.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Tarz", "Duygusal rap, melodik trap, modern sound"],
              ["Şehir", "Wien / Avrupa"],
              ["Vizyon", "Güçlü sahne enerjisi ve premium duruş"],
              ["Hedef", "Yeni single, klipler, canlı performanslar"],
            ].map(([label, value]) => (
              <div key={String(label)} className="rounded-[1.75rem] border border-white/10 bg-black/35 p-6">
                <div className="text-sm uppercase tracking-[0.22em] text-white/45">{label}</div>
                <div className="mt-3 text-lg font-semibold leading-7">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="shows" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.35em] text-white/45">Etkinlikler</div>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Yaklaşan Sahne Tarihleri</h2>
        </div>

        <div className="space-y-4">
          {shows.map((show) => (
            <div
              key={show.city + show.date}
              className="grid items-center gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 md:grid-cols-[1fr_1fr_1fr_auto]"
            >
              <div>
                <div className="text-sm text-white/45">Şehir</div>
                <div className="mt-1 text-xl font-bold">{show.city}</div>
              </div>
              <div>
                <div className="text-sm text-white/45">Mekân</div>
                <div className="mt-1 font-semibold">{show.venue}</div>
              </div>
              <div>
                <div className="text-sm text-white/45">Tarih</div>
                <div className="mt-1 font-semibold">{show.date}</div>
              </div>
              <button className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black">Detay</button>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">Galeri</div>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Görsel Dünya</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {gallery.map((src, i) => (
              <div key={src} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
                <img
                  src={src}
                  alt={`Orhaner galeri ${i + 1}`}
                  className="h-[520px] w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/45">İletişim</div>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Booking, iş birliği ve menajerlik</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
              Booking, iş birlikleri ve profesyonel iletişim için aşağıdaki kanallar üzerinden doğrudan bağlantı kurulabilir.
            </p>

            <div className="mt-8 space-y-4 text-sm text-white/75">
              <a href="mailto:booking@orhaner.com" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">E-posta: booking@orhaner.com</a>
              <a href="https://www.instagram.com/orhaner___?hl=de" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">Instagram: @orhaner___</a>
              <a href="https://www.youtube.com/@orhaner11" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">YouTube: @orhaner11</a>
              <a href="https://www.tiktok.com/@orhaner__" target="_blank" rel="noreferrer" className="block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">TikTok: @orhaner__</a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-bold">İletişim Formu</div>
            <div className="mt-2 text-sm text-white/55">Mesaj göndermek için form alanı.</div>
            <div className="mt-6 grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35" placeholder="Ad Soyad" />
              <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35" placeholder="E-posta" />
              <input className="rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35" placeholder="Konu" />
              <textarea className="min-h-[170px] rounded-2xl border border-white/10 bg-black/40 px-4 py-4 outline-none placeholder:text-white/35" placeholder="Mesajınız" />
              <button className="rounded-2xl bg-white px-6 py-4 text-sm font-bold text-black">Mesaj Gönder</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/50 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div>
            <div className="font-black tracking-[0.35em] text-white">ORHANER</div>
            <div className="mt-2">© 2026 Tüm hakları saklıdır.</div>
          </div>

          <div className="flex flex-wrap gap-5">
            <a href="#home" className="hover:text-white">Ana Sayfa</a>
            <a href="#music" className="hover:text-white">Müzik</a>
            <a href="#shows" className="hover:text-white">Etkinlikler</a>
            <a href="#contact" className="hover:text-white">İletişim</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
