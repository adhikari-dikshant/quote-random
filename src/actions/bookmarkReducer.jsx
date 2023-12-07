const initialState = {
    bookmarks: [],
};

const bookmarkReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_BOOKMARKS':
            return {
                ...state,
                bookmarks: [...state.bookmarks, action.payload],
            };

        default:
            return state;
    }
};

export default bookmarkReducer;
