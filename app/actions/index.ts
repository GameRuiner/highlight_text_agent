'use server';

import { cookies } from 'next/headers';
import { Err, Ok, Result } from '@/types';

export async function setApiKey(key: string | null): Promise<Result<void>> {
  const cookieStore = await cookies();

  try {
    if (key === null) {
      //TODO: simple encryption - iron session seal it with password (SS in next)
      cookieStore.delete('xi-api-key');
    } else {
      cookieStore.set('xi-api-key', key, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
        maxAge: 30 * 24 * 60 * 60,
      });
    }

    return Ok();
  } catch (error) {
    console.error('setApiKey failed:', error);
    return Err('Failed to set API key');
  }
}

export async function getApiKey(): Promise<Result<string | null>> {
  const cookieStore = await cookies();
  const apiKey = cookieStore.get('xi-api-key')?.value;
  return Ok(apiKey ?? null);
}
