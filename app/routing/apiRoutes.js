const friendsList = require('../data/friends');

module.exports = function(app) {
    app.get('api/friends', function(req, res) {
        res.json(friendsList);
    });

    // Create a new friend
    app.post('/api/friends', function(req, res) {
        const newFriend = req.body;
        const newScore = 0;
        const total = 0;
        const match = {
            '',
            photo: '',
            difference: 100
        };

        // Calculator
        for (let i = 0; i < friendsList.length; i++) {
            total = 0;

            for (let j = 0; j < friendsList[i].preferences.length; j++) {
                total += Math.abs(friendsList[i].preferences[j] - newFriend.preferences[j]);

                if (total <= match.difference) {
                    match.name = friendsList[i].name,
                        match.photo = friendsList[i].photo,
                        match.difference = total
                }
            }
        }
        friendsList.push(newFriend);
        res.json(match);
        console.log(match);
    });
};