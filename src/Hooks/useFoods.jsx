import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const useFoods = () => {
     // 1. useQuery hook is used to make a data-fetching query.
    const {data: foods} = useQuery({
         // 2. queryKey is an array that serves as a unique identifier for this query.
        queryKey: ["foods"],
        // 3. queryFn is an asynchronous function that fetches the data.
        queryFn: async () => {
            // 4. Axios is used to make an HTTP GET request to the specified API endpoint.
        const res = await axios.get(
            "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        // 5. The response data is returned from the queryFn.
        return res.data;
        },
    })
    // 6. The query result (data) is returned from the custom hook.
    return [foods];
}

export default useFoods