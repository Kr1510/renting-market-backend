const { Client } = require('pg')
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "postgres"
})
client.connect()

var bookCar = async(args) => {
  try {
    await (await client.query('INSERT INTO public."Booking" VALUES ($1, $2, $3, 0, $4, $5', [args.startDate, args.endDate, args.totalCost, args.renterId, args.listingId]));
    return true;
  } catch (err) {
    throw new Error("Could not get user")
  }
}

module.exports = {
  bookCar
}