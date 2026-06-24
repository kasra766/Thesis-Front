export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="size-full flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
