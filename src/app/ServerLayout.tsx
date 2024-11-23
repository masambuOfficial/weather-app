import { metadata } from "./metadata";

// This is a server component
export const generateMetadata = () => metadata;

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // Simply renders its children
}
