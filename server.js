const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const mongoose = require("mongoose");
const graphqlSchema = require("./schema")
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log(`Db Connected`);
        const server = new ApolloServer({ schema: graphqlSchema  });
        startStandaloneServer(server, {
            listen: { port: process.env.PORT || 4000 },
        }).then(({ url }) => {
            console.log(`Server ready at ${url}`);
        });
    })
    .catch(err => {
        console.log(err.message);
    });
