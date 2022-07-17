var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    listings(userId: Int!): [Listing]
    cars: [Car]
    car(id: Int!): Car
    offices: [Office]
    office(id: Int!): Office
    bookings(userId: Int!): [Bookings]
    booking(id: Int!): Booking
  },
  type User {
    firstName: String
    lastName: String
    dateOfBirth: Date
    idNumber: String
    passportNumber: String
  }
  type Listing {
    costPerDay: Float
    listingDate: Date
    lister: User
  },
  type Car {
    vin: String
    color: String
    year: Int
    manufacturer: String
    range: String
    model: String
    listing: Listing
  },
  type Office {
    building: String
    address: String
    sqm: Float
    superintendant: String
    listing: Listing
  },
  type Booking {
    startDate: Date
    endDate: Date
    totalCost: Float
    discount: Float
    renter: User
    listing: Listing
  }
`); //also need the asset

var getListings = (args) => {
  //args.userId
  return [];
}
var getCars = (args) => {
  return [];
}
var getCar = (args) => {
  //args.id
  return {};
}
var getOffices = (args) => {
  return [];
}
var getOffice = (args) => {
  //args.id
  return {};
}
var getListing = (args) => {
  //args.id
  return {};
}
var getBookings = (args) => {
  //args.id
  return {};
}
var getBooking = (args) => {
  //args.id
  return {};
}

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  listings: getListings,
  cars: getCars,
  car: getCar,
  offices: getOffices,
  office: getOffice,
  listing: getListing,
  bookings: getBookings,
  booking:getBooking,
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');