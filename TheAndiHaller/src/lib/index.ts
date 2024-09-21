// place files you want to import through the `$lib` alias in this folder.
import Content from '$lib/server/models/Content';

const fetchAllContent = async () => {
  try {
    const contents = await Content.findAll();
    return contents;
  } catch (error) {
    console.error('Error fetching content:', error);
    throw error; // Re-throw the error for handling at a higher level
  }
};

export default fetchAllContent;