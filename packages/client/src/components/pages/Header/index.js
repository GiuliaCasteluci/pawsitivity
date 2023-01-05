import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
// import HeaderIcons from '../HeaderIcons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components are written with upper case letters
//HeaderContainer involves  the entire heading 
const HeaderContainer = styled.header`
image.png

`

function Header() {
    return (
       <HeaderContainer>
            <Logo />
            <HeaderOptions />
            <Link to="/login">&nbsp;Sign In</Link>
        <Link to='/petForm'>&nbsp;Pet Form</Link>
        <Link to='/emergency'>&nbsp;Emergency</Link>
       </HeaderContainer>
    )
}

export default Header;