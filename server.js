const app = require("./src/app");
const port = 4005;

app.listen(port, () => {
  console.log(`app está rodando na porta ${port}`);
});
