import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About',
 description: 'Esta es la pagina about de la empresa',
 keywords: ['About Page','Daniela','información','others'],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About Page</span>
    </>
  )
}
