const express = require('express');
const db = require('./queries');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  scalar Date

  type Query {
    listings(userId: Int!): [Listing]
    cars: [Car]
    car(id: Int!): Car
    offices: [Office]
    office(id: Int!): Office
    bookings(userId: Int!): [Booking]
    booking(id: Int!): Booking
  },
  type User {
    id: Int
    firstName: String
    lastName: String
    dateOfBirth: Date
    idNumber: String
    passportNumber: String
  }
  type Listing {
    id: Int
    costPerDay: Float
    listingDate: Date
    lister: User
  },
  type Car {
    id: Int
    vin: String
    color: String
    year: Int
    manufacturer: String
    range: String
    model: String
    listing: Listing
  },
  type Office {
    id: Int
    building: String
    address: String
    sqm: Float
    superintendant: String
    listing: Listing
  },
  type Booking {
    id: Int
    startDate: Date
    endDate: Date
    totalCost: Float
    discount: Float
    renter: User
    listing: Listing
  }
`); //also need the asset



// The root provides a resolver function for each API endpoint
var root = {
  user: db.getUser,
  listings: db.getListings,
  // cars: db.getCars,
  // car: db.getCar,
  // offices: db.getOffices,
  // office: db.getOffice,
  // listing: db.getListing,
  // bookings: db.getBookings,
  // booking: db.getBooking,
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');