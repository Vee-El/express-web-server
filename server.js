const express = require('express'); // importing express function from library
const app = express(); // run the express function and store the return value in 'app'
const port = 3000;

app.use('/veeWeb', express.static('public'));
// .use is adding funtionality to the app web server
// '/veeWeb' is a router/path that I am creating, it doesn't point to a file/folder
// express.static is an express method for serving static files
// it takes a folder location from the parent directory

app.listen(port, () => {
    console.log('server is running');
})
