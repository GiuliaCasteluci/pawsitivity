import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
// import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';
import useAuth from '../../../hooks/useAuth'
// components are written with upper case letters
//HeaderContainer involves  the entire heading 
const HeaderContainer = styled.header`
image.png

`

function Header() {
    // const {
    //     state: { user },
    //     signout,
    //   } = useAuth.useProvideAuth()
    
    return (
       <HeaderContainer>
            <Logo />
            <HeaderOptions />
            {/* <HeaderIcons /> */}
       </HeaderContainer>
    )
}

export default Header;