const express = require('express');
const path = require('path');

const app = express();


app.listen(3030, () => {
    console.log("Servidor corriendo en puerto http://localhost:3030")
});

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
})

app.use(express.static("public"));