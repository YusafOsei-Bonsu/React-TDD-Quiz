import axios from 'axios';

// export const getCatData1 = (dispatch) => {
//     return (dispatch)=> {
//         axios.get('https://opentdb.com/api_category.php')
//         .then((response) => {
//             const categoryData = response.data;
//             dispatch({ type: 'catDropDown', payload: categoryData});
//         })
//     }
    
// }

export const getCatData = (dispatch) => {
    return (dispatch) => {
        axios.get("https://opentdb.com/api_category.php").then(response => {
            const data = response.data;
            dispatch({ type: 'catDropDown', payload: data });
        })

    }
};