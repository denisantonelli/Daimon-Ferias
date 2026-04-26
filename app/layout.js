import "./globals.css";

export const metadata = {
  title: "Sistema de Férias Daimon",
  description: "Controle de férias interno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
