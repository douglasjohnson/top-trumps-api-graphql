const { SchemaComposer } = require('graphql-compose');
const { DeckQuery, DeckMutation } = require('./deck');

const schemaComposer = new SchemaComposer();
schemaComposer.Query.addFields(DeckQuery);
schemaComposer.Mutation.addFields(DeckMutation);
const graphqlSchema = schemaComposer.buildSchema();
module.exports = graphqlSchema;