import logo from '../../images/pngwing.com.png'
import styled from 'styled-components'

//logo title
const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
    font-size: 35px;
`
//logo image
const LogoImage = styled.img`
    margin-right: 10px;
    height: 150px;
    width: 400px;  

`

function Logo() {
  return (
    <LogoContainer>
      <LogoImage
        src={logo}
        alt='logo'
      />
      <p><strong>Pawsitivity</strong> <br></br> Choose Adoption</p>
    </LogoContainer>
  )
}

export default Logo