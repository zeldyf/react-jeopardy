const Categories = ( {categories} ) => {

  return (
    categories ? (
      <tr>
        {
          categories.map((category, i) => {
            return (
              <th key={category.id} id={i}>{category.title.toUpperCase()}</th>
            )
          }
          )}
      </tr>
    ) : null
  )
};

export default Categories;