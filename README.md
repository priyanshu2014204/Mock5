# FLIGHT API

## Dependencies

> "bcrypt": "^5.1.0",

> "dotenv": "^16.0.3",

> "express": "^4.18.2",

> "jsonwebtoken": "^9.0.0",

> "mongoose": "^7.0.1"

## Endpoints

- /api/register
- /api/login
- /api/flight
- /api/flights/:id
- /api/flight  [POST]
- /api/flight/:id   [PUt/PATCH]
- /api/flight/:id  [Delete]
- /api/booking
- /api/dashboard

### POST: /user/register

- User with the same email can not register

> **body***: `{name, email, password}`



### POST: /api/flight

> **body***: `{airline,flightNo,arrival,departureTime,arrivalTime,seats,price}`

>  This is case sensitive so enter the same field otherwise it will throw and error 
 
