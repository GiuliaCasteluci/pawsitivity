import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
import styled from 'styled-components';


//HeaderContainer involves  the entire heading 
// components are written with upper case letters
const HeaderContainer = styled.header`
image.png

`

function Header() {
    return (
       <HeaderContainer>
            <Logo />
            <HeaderOptions />
       </HeaderContainer>
    )
}

export default Header;