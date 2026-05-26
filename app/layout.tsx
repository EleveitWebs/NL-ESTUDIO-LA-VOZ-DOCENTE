import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const BASE_DOMAIN = 'https://www.estudiolavozdocente.com.ar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'La Voz Docente - Derecho laboral docente',
  description: 'Especialistas en derecho laboral docente. Defensa de derechos de salud laboral, disfonia como enfermedad profesional e indemnizaciones.',
  authors: [{ name: 'La Voz Docente' }],
  metadataBase: new URL(BASE_DOMAIN),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'La Voz Docente - Derecho laboral docente',
    description: 'Especialistas en derecho laboral docente. Defensa de derechos de salud laboral, disfonia como enfermedad profesional e indemnizaciones.',
    url: BASE_DOMAIN,
    siteName: 'La Voz Docente',
    images: [
      {
        url: `${BASE_DOMAIN}/hero-v2.png`,
        width: 1200,
        height: 630,
        alt: 'Abogado especialista en derecho laboral docente',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  icons: {
    icon: '/logo.jpg',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const legalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'La Voz Docente',
  description: 'Especialistas en derecho laboral docente. Defendemos los derechos de salud de los educadores con mas de 10 anos de experiencia.',
  url: BASE_DOMAIN,
  logo: `${BASE_DOMAIN}/logo.jpg`,
  image: `${BASE_DOMAIN}/hero-v2.png`,
  telephone: '1124515788',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tucuman 1539',
    addressLocality: 'CABA',
    addressCountry: 'AR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: ['https://instagram.com/voz_docente'],
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Areas de practica',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Reconocimiento de Disfonia',
          description: 'Asesoramiento y gestion integral para que la afeccion vocal sea reconocida legalmente.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cobro de Indemnizaciones',
          description: 'Acompanamiento en el calculo y cobro de la compensacion economica por incapacidad generada por la disfonia.',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
        />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}
