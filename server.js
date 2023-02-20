const express = require('express'); // importing express function from library
const app = express(); // run the express function and store the return value in 'app'
const port = 3000;

app.use(express.static('public'));
// .use is adding funtionality to the app web server
// express.static is an express method for serving static files
// it takes a folder location from the parent directory

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})
