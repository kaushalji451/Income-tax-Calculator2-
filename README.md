# Incometax calculator api

this is a microservice to calculate the income tax by getting the user details like ,
gross income,year of bussiness, nature of bussiness.

# Table of Content

Api Endpoint
Tax Calculation Logic
Backend Setup
FrontEnd Setup
Taech Stack

# Api Endpoint

post - /calculate-tax  
 Description - Getting the user input and calculating the income tax and save it onto the database.
Request body -

    {
    "year": '2025-2026',
    "categery": 'individual',
    "age": '0-60',
    "resStatus": 'res',
    "income": 1000000,
    "deduction": 0,
    "regime": 'newRegime',
    }

Response -
    {
   "_id": ObjectId('67fcd8a0f9c565fddf598e32'),
    "assismenYear": '2025-2026',
    "categery": 'individual',
    "age": '0-60',
    "residentalStatus": 'res',
    "anualIncome": 1000000,
    "deduction": 0,
    "totalTax": 0,
    "taxableIncome": 1000000,
    "cess": 0,
    "tax": 50000,
    "regime": 'newRegime',
    "surcharge": 0,
    "taxBreakdown": [
      {
        slab: '₹0 - ₹300000',
        rate: 0,
        amount: 0,
        _id: ObjectId('67fcd8a0f9c565fddf598e33')
      },
      {
        slab: '₹300001 - ₹700000',
        rate: 0.05,
        amount: 20000,
        _id: ObjectId('67fcd8a0f9c565fddf598e34')
      },
      {
        slab: '₹700001 - ₹1000000',
        rate: 0.1,
        amount: 30000,
        _id: ObjectId('67fcd8a0f9c565fddf598e35')
      }
    ],
    createdAt: ISODate('2025-04-14T09:42:56.702Z'),
    updatedAt: ISODate('2025-04-14T09:42:56.702Z'),
    __v: 0
    }

    Get - /calculation
    Description - getting the all Historical data from the backend and return in the from of json data.

    Response -
    [
    {
        "_id": "...",
        "income": 1000000,
        "taxAmount": 75000,
        "fillingStatus": "HUF",
        "age": 42
    },
    ...
    ]

# Tax Calculation Logic

    To calculate the income the this is the slab as Defin below.
      tax Slab for new Regime  2025-2026
     0       -  300000,      0,
     300001  -  700000,      5,
     700001  -  1000000,     10,
     1000001 -  1200000,     15,
     1200001 -  1500000,     20,
     1500001 -  Infinity,    30,

     tax Slab for new Regime  2024-205
     0       -  300000,      0,
     300001  -  600000,      5,
     600001  -  900000,      10,
     900001  -  1200000,     15,
     1200001 -  1500000,     20,
     1500001 -  Infinity     30,

      tax Slab for old Regime   age lesserthen 60
     0       -  250000,     0,
     250001  -  500000,     5,
     500001  -  1000000     20,
     1000001 -  Infinity,   30,


      tax Slab for old Regime for Senior citizen  age greaterthen 60 lessserthen 80
     0       -  300000,       0,
     300001  -  500000,       5,
     500001  -  1000000,      20,
     1000001 -  Infinity,     30,


      tax Slab for old Regime for Super Senior citizen age greaterthen 80
     0       -  500000,        0,
     500001  -  1000000,       20,
     1000001 -  Infinity,      30,

    the logic has been iterate throught the range only the amout within the slab range.

# Backend Setup

1.  Clone the Repo.
    git clone https://github.com/kaushalji451/IncomeTaxCalculater.git
    cd backend

2.  Install dependencies.
    npm install

3.  Start the mongodb (Insue the mongdb run localy)

4.  Run the Server
    node app.js

5.  Server is running on port:- http://localhost:8080

# Frontend Setup

1. Navigate to frontend Folder
   cd ../frontend

2. Install dependencies
   npm install

3. Start React Server
   npm run dev

4. Frontend running on prt : http://localhost:5173

# Tech Stack

Frontend - React.js , Tailwind Css  
 Backend - Node.js , Express.js ,
Database - MongoDb
Validation - Joi
