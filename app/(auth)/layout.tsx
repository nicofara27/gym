import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";

export const metadata = {
  title: "Find a Couch",
  description: "Find a Couch",
};

const inter = Inter({ subsets: ["latin"] });

export default function rootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es">
        <body className={`${inter.className} `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
