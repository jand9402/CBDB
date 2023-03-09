import { GET_EMAILS
   } from "../actions";


const initialState = {
    caso:[1,2],
    test: [1,2,4]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // case GET_EMAILS:
        //     return{
        //         ...state,
        //         emails: action.payload
        //     }

    };
};

export default rootReducer;
