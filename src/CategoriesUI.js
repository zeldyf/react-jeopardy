// import GetCategories from "./Categories";
// import _ from "lodash";


// const numCategories = 6;
// const numClues = 5;

// const [data, setData] = useState(null);
// const [isLoading, setIsLoading]= useState(true);
// const [filteredCategories, setFilteredCategories] = useState(null);

// useEffect(()=>{
//     // fetchCategories();
//     setData(fetchCategories);
//     console.log(data);
//     setIsLoading(false);
//     setFilteredCategories(data.filter(result=>result.clues_count >= numClues));
// }, []);

// const selectedCategories = () =>{
//     const newData = _.sampleSize(filteredCategories, numCategories);
//     console.log(newData);
// }

// return (
// <thead>
//     <tr>
//     {/* {selectedCategories.map((category, i) => {
//         return (
//             <th
//             column={i}
//             key={i}
//             >{category.title.toUpperCase()}</th>
//         )
//     })} */}
//     </tr>
// </thead>
// );
// };