import react, {createContext, useState, useEffect} from 'react';
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false); //initial value false
    const [searchResult, setSearchResult ] = useState(false);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories] );
     
    const fetchSelectedCategoryData = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResult(contents)
            setLoading(false);
        })

    }

    return(
       <Context.Provider
       value={{
        loading, 
        setLoading,
        searchResult,
        setSearchResult,
        selectCategories,
        setSelectCategories,
        mobileMenu, 
        setMobileMenu
       }}
       >
        {props.children}
       </Context.Provider>

    );
};