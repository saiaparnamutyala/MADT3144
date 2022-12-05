var multer = require('multer');
const { app } = require("./app");

app.use(multer({ dest: '/tmp/' }));
