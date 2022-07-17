const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})

const getUsers = (request, response) => {
  pool.query('SELECT * FROM public."User" ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public."User" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var getListings = (request, response) => {
  const id = parseInt(request.params.userId)

  pool.query('SELECT * FROM public."Listing" WHERE listerId = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var getCars = (request, response) => {
  pool.query('SELECT * FROM public."Car"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getCar = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public."Car" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var getOffices = (request, response) => {
  pool.query('SELECT * FROM public."Office"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getOffice = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public."Office" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getListing = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public."Listing" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

var getBookings = (request, response) => {
  pool.query('SELECT * FROM public."Booking"', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getBooking = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM public."Booking" WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {
  getUsers,
  getUserById,
  getListings,
  getCars,
  getCar,
  getOffices,
  getOffice,
  getListing,
  getBookings,
  getBooking
}