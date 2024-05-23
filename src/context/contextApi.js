import react, {createContext, useState, useEffect} from 'react';
import {fetchDataFromApi} from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false); //initial value false
    const [searchResults, setSearchResults ] = useState([]);
    const [selectCategories, setSelectCategories] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        fetchSelectedCategoryData(selectCategories)
    }, [selectCategories] );
     
    const fetchSelectedCategoryData = (query) => {
        setLoading(true) //loader appear when getting data from api
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
           // console.log(contents);
            setSearchResults(contents || [])
            setLoading(false); //loader disappear when got data from api.
        })

    }

    return(
       <Context.Provider
       value={{
        loading, 
        setLoading,
        searchResults,
        setSearchResults,
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