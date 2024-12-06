import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { message } = await req.json();

  // Simulate API processing time
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simple response logic
  const response = `You said: "${message}". This is a mock response from the API.`;

  return NextResponse.json({ response });
}
