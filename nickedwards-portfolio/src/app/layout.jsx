import { Nunito_Sans } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Nick Edwards Portfolio',
    description: 'Developer Portfolio for Nick Edwards',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en' className={`${nunitoSans.className} antialiased`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
