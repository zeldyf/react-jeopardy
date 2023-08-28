import useClues from "./useClues";
import _ from "lodash";

const Clues = ({ id }) => {
    const [results] = useClues(id);
    const sampled = _.sampleSize(results, 5);

    const gamePlay = (cell, clue) => {
        if (cell.className === "question-mark") {
            cell.innerHTML = clue.question;
            cell.className = "question";
        } else if (cell.className === "question") {
            cell.innerHTML = clue.answer;
            cell.className = "answer";
        }
    };

    const checkForFinish = (allCells) => {
        const array = Array.from(allCells); 
        return array.every(cell => cell.className === "answer") 
    }
    
    return (
        sampled ?
            sampled.map((clue, i) => {
                return (
                    <td key={i}
                    id={i}
                    className="question-mark"
                    onClick={e => {
                        gamePlay(e.target, clue);
                        checkForFinish(e.target.parentElement.children);
                    }}>?
                    </td>)
            }
            )
            : null
            )
        }
        
export default Clues;