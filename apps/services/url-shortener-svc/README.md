# CA - URL shortener service

URL shortener service built using fastAPI and postgreSQL

## Setup

Install dependencies using:

    poetry install

Activate environment:

    poetry shell

The database uses posgresql thus you need to run it using docker. To run the database using docker first build the container using:

    docker-compose -f docker-compose.dev.yml up --build

Then for subsequent commands use:

    docker-compose -f docker-compose.dev.yml up

Then run the fastAPI server using:

    uvicorn src.main:app --reload
