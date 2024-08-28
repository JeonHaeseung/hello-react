import { memo } from 'react';
import Avatar from "boring-avatars";

const exampleNames = [
    'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah',
    'Isaac', 'Jack', 'Kara', 'Liam', 'Mia', 'Noah', 'Olivia', 'Paul',
    'Quinn', 'Rachel', 'Steve', 'Tina', 'Ursula', 'Vera', 'Walter', 'Xena',
    'Yara', 'Zach', 'Anna', 'Ben', 'Clara', 'Daniel', 'Ella', 'Finn', 'Gina',
    'Henry', 'Ivy', 'James', 'Kate', 'Leo', 'Maya', 'Nina', 'Oscar', 'Piper',
    'Quincy', 'Riley', 'Sophie', 'Tom', 'Uma', 'Victor', 'Will', 'Xander',
    'Yvonne', 'Zane', 'Aria', 'Blake', 'Cody', 'Diana', 'Ethan', 'Fiona',
    'George', 'Holly', 'Ian', 'Judy', 'Kyle', 'Laura', 'Mark', 'Nora',
    'Owen', 'Paige', 'Quinn', 'Ryan', 'Samantha', 'Tyler'
];

const Avatars = memo(function Avatars({ color }) {
    return (
        <div className="grid grid-cols-8 gap-4">
            {exampleNames.map((name) => (
                <Avatar
                    key={name}
                    name={name}
                    variant="beam"
                    size="40px"
                    colors={[color]}
                />
            ))}
        </div>
    );
});

export default Avatars;