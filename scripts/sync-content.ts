import * as fs from 'node:fs/promises';
import { type OramaDocument as DocumentRecord, sync } from 'fumadocs-core/search/orama-cloud';
import { OramaCloud } from '@orama/core';

// Next.js writes it under `route-cache` when built with an adapter, like on Vercel
const [file] = await Array.fromAsync(fs.glob('.next/server/{app,route-cache/*/*/$}/static.json.body'));
const records = JSON.parse(await fs.readFile(file, 'utf-8')) as DocumentRecord[];

const orama = new OramaCloud({
  projectId: process.env.NEXT_PUBLIC_ORAMA_PROJECT_ID!,
  apiKey: process.env.ORAMA_PRIVATE_API_KEY!,
});

await sync(orama, {
  index: process.env.NEXT_PUBLIC_ORAMA_DATASOURCE_ID!,
  documents: records,
});

console.log(`search updated: ${records.length} records`);
