import "./globals.scss";
import AppProvider from "./provider";

export const metadata = {
  title: "Recruit CRM",
  description: "Saas provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>
        <AppProvider children={children} />
      </body>
    </html>
  );
}
