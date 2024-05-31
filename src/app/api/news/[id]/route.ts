import rawData from '@/data/data.json';
import { News } from '@/domain';
import { NextRequest, NextResponse } from 'next/server';

// req: NextRequest, { params }: { params: { id: string }

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const record = rawData.find((record: News) => record.id === params.id);

  if (record) {
    return NextResponse.json(record as News);
  } else {
    return NextResponse.json('Record not found');
  }
}
