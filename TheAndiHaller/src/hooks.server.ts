import { sequelize } from '$lib/server/database';
import Content from '$lib/server/models/Content';
import Blogpost from '$lib/server/models/Blogpost';

console.log('Running Hook...');
/*
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await Content.sync({ alter: true }); // This will synchronize the model with the database
    console.log('Content table synchronized.');

    // Start your SvelteKit server here
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
*/

const addFirstContent = async () => {
  console.log('Adding first content...');
  try {
    //await sequelize.authenticate();
    console.log('Connection established.');

    // Sync models with the database
    await Content.sync({ force: true });
    await Blogpost.sync({ force: true });

    // Create a new Content entry
    const newContent = await Content.create({
      key: 'about_me',
      text: 'Hello, my name is Andi!',
      language: 'en',
    });

    // Create a new Blogpost entry
    const newBlogpost = await Blogpost.create({
      key: 'tridibot',
      title: 'Tridibot',
      text: 'My little robot called Tridibot!',
      language: 'en',
    });

    console.log('New Content added:', newContent.toJSON());
  } catch (error) {
    console.error('Error adding content:', error);
  }
};

addFirstContent();
