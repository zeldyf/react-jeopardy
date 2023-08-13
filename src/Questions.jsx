import Clues from "./Clues"

const Questions = ({ categories }) => {
    return (
        categories ? 
            categories.map((category, i) => {
                return (
                    <tr key={i} id={i}>
                        <Clues id={category.id}/>                
                    </tr>
                )
            }
        ) : null
    )
}

export default Questions;