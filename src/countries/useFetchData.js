import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const url = 'https://restcountries.com/v3.1/all'
			try {
				const { data: response } = await axios.get(url)
				setData(response)
				setLoading(false);
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, []);

	return {
		data,
		loading,
	};
};

export default useFetchData;