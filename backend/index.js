import dotenv from 'dotenv'
dotenv.config();
import express from 'express';
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Joke 1',
            content: 'Why don’t skeletons fight each other? They don’t have the guts.'
        },
        {
            id: 2,
            title: 'Joke 2',
            content: 'Why was the math book sad? Because it had too many problems.'
        },
        {
            id: 3,
            title: 'Joke 3',
            content: 'What did one wall say to the other? "I’ll meet you at the corner."'
        },
        {
            id: 4,
            title: 'Joke 4',
            content: 'Why do bees have sticky hair? Because they use honeycombs.'
        }
    ];
    
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});