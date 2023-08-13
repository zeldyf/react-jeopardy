import _ from "lodash";
import Gameboard from "./Gameboard";
import useCategories from "./useCategories";

const CategorySelect = () => {
    const numCategories = 6;
    const numClues = 5; 
    const [results] = useCategories();
    console.log(results);

    return (
        results.length ? (
            <Gameboard categories={_.sampleSize(results.filter(category => category.clues_count >= numClues), numCategories)}/>
        ) : 
        <div className="loading-pane">
                <h2 className="loader">❓</h2>
        </div>
    )
}

export default CategorySelect;