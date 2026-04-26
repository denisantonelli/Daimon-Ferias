import "./globals.css";

export const metadata = {
  title: "Sistema de Férias Daimon",
  description: "Controle de férias interno",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
