import {createContext} from "react"

export const FindContext = createContext({cancel:false,setCancel:(c:boolean)=>{}})