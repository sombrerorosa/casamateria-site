import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'casamateria',
  title: 'Casa Materia',
  projectId: '42w8s11j',
  dataset: 'casamateria',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
