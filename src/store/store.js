import { applyMiddleware, createStore } from "redux";
import Reducers from "../reducers/reducers";
import thunk from "react-thunk";


const middleware = applyMiddleware(thunk);
const store = createStore(Reducers, middleware);


export default Store;