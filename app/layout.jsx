import "@/public/assets/css/custom-style.css";
import '../public/assets/css/style.css';
import '@/public/assets/css/plugins.css';
import '../public/assets/css/colors/red.css';
import '../public/assets/fonts/thicccboi/thicccboi.css';
import Logo from "../public/assets/img/logo-light.png";
import logoWhite from "../public/assets/img/whitelogo.png";
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'SuperLabs | India | Acta Non Verba',
  description: 'We carefully consider our solutions to support each and every stage of your growth.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav Logo={Logo} />
        {children}
        <Footer logoWhite={logoWhite} />
      </body>
    </html>
  )
}
