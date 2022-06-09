const polls = [
    {
        id: '12345',
        title: 'What is Your Favorite Programming Language?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore fuga itaque nostrum blanditiis corporis quia neque quibusdam ipsam facilis.',
        options: [
            { id: '123', value: 'C programming', vote: 0 },
            { id: '124', value: 'Java', vote: 0 },
            { id: '125', value: 'JavaScript', vote: 0 },
            { id: '126', value: 'Python', vote: 0 },
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '12346',
        title: 'Which Frontend Framework Do You Prefer?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore fuga itaque nostrum blanditiis corporis quia neque quibusdam ipsam facilis.',
        options: [
            { id: '127', value: 'Angular', vote: 0 },
            { id: '128', value: 'React', vote: 0 },
            { id: '129', value: 'Veu', vote: 0 }
        ],
        created: new Date(),
        totalVote: 0,
        opinions: []
    },
    {
        id: '12347',
        title: 'What is The Best Way To Create Andorid App?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore fuga itaque nostrum blanditiis corporis quia neque quibusdam ipsam facilis.',
        opinions: [
            { id: '131', value: 'Java', vote: 0 },
            { id: '132', value: 'Kotlin', vote: 0 },
            { id: '133', value: 'React Native', vote: 0 },
            { id: '134', value: 'Ionic', vote: 0 },
        ],
        created: new Date(),
        totalVote: 0,
        options: []
    }
]

export default polls;