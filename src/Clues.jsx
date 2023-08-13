import { useQuery } from "@tanstack/react-query"
import fetchClues from "./fetchClues";
import _ from "lodash";

const Clues = ({ id }) => {
    const { data, status } = useQuery(["category", id], fetchClues);
    const sampled = _.sampleSize(data, 5);

    if (status !== "success") {
        return (
            <div className="loading-pane">
                <h2 className="loader">?</h2>
            </div>
        )
    }

    console.log(sampled);

    return (
        sampled ?
            sampled.map((clue, i) => {
                return (
                    <td key={i}
                        id={i}
                        className="question-mark"
                        onClick={e => {
                            const cell = e.target;
                            if (cell.className === "question-mark") {
                                cell.innerHTML = clue.question;
                                cell.className = "question";
                            } else if (cell.className === "question") {
                                cell.innerHTML = clue.answer;
                                cell.className = "answer";
                            }
                        }}>?
                    </td>)
            }
            )
            : null
    )
}

export default Clues;