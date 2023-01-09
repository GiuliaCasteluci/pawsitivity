// import Logo from '../../Logo'
import HeaderOptions from '../HeaderOptions';
import styled from 'styled-components';


//HeaderContainer involves  the entire heading 
// components are written with upper case letters
const HeaderContainer = styled.header`
        background-color: #FFF;
        display: flex;
        gap: 800px;
        flex-direction: row;
        overflow: hidden;
        padding: 20px 10px;
`

function Header() {
    return (
       <HeaderContainer>
            <HeaderOptions />
       </HeaderContainer>
    )
}

export default Header;
