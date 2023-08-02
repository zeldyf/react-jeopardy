import useCategories from "./useCategories";
import _ from "lodash";


const Categories = () => {
    const params = {
        count: 100,
        offset: Math.floor(Math.random() * (500 - 1) + 1),
    };

    const [categories] = useCategories(params);
    const sampled = _.sampleSize(categories.filter(category => category.clues_count >= 5), 6)

    return (
        <thead>
          <tr>
          {sampled?.map(data=>
            <th>{data}</th>
          )}
          </tr>
      </thead>
    )

};

export default Categories