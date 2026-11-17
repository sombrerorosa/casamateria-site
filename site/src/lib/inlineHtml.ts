/**
 * Los campos de texto de Sanity que se insertan con set:html admiten un
 * formato mínimo (<strong>, <em>, <b>, <i>, <br>) y nada más. Se escapa todo
 * el contenido y después se restauran solo esas etiquetas, sin atributos,
 * para que un campo del CMS no pueda inyectar scripts ni HTML arbitrario.
 */
const ALLOWED = 'strong|em|b|i';

export function inlineHtml(value: unknown): string {
  const escaped = String(value ?? '')
    .replace(/&(?!(?:[a-z]+|#\d+|#x[0-9a-f]+);)/gi, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return escaped
    .replace(new RegExp(`&lt;(/?)(${ALLOWED})&gt;`, 'gi'), (_m, slash, tag) => `<${slash}${tag.toLowerCase()}>`)
    .replace(/&lt;br\s*\/?&gt;/gi, '<br>');
}
