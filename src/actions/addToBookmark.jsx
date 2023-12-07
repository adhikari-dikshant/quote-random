export const addToBookmarks = (quoteData) => {
    return {
        type: 'ADD_TO_BOOKMARKS',
        payload: quoteData,
    };
};