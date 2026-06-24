import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "sonner";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <div className="min-h-dvh w-full">{children}</div>
          <Toaster richColors />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
