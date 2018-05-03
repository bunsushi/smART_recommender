# smART Recommender
A recommendation engine for discovering art at the Philadelphia Museum of Art.

## What's in the Box?

smART Recommender uses the following dependencies:
* [raccoon](https://www.npmjs.com/package/raccoon)
* [redis](https://www.npmjs.com/package/redis)

## Installation

1. `git clone` this repository and then navigate into it

``` bash
git clone git@github.com:bunsushi/smART_recommender.git
cd smART_recommender
```

2. `npm install` to configure all dependencies
3. Open a new terminal window and start the Redis server

``` bash
redis-server
```

4. Return to the terminal window in the `smART_recommender` directory to start any of the below options:

## Demo the Recommender

``` bash
node test.js
```

## Evaluate the Recommender

(In Development)

``` bash
node engine.js
```

## Browser-based Recommender

(In Development)

``` bash
node server.js
```

Your local server should now be running on PORT 8080. Check it out at http://localhost:8080/