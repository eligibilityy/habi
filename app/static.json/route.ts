import { source } from '@/lib/source';
import { toDocuments } from 'fumadocs-core/search/orama-cloud';

export const revalidate = false;

export async function GET() {
  return Response.json(await toDocuments(source));
}
