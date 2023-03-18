import axiosClient from "../axiosClient.js";

export function searchMeals({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({data}) => {
        // debugger;
        commit('setSearchedMeals', data.meals)
    })
}
