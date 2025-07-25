// components/home/Features.tsx
import { BarChart, ClipboardList, BrainCircuit } from 'lucide-react';

const features = [
  {
    name: 'Pencatatan Mudah',
    description: 'Catat kadar gula darah, makanan, dan aktivitas Anda hanya dengan beberapa klik.',
    icon: ClipboardList,
  },
  {
    name: 'Visualisasi Data',
    description: 'Lihat tren kesehatan Anda melalui grafik interaktif yang mudah dipahami.',
    icon: BarChart,
  },
  {
    name: 'Analisis Cerdas',
    description: 'Dapatkan wawasan dan rekomendasi berdasarkan data yang Anda masukkan untuk pengelolaan yang lebih baik.',
    icon: BrainCircuit,
  },
]

export function Features() {
  return (
    <section id="fitur" className="bg-background py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">MANAJEMEN KESEHATAN</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Semua yang Anda butuhkan untuk mengontrol kesehatan Anda
          </p>
          <p className="mt-6 text-lg leading-8 text-foreground/60">
            Platform kami menyediakan alat-alat canggih untuk membantu Anda memahami dan mengambil tindakan yang tepat.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-foreground/60">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}