import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

export default function GetCategories() {
    const [data, setData] = useState([]);

    const fetchCategories = async () => {
        const url = `https://jservice.io/api/categories?count=${100}&offset=${(Math.floor(Math.random() * (500 - 1) + 1))}`;

        const response = await axios.get(url);
        setData(response.data);
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    _.sampleSize(data, 5);

    console.log(data);

    // useEffect(()=>{
    // const cluesOverFive = {data}.filter(category=> category.clues_count >= 5);
    // setFilteredData(cluesOverFive);
    // },[data])



    return (
        <thead>
          <tr>
          {data?.filter(category => category.clues_count >= 5).map(data=>
            <th>{data}</th>
          )}
          </tr>
      </thead>
    );
};