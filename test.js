const raccoon = require('raccoon');

raccoon.liked('Tegan', 'Gross Clinic').then(() => {
    return raccoon.liked('Tegan', 'The Virgin Mary');
}).then(() => {
    return raccoon.liked('Tegan', 'Sunflowers');
}).then(() => {
    raccoon.allLikedFor('Tegan').then((results) => {
        // returns an array of all the items that user has liked.
        console.log('Tegan, you liked: ', results);
    });
});

raccoon.liked('Darren', 'Sunflowers').then(() => {
    return raccoon.liked('Darren', 'The Virgin Mary');
}).then(() => {
    return raccoon.liked('Darren', 'Mona Lisa');
}).then(() => {
    raccoon.allLikedFor('Darren').then((results) => {
        // returns an array of all the items that user has liked.
        console.log('Darren, you liked: ', results);
    }).then(() => {
        raccoon.liked('Victor', 'Sunflowers').then(() => {
            return recommendFor('Victor', 10).then((results) => {
                // Recommends The Virgin Mary, Mona Lisa, and The Gross Clinic for Victor
                console.log('Victor, we think you`ll also like: ', results);
            });
        });
    });
});