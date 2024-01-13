import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const mono = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500"] });


export const metadata = {
  title: 'Juan Beresiarte',
  description: 'Blog personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${mono.className} bg-zinc-900 text-white`}>{children}</body>
    </html>
  )
}
