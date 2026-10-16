import type { Publication } from './content';

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

export const publicationId = (item: Publication) =>
  (item.doi || `${item.year}-${item.title}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const formatBibtex = (item: Publication) => {
  const fields: [string, string][] = [
    ['title', `{${escapeBibtex(item.title)}}`],
    ['author', item.authors.map(escapeBibtex).join(' and ')],
    ['journal', escapeBibtex(item.journal)],
    ['year', String(item.year)],
  ];
  if (item.doi) fields.push(['doi', escapeBibtex(item.doi)], ['url', escapeBibtex(`https://doi.org/${item.doi}`)]);
  return `@article{uqc-${publicationId(item)},\n${fields.map(([name, value]) => `  ${name} = {${value}}`).join(',\n')}\n}`;
};
