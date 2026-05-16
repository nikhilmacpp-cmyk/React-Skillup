import {useRef} from  'react'
import Counter from './component/Counter';
import Theme from "./component/Theme"
import Users from "./component/Users"
import Posts from "./component/Post"
const App = () =>{
   
    return (
        <>
        <Counter/>
        <span>----------------------</span>
        <Theme/>
        <span>----------------------</span>
        <Users/>
        <span>----------------------</span>
        <Posts/>
        <span>----------------------</span>
        </>
    )
}
 export default  App
