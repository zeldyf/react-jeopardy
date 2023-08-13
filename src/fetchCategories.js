const fetchCategories = async ({queryKey}) => {
    const {count, offset } = queryKey[1];

    const response = await fetch(
        `https://jservice.io/api/categories?count=${count}&offset=${offset}`
    );

    if (!response.ok){
        throw new Error(`Fetch not ok: ${count}, ${offset}`)
    };

    return response.json();
};

export default fetchCategories;