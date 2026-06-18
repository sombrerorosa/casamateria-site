import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || '42w8s11j',
  dataset: import.meta.env.SANITY_DATASET || 'casamateria',
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getAllProyectoSlugs() {
  return client.fetch<{ slug: string }[]>(`*[_type == "proyecto"]{"slug": slug.current}`);
}

export async function getProyectoBySlug(slug: string) {
  return client.fetch(`*[_type == "proyecto" && slug.current == $slug][0]{
    titulo, tituloLinea1, tituloLinea2,
    tagline, precio, ubicacion, heroSubtitulo, heroImage,
    conceptoTexto,
    casaEyebrow, casaTitulo, casaTexto1, casaTexto2,
    casaImagenes[]{ ..., asset-> },
    casaDetalles,
    exteriorEyebrow, exteriorTexto1, exteriorTexto2,
    exteriorStats, exteriorImagenes[]{ ..., asset-> },
    galeria[]{ ..., asset-> },
    perfiles,
    ficha,
    ubicacionTitulo, ubicacionTexto, ubicacionCercanos,
    ubicacionImagen{ ..., asset-> },
    seoDescripcion
  }`, { slug });
}
