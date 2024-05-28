const { composeWithMongoose } = require("graphql-compose-mongoose");
const { Deck } = require("../model/deck");

const DeckTC = composeWithMongoose(Deck, {});

const DeckQuery = {
    decks: DeckTC.getResolver("findMany"),
    deck: DeckTC.getResolver("findById"),
    deckOne: DeckTC.getResolver("findOne"),
    deckMany: DeckTC.getResolver("findMany"),
};
const DeckMutation = {
    deckCreate: DeckTC.getResolver("createOne"),
    deckUpdate: DeckTC.getResolver("updateById"),
    deckDelete: DeckTC.getResolver("removeById"),
};

module.exports = {
    DeckQuery,
    DeckMutation
}