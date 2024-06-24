import { splitByComma } from "../../helpers/splitByComma";
import { filterUnique } from "../../helpers/filterUnique";

export const userReducers = {
    state() {
        return {
            data: [],
            currentUser: null,
            isErrorDuringSearch: false,
            isLoading: false,
        }
    },
    mutations: {
        setCurrentUser(state, user) {
            state.currentUser = user;
        },
        setError(state, isError) {
            state.isErrorDuringSearch = isError;
        },
        setData(state, data) {
            state.data = data;
        },
        setIsLoading(state, bool) {
            state.isLoading = bool;
        },
    },
    actions: {
        async useFetchData ({ commit }, char) { 
            const formatedQuery = splitByComma(char.value);
            const allPersons = [];
        
            commit("setIsLoading", true);
        
            async function fetchData(query) {
                try {
                    const response = await fetch(`https://jsonplaceholder.typicode.com/users?${query}`)
                    const data = await response.json()
            
                    allPersons.push(...data);
                    return data;
                }
                catch(err) {
                    console.log(err);
                    commit("setError", true)
                }
                finally {
                    commit("setIsLoading", false);
                }
            }
        
            if (formatedQuery.name && formatedQuery.id) {
                const promiseName = fetchData(formatedQuery.name);
                const promiseID = fetchData(formatedQuery.id);
        
                try {
                    const [dataName, dataID] = await Promise.all([promiseName, promiseID]);
                    const splashData = [...dataName, ...dataID]
                    
                    commit("setData", filterUnique(splashData));
                    return;
                }
                catch(err) {
                    commit("setError", true);
                }
            }
            else {
                if (formatedQuery.name) fetchData(formatedQuery.name);
                if (formatedQuery.id) fetchData(formatedQuery.id);
            }
        
            commit("setData", allPersons);
        }
    },
    getters: {
 
    },
};