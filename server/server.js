const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');
const app = express();

app.use(express.static(publicPath));

app.listen(port, () => {
   console.log(`Server is running on ${port}`)
})
