import fetchClues from "./fetchClues";
import { useQuery } from "@tanstack/react-query";


export default function useClues (id){
    const results = useQuery(["category", id], fetchClues);

    return [results?.data ?? [], results.status];
}