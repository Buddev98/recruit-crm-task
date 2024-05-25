import "./globals.scss";

export const metadata = {
  title: "Recruit CRM",
  description: "Saas provider",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='body'>{children}</body>
    </html>
  );
}
