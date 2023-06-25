import './global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ProjectXchange',
  description: 'Showcase your projects and find collaborators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          <main>
            {children}
          </main>
       <Footer/>
      </body>
    </html>
  )
}
