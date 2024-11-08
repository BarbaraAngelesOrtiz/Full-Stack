import { useState } from 'react';

const Title = ({ content }) => <h1>{content}</h1>;

const DisplayAnecdote = ({ anecdoteText, voteCount }) => (
    <div>
        <div>{anecdoteText}</div>
        <div>has {voteCount} votes</div>
    </div>
);

const ActionButton = ({ label, onClickAction }) => {
    return <button onClick={onClickAction}>{label}</button>;
};

const App = () => {
    const anecdoteList = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is like a doctor refusing to use x-rays or blood tests when diagnosing patients'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [votes, setVotes] = useState(Array(anecdoteList.length).fill(0));

    const topAnecdoteIndex = votes.indexOf(Math.max(...votes));

    const getNextAnecdote = () => {
        const randomIndex = Math.floor(Math.random() * anecdoteList.length);
        setCurrentIndex(randomIndex);
    };

    const voteForAnecdote = () => {
        const updatedVotes = votes.map((count, idx) => (idx === currentIndex ? count + 1 : count));
        setVotes(updatedVotes);
    };

    return (
        <div>
            <Title content="Anecdote of the day" />
            <DisplayAnecdote anecdoteText={anecdoteList[currentIndex]} voteCount={votes[currentIndex]} />
            <ActionButton label="Vote" onClickAction={voteForAnecdote} />
            <ActionButton label="Next Anecdote" onClickAction={getNextAnecdote} />
            <Title content="Anecdote with most votes" />
            <DisplayAnecdote anecdoteText={anecdoteList[topAnecdoteIndex]} voteCount={votes[topAnecdoteIndex]} />
        </div>
    );
};

export default App;
