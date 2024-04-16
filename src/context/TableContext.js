import { createContext, useContext, useEffect, useState } from "react";
import { collegeData } from "../data/collegeData";

const tableContext = createContext();

export const useTable = ()=>{
    const value = useContext(tableContext);
    return value
}

export const TableProvider = ({children})=>{
    const [searQuery, setSearchQuery] = useState('');
    const [filterText, setFilterText] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
    const [hasMore, setHashMore] = useState(true)


    useEffect(()=>{
        fetchedData();
    },[]);

    const fetchedData = ()=>{
        let extendData = [];
        for(let i=0; i<5; i++){
            extendData = extendData.concat([...collegeData])
        }
        setFilterText(extendData)
        if(filterText.length>=collegeData.length){
            setHashMore(false)
        }
    }

    useEffect(()=>{
        const filterItem = collegeData.filter((item)=>item.collegeName.toLowerCase().includes(searQuery.toLowerCase()));
        setFilterText(filterItem)
    },[collegeData, searQuery]);

    const sortData = (key, direction)=>{
        const sortedData = [...filterText].sort((a,b)=>{
            if(a[key]<b[key]){
                return direction === 'ascending'? -1 : 1;
            }
            if(a[key]>b[key]){
                return direction === 'ascending'? 1 : -1;
            }
            return 0
        });
        setFilterText(sortedData);
    }

    useEffect(()=>{
        if(sortConfig.key){
            sortData(sortConfig.key, sortConfig.direction)
        }
    },[sortConfig])

    const handleSortchange = (key, direction)=>{
        setSortConfig({key, direction})
    }



    return(
        <tableContext.Provider value={{searQuery, 
        setSearchQuery, 
        filterText, 
        handleSortchange, 
        sortConfig, 
        hasMore,
        fetchedData}}>
            {children}
        </tableContext.Provider>
    )
}