const fetchCategories = async ({queryKey}) => {
    const {count, offset } = queryKey[1];

    const response = await fetch(
        `https://jservice.io/api/categories?count=${100}&offset=${(Math.floor(Math.random() * (500 - 1) + 1))}`
    );

    if (!response.ok){
        throw new Error(`Fetch not ok: ${count}, ${offset}`)
    };

    return response.json()
};

export default fetchCategories;