const fs = require('fs'),
    path = require('path'),
    raccoon = require('raccoon'),
    client = require('./lib/client'),
    config = require('./lib/config'),
    now = require('performance-now'),
    jsonfile = require('jsonfile');

// require('heapdump');

const NUM_USERS_TO_TEST = config.numUsersToTest;
const EQUILIBRIUM = 0.0;

let start, stop;

const file = path.join(__dirname, '/data/hackathonseed-export.json');

const visitorData = jsonfile.readFileSync(file);
const userIds = Array.from(Array(NUM_USERS_TO_TEST).keys()).map((x)=> { return x + 1;});

var visitorArray = []; // Holds array of arrays

const parseData = function () {
    var dataArray = []; // Holds array of objects

    for (var data in visitorData.Dataset) {
        dataArray.push(visitorData.Dataset[data]); // Pushes each JSON object into dataArray
    }

    for (var i = 0; i < dataArray.length; i++) {
        var visitorRating = []; // Holds each rating of an object by a visitor in an array
        visitorRating.push(dataArray[i].user, dataArray[i].objectID, dataArray[i].rating);
        visitorArray.push(visitorRating);
    }
}

parseData();

// console.log(visitorArray);

const createRating = function (line) {
    const [user, object, rating] = line;
    const ratingFunc = rating ? raccoon.liked : raccoon.disliked;
    return ratingFunc(user, object, { updateRecs: false });
};

const updateRec = function (userId) {
    return raccoon.updateSequence(userId, 1, { updateWilson: false }).then(() => {
        return Promise.resolve();
    });
};

const predictCompare = function (line) {
    const [user, object, rating] = line;
    return raccoon.predictFor(user, object).then((prediction) => {
        return [user, Number(rating), prediction];
    });
};

const ratingActions = visitorArray.map(createRating);
// console.log(ratingActions);
const updateActions = userIds.map(updateRec)
// console.log(updateActions);