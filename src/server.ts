import { Server } from "http";

const port = 3000;
async function main() {
  const server: Server = app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

main();
