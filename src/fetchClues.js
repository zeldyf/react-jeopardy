const fetchClues = async ({queryKey}) =>{
    const id = queryKey[1];

    const response = await fetch(
        `https://jservice.io/api/clues?category=${id}`
    );

    if (!response.ok){
        throw new Error(`Fetch not ok: Category ID ${id}`)
    };

    return response.json();
}

export default fetchClues;