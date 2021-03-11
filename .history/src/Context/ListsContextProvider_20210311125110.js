import { withDataFetching } from "../withDataFetching";

export const ListsContext = React.createContext();
const LISTS_DATA_SOURCE = 'https://my-json-server.typicode.com/PacktPublishing/React-Projects/lists';

const ListsContextProvider = ({ children, data }) => (
    <ListsContext.Provider value={{ data }}>
      {children}
    </ListsContext.Provider>
);

export default withDataFetching(LISTS_DATA_SOURCE, ListsContextProvider);