// src/components/layout/Layout.tsx
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
