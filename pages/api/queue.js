import {queue} from './libs'
import {options} from './libs'

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let newOptions = options.map(elem => {
    elem.queue = [...queue];
    return elem;
})

export default (req, res) => {
    if(req.method === 'POST') {
        newOptions = newOptions.map(elem => {
            console.log(elem.value === req.body.value)
            if(elem.value === req.body.value) {
                const date = new Date();
                elem.queue.push({name: req.body.name, date: `${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`})
            }
            return elem;
        })
        res.statusCode = 200
        res.end();
    }
    if (req.method === 'GET') {
        res.statusCode = 200
        res.json({options: newOptions})
    }
}