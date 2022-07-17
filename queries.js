const { Client } = require('pg')
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "admin",
  database: "postgres"
})
client.connect()

var getUser = async(args) => {
  try {
    return await (await client.query('SELECT * FROM public."User" WHERE "id" = $1', [args.id])).rows
  } catch (err) {
    throw new Error("Could not get user")
  }
}

var getListings = async(args) => {
  try {
    return await (await client.query('SELECT * FROM public."Listing" WHERE "listerId" = $1', [args.userId])).rows
  } catch (err) {
    throw new Error("Could not get listings")
  }
}

var getCars = async(args) => {
  try {
    return await (await client.query('SELECT * FROM public."Car"')).rows
  } catch (err) {
    throw new Error("Could not get cars")
  }
}

var getOffices = async(args) => {
  try {
    return await (await client.query('SELECT * FROM public."Office"')).rows
  } catch (err) {
    throw new Error("Could not get offices")
  }
}

var getBookings = async(args) => {
  try {
    return await (await client.query('SELECT * FROM public."Booking" WHERE "renterId" = $1'), [args.userId]).rows
  } catch (err) {
    throw new Error("Could not get bookings")
  }
}


// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'admin',
//   port: 5432,
// })

// const getUsers = (request, response) => {
//   pool.query('SELECT * FROM public."User" ORDER BY id ASC', (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getCar = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM public."Car" WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getOffice = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM public."Office" WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getListing = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM public."Listing" WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

// const getBooking = (request, response) => {
//   const id = parseInt(request.params.id)

//   pool.query('SELECT * FROM public."Booking" WHERE id = $1', [id], (error, results) => {
//     if (error) {
//       throw error
//     }
//     response.status(200).json(results.rows)
//   })
// }

module.exports = {
  // getUsers,
  getUser,
  getListings,
  getCars,
  // getCar,
  getOffices,
  // getOffice,
  // getListing,
  getBookings,
  // getBooking
}