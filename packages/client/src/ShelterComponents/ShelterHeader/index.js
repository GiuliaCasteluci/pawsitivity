import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
// import HeaderIcons from '../HeaderIcons';
import styled from 'styled-components';

// components are written with upper case letters
//HeaderContainer involves  the entire heading 
const ContainerShelter = styled.header`
        background-color: #FFF;
        display: flex;
        gap: 800px;
        flex-direction: row;
        overflow: hidden;
        padding: 20px 10px;

`

function Header() {
    return (
       <ContainerShelter>
            <Logo />
            <HeaderOptions />
            {/* <HeaderIcons /> */}
       </ContainerShelter>
    )
}

export default Header;