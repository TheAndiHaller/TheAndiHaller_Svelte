import type { RequestHandler } from '@sveltejs/kit';
import Content from '$lib/models/Content';

console.log('Initializing content server...');

export const GET: RequestHandler = async ({ params, url }) => {
  const key = params.key;
  const language = url.searchParams.get('lang') || 'en';

  try {
    const content = await Content.findOne({ where: { key, language } });

    if (!content) {
      return new Response(JSON.stringify({
        message: 'Content not found'
      }), { status: 404 });
    }

    return new Response(JSON.stringify({
      content: content.text
    }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({
      message: 'An error occurred while fetching content'
    }), { status: 500 });
  }
};
