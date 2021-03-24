export const RESET_STORE = 'RESET_STORE';
export const SAMPLE = 'SAMPLE';



export const resetStore = () => ({
    type: RESET_STORE,
    payload: {

    }
});

export const sample = (data) => (
    {
        type: SAMPLE,
        data
    }
);

