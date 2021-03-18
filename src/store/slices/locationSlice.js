import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from 'nookies';

const locationSlice = createSlice({
    name: 'position',
    initialState: {
        search: {
            title: '',
            coordinates: {
                latitude: null,
                longitude: null,
            },
        },
        browser: {
            coordinates: {
                latitude: null,
                longitude: null,
            },
            accuracy: null,
            timestamp: null,
            error: null,
        },
    },
    reducers: {
        setSearchLocation(state, action) {
            const { position, title } = action.payload;
            state.search = { position, title };
            setCookie(null, 'position', JSON.stringify(position), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                sameSite: 'Lax',
            });
        },
        setBrowserLocation(state, action) {
            const { position, error } = action.payload;
            state.browser = { position, error };
            setCookie(null, 'position', JSON.stringify(position), {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
                sameSite: 'Lax',
            });
        },
    },
});

const { actions, reducer } = locationSlice;
export const { setSearchLocation, setBrowserLocation } = actions;
export default reducer;
