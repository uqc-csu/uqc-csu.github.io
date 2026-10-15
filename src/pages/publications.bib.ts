import type { APIRoute } from 'astro';
import { publications } from '../lib/content';

const escapes: Record<string, string> = {
  '\\': '\\textbackslash{}',
  '{': '\\{',
  '}': '\\}',
  '&': '\\&',
  '%': '\\%',
  '$': '\\$',
  '#': '\\#',
  '_': '\\_',
  '~': '\\textasciitilde{}',
  '^': '\\textasciicircum{}',
};
const escapeBibtex = (value: string) => value.replace(/[\\{}&%$#_~^]/g, (character) => escapes[character]);

export const GET: APIRoute = () => {
  const entries = publications.map((item, index) => {
    const key = item.doi?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `${item.year}-${index + 1}`;
    const fields: [string, string][] = [
      ['title', `{${escapeBibtex(item.title)}}`],
      ['author', item.authors.map(escapeBibtex).join(' and ')],
      ['journal', escapeBibtex(item.journal)],
      ['year', String(item.year)],
    ];
    if (item.doi) fields.push(['doi', escapeBibtex(item.doi)], ['url', `https://doi.org/${item.doi}`]);
    return `@article{uqc-${key},\n${fields.map(([name, value]) => `  ${name} = {${value}}`).join(',\n')}\n}`;
  });

  return new Response(`${entries.join('\n\n')}\n`, {
    headers: {
      'Content-Type': 'application/x-bibtex; charset=utf-8',
      'Content-Disposition': 'attachment; filename="uqc-publications.bib"',
    },
  });
};
