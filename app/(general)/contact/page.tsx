import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact',
 description: 'Esta es la pagina de contacto de la empresa',
 keywords: ['Contact Page','Daniela','información','others'],
};

export default function ContactPage() {
    return (
      <>
          <span className="text-7xl">Contact Page</span>
      </>
    )
}