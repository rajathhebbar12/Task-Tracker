import PropType from 'prop-types'
// import {Button} from './Button'
import Button from './Button'
import { useLocation } from 'react-router-dom'
// const Header=(props)=>
const Header=({title,onAdd,showAdd})=>{
    const location=useLocation()
    return(
    <header className='header'>
        <h1 /*style={{color:'red',backgroundColor:'black'}},style={headerStyle}*/>{title}</h1>
        {location.pathname==='/' && (<Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />)}
        {/* <Button color='red' text='Hello 1'/>
        <Button color='blue' text='Hello 2'/> */}
    </header>
)
}
Header.defaultProps={
    title:'Task Tracker',
}

Header.PropType={
    title:PropType.string.isRequired,
}

// CSS can be done like this also
// const headerStyle={
//     color:'red',
//     backgroundColor:'black',
// }

export default Header;