import fetchCategories from "./fetchCategories";
import { useQuery } from "@tanstack/react-query";

export default function useCategories (){
    const params = {
        count: 100,
        offset: Math.floor(Math.random() * (500 - 1) + 1),
    };    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const results = useQuery(["category", params], fetchCategories);

    return [results?.data ?? [], results.status];
}