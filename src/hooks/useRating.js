import useSWR from 'swr';
import subMonths from 'date-fns/subMonths';
import format from 'date-fns/format';
import queryString from 'query-string';
import { fetcher } from '../utils/fetcher';

const options = {};

export const useRating = (search) => {
    const lastMonth = subMonths(new Date(), 2);
    const date = format(lastMonth, 'yyyy-MM');
    const {
        coordinates: { latitude: lat, longitude: lng },
    } = search;

    const query = queryString.stringify({ lat: lat.toFixed(6), lng: lng.toFixed(6), date }, { sort: false });

    const { data, error } = useSWR(`/api/proxy/score?${query}`, fetcher, options);

    return {
        rating: data,
        isLoading: !error && !data,
        isError: error,
    };
};
