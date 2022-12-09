import './style.css'

// header navbar
const optionsText = ['About Pet Adoption |', 'Shelters & Resources |', 'Available Pets ']

function HeaderOptions() {
    return (
        <ul className='options'>
            { optionsText.map ( (text) => (
                <li className='option'><p>{text}</p></li>
            ) ) }
        </ul>
    )
}

export default HeaderOptions;