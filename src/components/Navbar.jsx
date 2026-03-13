import { useDispatch, useSelector } from 'react-redux'
import { changeThemeToDark, changeThemeToLight, changeThemeToBrown } from '../redux/slices/themeSlice'

const Navbar = () => {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.value)


    return (
        <div className="navbar">
            <h1>Theme : {theme}</h1>

            <button className="theme-light" 
            onClick={() => dispatch(changeThemeToLight())}>Change Theme to Light</button>

            <button className="theme-btn"
            onClick={() => dispatch(changeThemeToDark())}>Change Theme to Dark</button>

            <button className="theme-brown"
            onClick={() => dispatch(changeThemeToBrown())}>Change Theme to Dark</button>
        </div>
    )
}

export default Navbar