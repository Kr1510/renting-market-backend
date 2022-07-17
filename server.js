const express = require('express');
const db = require('./queries');
const mutations = require('./mutations');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  scalar Date

  type Query {
    listings(userId: Int!): [Listing]
    listing(id: Int!): Listing
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
    listingId: Int
  },
  type Office {
    id: Int
    building: String
    address: String
    sqm: Float
    superintendant: String
    listingId: Int
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

  type Mutation {
    bookCar(listingId: Int!, startDate: Date!, endDate: Date!, renterId: Int!): Boolean
  }
`); //also need the asset



// The root provides a resolver function for each API endpoint
var root = {
  user: db.getUser,
  listings: db.getListings,
  listing: db.getListing,
  cars: db.getCars,
  car: db.getCar,
  offices: db.getOffices,
  // office: db.getOffice,
  bookings: db.getBookings,
  // booking: db.getBooking,

  bookCar: mutations.bookCar
};

var app = express();

app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));


app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');