import type { RequestHandler } from '@sveltejs/kit';
import fetchAllContent from '$lib/index'; // Adjust the path as needed

export const GET: RequestHandler = async () => {
  try {
    const contents = await fetchAllContent();
    return new Response(JSON.stringify(contents), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch content', { status: 500 });
  }
};