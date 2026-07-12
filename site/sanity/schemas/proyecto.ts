export default {
  name: 'proyecto',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título del proyecto',
      type: 'string',
      validation: (R: any) => R.required(),
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'titulo' },
      validation: (R: any) => R.required(),
    },
    {
      name: 'tituloLinea1',
      title: 'Héroe — primera línea del título',
      type: 'string',
      description: 'Ej: Habitar sin',
    },
    {
      name: 'tituloLinea2',
      title: 'Héroe — segunda línea (en itálica con gradiente)',
      type: 'string',
      description: 'Ej: fronteras',
    },
    {
      name: 'tagline',
      title: 'Tagline del héroe',
      type: 'string',
      description: 'Frase corta debajo del título. Ej: La casa donde el adentro y el afuera dejaron de ser dos lugares.',
    },
    {
      name: 'precio',
      title: 'Precio de publicación',
      type: 'string',
      description: 'Ej: USD 370.000',
    },
    {
      name: 'ubicacion',
      title: 'Ubicación (eyebrow del héroe)',
      type: 'string',
      description: 'Ej: Fincas de San Vicente',
    },
    {
      name: 'heroSubtitulo',
      title: 'Resumen compacto (pie del héroe)',
      type: 'string',
      description: 'Ej: 300 m² · lote de 3.000 m² · 3 dormitorios · playroom|office',
    },
    {
      name: 'heroImage',
      title: 'Imagen del héroe',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'seoDescripcion',
      title: 'Descripción SEO',
      type: 'text',
      rows: 3,
    },
    // ── Concepto ──
    {
      name: 'conceptoTexto',
      title: 'Concepto — texto del manifiesto',
      type: 'text',
      rows: 6,
      description: 'Párrafos del manifiesto del proyecto.',
    },
    // ── La casa ──
    {
      name: 'casaEyebrow',
      title: 'La casa — eyebrow',
      type: 'string',
      description: 'Ej: La casa · 230 m² cubiertos',
    },
    {
      name: 'casaTitulo',
      title: 'La casa — título de sección',
      type: 'string',
    },
    {
      name: 'casaTexto1',
      title: 'La casa — párrafo 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'casaTexto2',
      title: 'La casa — párrafo 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'casaImagenes',
      title: 'La casa — fotos y videos (1ª = grande, 2ª y 3ª = pequeñas)',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true } },
        { type: 'file', title: 'Video', options: { accept: 'video/mp4,video/webm,video/ogg' } },
      ],
    },
    {
      name: 'casaDetalles',
      title: 'La casa — tarjetas de detalle',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'numero', title: 'Número (ej: 01)', type: 'string' },
          { name: 'titulo', title: 'Título', type: 'string' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 },
        ],
        preview: { select: { title: 'titulo', subtitle: 'numero' } },
      }],
    },
    // ── El exterior ──
    {
      name: 'exteriorEyebrow',
      title: 'El exterior — eyebrow',
      type: 'string',
      description: 'Ej: El exterior · 3.000 m²',
    },
    {
      name: 'exteriorTexto1',
      title: 'El exterior — párrafo 1',
      type: 'text',
      rows: 4,
    },
    {
      name: 'exteriorTexto2',
      title: 'El exterior — párrafo 2',
      type: 'text',
      rows: 4,
    },
    {
      name: 'exteriorStats',
      title: 'El exterior — estadísticas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'numero', title: 'Número (ej: 3.000)', type: 'string' },
          { name: 'etiqueta', title: 'Etiqueta (ej: m² de lote)', type: 'string' },
        ],
        preview: { select: { title: 'numero', subtitle: 'etiqueta' } },
      }],
    },
    {
      name: 'exteriorImagenes',
      title: 'El exterior — fotos y videos (1ª = vertical izq, 2ª y 3ª = strip inferior)',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true } },
        { type: 'file', title: 'Video', options: { accept: 'video/mp4,video/webm,video/ogg' } },
      ],
    },
    // ── Galería ──
    {
      name: 'galeria',
      title: 'Galería — fotos y videos (hasta 7)',
      type: 'array',
      of: [
        { type: 'image', options: { hotspot: true } },
        { type: 'file', title: 'Video', options: { accept: 'video/mp4,video/webm,video/ogg' } },
      ],
    },
    // ── Perfiles ──
    {
      name: 'perfiles',
      title: 'Perfiles de compradores',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'tag', title: 'Etiqueta de perfil', type: 'string' },
          { name: 'titulo', title: 'Título del perfil', type: 'string' },
          { name: 'descripcion', title: 'Descripción', type: 'text', rows: 4 },
          { name: 'cita', title: 'Cita / quote', type: 'string' },
        ],
        preview: { select: { title: 'titulo', subtitle: 'tag' } },
      }],
    },
    // ── Ficha técnica ──
    {
      name: 'ficha',
      title: 'Ficha técnica — filas',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'clave', title: 'Clave (ej: Superficie cubierta)', type: 'string' },
          { name: 'valor', title: 'Valor (ej: 230 m²)', type: 'string' },
        ],
        preview: { select: { title: 'clave', subtitle: 'valor' } },
      }],
    },
    // ── Ubicación ──
    {
      name: 'ubicacionTitulo',
      title: 'Ubicación — título de la sección',
      type: 'string',
      description: 'Ej: Fincas de San Vicente.',
    },
    {
      name: 'ubicacionTexto',
      title: 'Ubicación — texto descriptivo',
      type: 'text',
      rows: 4,
    },
    {
      name: 'ubicacionCercanos',
      title: 'Ubicación — puntos cercanos',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'lugar', title: 'Lugar', type: 'string' },
          { name: 'tiempo', title: 'Tiempo (ej: 5 min)', type: 'string' },
        ],
        preview: { select: { title: 'lugar', subtitle: 'tiempo' } },
      }],
    },
    {
      name: 'ubicacionImagen',
      title: 'Ubicación — imagen / mapa aéreo',
      type: 'image',
      options: { hotspot: true },
    },
  ],
  preview: {
    select: { title: 'titulo', subtitle: 'ubicacion', media: 'heroImage' },
  },
};
