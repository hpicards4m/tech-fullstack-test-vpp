# Fullstack hiring homework
Clone this repo and push in branch, tell us once you've finished.


## Backend hiring homework (Java Srping Boot)

Note that this project is pre-configured with some IntelliJ specific settings.
As such we advise you to use IntelliJ as an IDE to do this exercise.

### Tasks

1. Implement the `GET /points-of-interest` and `POST /points-of-interest` endpoints from the `PointOfInterestController`
2. Add pagination on the `GET /points-of-interest`
3. Unit test your code

### Constraints

* Use an implementation of `ExcelFileProcessor`
* Make the data persistent by using JPA & H2

### Prerequisites

* Java 17

## Frontend hiring homework (Typescript / ReactJS)

1. Integrate the "upload" component from PrimeReact and connect it to your endpoint so the user can upload the `PointsOfInterest.xlsx` through the UI.
2. Create and fill a list built of `ressourceItem` components with the data coming from the `GET ` endpoint
3. Display the metadata of the point of interest on the map
4. Add pagination to improve performance on the list
