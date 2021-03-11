import { useEffect, useState } from "react";

export const withDataFetching = (dataSourceProps, WrappedComponent) => {
    return  () => {
        const initialItemsList = {
            data: [],
            loading: true,
            error: ''
        }
        const [listItems, setListItems] = useState(initialItemsList);
        useEffect(() => {
            async function fetchData() {
            try {
                const { dataSource } = dataSourceProps;
                const result = await fetch(dataSource);
                const data = await result.json();
                if (data) {
                    setListItems({...initialItemsList, data, loading: false })
                }
            } catch(error) {
                const { message } = error;
                setListItems({...initialItemsList, error: message })
            }
         } fetchData();     
         }, []);
         return (
             <WrappedComponent {...listItems}/>
         )
    }
}