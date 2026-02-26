import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({ subsets: ['latin'] });

export const metadata = {
    title: 'Nick Edwards Portfolio',
    description: 'Developer Portfolio for Nick Edwards',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${nunitoSans.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
