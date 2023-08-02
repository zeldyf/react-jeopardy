import { useQuery } from '@tanstack/react-query';
import fetchCategories from './fetchCategories';
import _ from "lodash";


const Categories = () => {
  const numCategories = 6;
  const numClues = 5;
  const params = {
    count: 100,
    offset: Math.floor(Math.random() * (500 - 1) + 1),
  };

  const results = useQuery(["category", params], fetchCategories);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  const filtered = results.data?.filter(category => category.clues_count >= numClues) ?? [];
  const sampled = _.sampleSize(filtered, numCategories);

  return (
    sampled ? (
      <table className="game-table">
        <thead>
          <tr>
            {sampled.map(category =>
              <th key={category.id}>{category.title.toUpperCase()}</th>
            )}
          </tr>
        </thead>
      </table>
    ) : null
  )
};

export default Categories;