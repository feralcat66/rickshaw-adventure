

const monkey = {
    id: 'monkey-temple',
    title: 'Monkey Business at Monkey Temple',
    map: {
        top: '75%',
        left: '30%',
    },
    image: 'monkey-temple.jpg',
    description: `
        Your customer wants you to drive them to the ancient monkey temple on the edge of the city. You've recently heard some wild rumors about monkey-mishaps, but you decide to take them anyways.
        *** Oh No!!! ***
        As soon as you arrive your customer makes the mistake of feeding one of the monkeys. The problem? They only brought one banana! Now the other monkeys are getting angry and violent. They will soon start to attack. What do you do? 
    `,
    choices: [{
        id: 'book-it',
        description: 'Book It! Grab your customer and step on it!',
        result: `
            Oh man, looks like you made the wrong choice. Monkeys are pretty fast when they're angry. The weight of your customer really slowed your rickshaw down too. The monkeys drag your customer right out of the rickshaw. Luckily you were able to make it away with only a few scratches. Ah man, your customer forgot to pay you too. What a day.
        `,
        hp: -10,
        rupees: 0
    }, {
        id: 'offer-substances',
        description: 'Offer the monkeys illicit substances.',
        result: `
            'What were you thinking!? The monkeys wanted bananas. The monkeys are not pleased and close in on you. They're gonna mess you up. OH THE HUMANITY!!
        `,
        hp: -50,
        rupees: 0
    }, {
        id: 'sacrifice',
        description: 'Push your customer down and let the monkeys quench their thirst for blood.',
        result: `
            Luckily the monkeys are distracted enough for you to make your escape. Your customer had that one coming. You explicitly told them not to bring bananas!
        `,
        hp: 25,
        rupees: 500  
    }]
};

const thamel = {
    id: 'thamel-adventure',
    title: 'A Trip Through Thamel',
    map: {
        top: '50%',
        left: '50%'
    },
    image: 'party.png',
    description: `
        Your customer is a hippy that just arrived from the airport. Obviously you will be taking them to Thamel, the hippy central of Kathmandu. When you drop your customer off, you notice a strange, yet enchanting music coming from a nearby rooftop bar. You decide to check it out.
        *** Oh No! ***
        You stumbled in on a dark-psy party. You're surrounded by a tangle of dreadlocks, large-gauged piercings, and a steady pumping of sinister bass. What do you do?
    `,
    choices: [{
        id: 'eat-the-stash',
        description: 'take your stash of illicit substances and get down to that bass boi!',
        result: `
            What seemed like a scary situation actually turned out to be a pretty great party. You have the time of your life and make friends that will turn into life long customers for your rickshaw business. You are awarded 20 hp points and 10,000 rupees.
        `,
        hp: 40,
        rupees: 10000
    }, {
        id: 'dreadlock',
        description: 'Grab onto the nearest dreadlock and attempt to jungle-vine-swing your way out.',
        result: `
            Oh no... did you forget you were on the roof? The dread you chose was too long, and your tarzan swing was too powerful. You fling yourself right onto the roof of your rickshaw below. Rough night, bud.
        `,
        hp: -50,
        rupees: -1000
    }, {
        id: 'DJ',
        description: 'Work your way to the DJ booth and become the DJ.',
        result: `
            Oh no... Your folk mix didn't really go over that well with the crowd. They form a mob and throw you over the railing. Luckily there is a dumpster below to break your fall... But the crowd stole your wallet. You lose 200 rupees and suffer some minor scrapes and bruises.
        `,
        hp: -10,
        rupees: -200
    }]
};

const crazyCustomer = {
    id: 'crazy-customer',
    title: 'Crazy Customer',
    map: {
        top: '60%',
        left: '65%'
    },
    image: 'skull-face.jpg',
    description: `
        You are having a normal day driving around some of your regular customers, until all of a sudden you get a customer out of the ordinary...
        *** Oh No! ***
        You accidentally picked up one of Kathmandu's creepy skull-faced gang members. Now he's trying to rob you. What do you do??
    `,
    choices: [{
        id: 'chillum',
        description: 'Throw your marble chillum at his face!',
        result: `
            He dodges your throw. looks like you're in trouble now. He lashes out at you and your rickshaw crashes into oncoming traffic. That's gonna cost you.
        `,
        hp: -75,
        rupees: -10000
    }, {
        id: 'dogs',
        description: 'Summon a pack of stray dogs to attack him.',
        result: `
            The street dogs come rushing to your aid and jump on your attacker. Good thing you spent many years practicing the art of dog summoning. You thank the dogs and they offer you a gift of 5000 rupees.
        `,
        hp: 10,
        rupees: 5000
    }, {
        id: 'tattoo',
        description: 'Attempt to reason with him by giving yourself a quick face tattoo with some cigarette ash.',
        result: `
            He no longer wants to hurt you, but he is still going to take the money you have on you. You lose 500 rupees.
        `,
        hp: 0,
        rupees: -500
    }]
};

const quests = [
    monkey,
    thamel,
    crazyCustomer,
];

export default quests;
