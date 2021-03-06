const express = require("express");
const path = require("path");

const db = require("./config/connection");

const { typeDefs, resolvers } = require("./schemas");

const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

const serverStart = async () => {
  await server.start();
  server.applyMiddleware({
    app,
  });
};

serverStart();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(express.static(path.join(__dirname, "public/")))
db.once("open", () => {
  try {
    app.listen(PORT, () => {
      console.info(`server is runnig on port:${PORT}`);
      console.info(
        `access graphql at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error(error.message);
  }
});
