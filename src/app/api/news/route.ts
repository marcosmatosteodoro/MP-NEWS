import rawData from '@/data/data.json';
import { News } from '@/domain';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json(rawData as News[]);
}
