import type { APIRoute, GetStaticPaths } from 'astro';
import { publications, type Publication } from '../../lib/content';
import { formatBibtex, publicationId } from '../../lib/bibliography';

export const getStaticPaths: GetStaticPaths = () => publications.map((item) => ({
  params: { id: publicationId(item) },
  props: { item },
}));

export const GET: APIRoute = ({ props }) => new Response(
  `${formatBibtex(props.item as Publication)}\n`,
  { headers: { 'Content-Type': 'application/x-bibtex; charset=utf-8' } },
);
