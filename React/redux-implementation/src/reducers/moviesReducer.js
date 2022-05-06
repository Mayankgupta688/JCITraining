export default function moviesReducer(movieStore = [], action) {
    if(action.type === "ADD_MOVIES") {
        return action.payload
    }

    if(action.type === "DELETE_ALL_Movies") {
        return [];
    }

    if(action.type === "DELETE_SPECIFIC_Movie") {
        return movieStore.filter((movie) => {
            return movie.id !== action.payload;
        })
    }

    if(action.type === "ADD_EMPLOYEES") {
        return [{movie: "Complience"}]
    }

    return [];
}