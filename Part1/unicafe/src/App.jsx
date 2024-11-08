import { useState } from 'react';

const Header = ({ Text }) => <h1>{Text}</h1>;

const Button = ({ OnClick, Text }) => {
    return <button onClick={OnClick}>{Text}</button>;
};

const Statistics = ({ Good, Bad, Neutral }) => {
    if (Good === 0 && Bad === 0 && Neutral === 0) {
        return <h3>No feedback given</h3>;
    }
    const All = Good + Neutral + Bad;
    const Average = (Good - Bad) / All;
    const Positive = (Good / All) * 100 + ' %';

    return (
        <div>
            <Header Text={'Statistics'} />
            <table>
                <tbody>
                    <StatisticLine Text="Good" Value={Good} />
                    <StatisticLine Text="Neutral" Value={Neutral} />
                    <StatisticLine Text="Bad" Value={Bad} />
                    <StatisticLine Text="All" Value={All} />
                    <StatisticLine Text="Average" Value={Average.toFixed(2)} />
                    <StatisticLine Text="Positive" Value={Positive} />
                </tbody>
            </table>
        </div>
    );
};

const StatisticLine = ({ Text, Value }) => (
    <tr>
        <td>{Text}</td>
        <td>{Value}</td>
    </tr>
);

const App = () => {
    const [Good, setGood] = useState(0);
    const [Neutral, setNeutral] = useState(0);
    const [Bad, setBad] = useState(0);

    const HandleGoodClick = () => setGood(Good + 1);
    const HandleNeutralClick = () => setNeutral(Neutral + 1);
    const HandleBadClick = () => setBad(Bad + 1);

    return (
        <>
            <Header Text="Give Feedback" />
            <Button OnClick={HandleGoodClick} Text="Good" />
            <Button OnClick={HandleNeutralClick} Text="Neutral" />
            <Button OnClick={HandleBadClick} Text="Bad" />
            <Statistics Good={Good} Bad={Bad} Neutral={Neutral} />
        </>
    );
};

export default App;



