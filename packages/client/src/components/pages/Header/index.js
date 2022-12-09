import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
// import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';

// components are written with upper case letters
//HeaderContainer involves  the entire heading 
const HeaderContainer = styled.header`


`

function Header() {
    return (
       <HeaderContainer>
            <Logo />
            <HeaderOptions />
            {/* <HeaderIcons /> */}
       </HeaderContainer>
    )
}

export default Header;