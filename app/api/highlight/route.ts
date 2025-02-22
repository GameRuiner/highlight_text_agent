import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const textFragment = url.searchParams.get('text');

  if (!textFragment) {
    return NextResponse.json({ error: 'No text provided' }, { status: 400 });
  }

  return NextResponse.redirect(
    `/?#:~:text=${encodeURIComponent(textFragment)}`
  );
}
