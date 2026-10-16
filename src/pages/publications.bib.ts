import type { APIRoute } from 'astro';
import { publications } from '../lib/content';
import { formatBibtex } from '../lib/bibliography';

export const GET: APIRoute = () => new Response(
  `${publications.map(formatBibtex).join('\n\n')}\n`,
  { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } },
);
