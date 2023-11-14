import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Princing',
    description: 'Esta es la pagina de pricing de la empresa',
    keywords: ['Princing Page','Daniela','información','others'],
};

export default function PricingPage() {
    return (
      <>
          <span className="text-7xl">Pricing Page</span>
      </>
    )
}