import fetchCategories from "./fetchCategories";
import { useQuery } from "@tanstack/react-query";

const params = {
    count: 100,
    offset: Math.floor(Math.random() * (500 - 1) + 1),
};

export default function useCategories (){
    const results = useQuery(["category", params], fetchCategories);

    return [results?.data ?? [], results.status];
}