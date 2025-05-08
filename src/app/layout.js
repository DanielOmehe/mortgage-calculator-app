import "./globals.css";

export const metadata = {
  title: "Mortage Calculator",
  description: "A frontend mentor project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
