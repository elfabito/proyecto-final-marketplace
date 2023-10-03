import HotelIcon from '@mui/icons-material/Hotel';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';

const IconDetalle = ({ bano, dormitorio, m2Terreno }) => {
    return (
        <div className='iconDetalle'>
            <p><HotelIcon/> {dormitorio} Dorm <BathtubIcon/> {bano} Baños <SquareFootIcon/> {m2Terreno} m²</p>
        </div>
    );
}

export default IconDetalle;