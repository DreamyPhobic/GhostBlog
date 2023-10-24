// Import required modules
import ghost from 'ghost';
import path from 'path';
import express from 'express';

// Create an Express app
const app = express();

// Configure Ghost
ghost()
  .then(ghostServer => {
    // Mount the Ghost instance on your Express app
    app.use(ghostServer.rootApp);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

// Start the Express server
const port = process.env.PORT || 2368; // Use the port specified by your environment or default to 2368
app.listen(port, () => {
  console.log(`Ghost is running on http://localhost:${port}`);
});