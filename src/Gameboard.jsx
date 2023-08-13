import Categories from "./Categories";
import Questions from "./Questions";


const Gameboard = ({ categories }) => {
    console.log(categories);

    return (
        categories ? (
            <div className="gameboard">
                <table>
                    <thead>
                        <Categories categories={categories} />
                    </thead>
                    <tbody>
                        <Questions categories={categories}/>
                    </tbody>
                </table>
            </div>
        ) : null
    )
}

export default Gameboard;