import type { RequestHandler } from '@sveltejs/kit';
import Content from '$lib/server/models/Content';

console.log('Request Handler...');

export const GET: RequestHandler = async ({ params, url }) => {
  console.log('Fetching content...');

  const key = params.key;
  const language = url.searchParams.get('lang') || 'en';

  try {
    const content = await Content.findOne({ where: { key, language } });

    console.log('Content:', content?.dataValues);

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
