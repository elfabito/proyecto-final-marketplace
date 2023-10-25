import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const lista = [
  {
    departamento: 'Maldonado',
    precio:'2000',
    descripcion:'Es una linda propiedad ubicadad en la concha bien peluda de tu vieja ',
    link:'https://caca',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      cantidad: 5,
      precio: '$10.99',
      descripcion: 'Breve descripción del producto 1',
      link: 'https://ejemplo.com/producto1',
    },
  {
    departamento: 'San Carlos',
    precio:'2000',
    descripcion:'Esta propiedad tiene una hermosa vista a la muerte, donde podemos observar la villa, llena de negros. Ademas sueles ver apuñalamientos en vivo, ya que hay muchos motochorros locos por la dorga ',
   
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      cantidad: 5,
      precio: '$10.99',
      descripcion: 'Breve descripción del producto 1',
      link: 'https://ejemplo.com/producto1',
    },
  {
    departamento: 'Montevideo',
    precio:'2000',
    descripcion:'blablalawdawdadwwaddadwadawdawdawdawdwaddawdadwwad',
    
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
      cantidad: 5,
      precio: '$10.99',
      descripcion: 'Breve descripción del producto 1',
      link: 'https://ejemplo.com/producto1',
    },
  {
    departamento: 'Florida',
    descripcion:'blablalawdawdawdawddwaadwwadawdadwdwadwadawd',
    precio:'2000',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const [store ,dispatch] = React.useContext(storeContext)

function Carrousel() {
  //const arrayProp = store.nuevoArray;
  const arrayProp = props.nuevoArray;
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = arrayProp.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, position: 'relative' }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {arrayProp.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div style={{ position: 'relative' }}>
                <Box
                  component="img"
                  sx={{
                    height: 600,
                    display: 'block',
                    maxWidth: 800,
                    overflow: 'hidden',
                    width: 'auto',
                    position: 'relative',
                    zIndex: 0,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <div style={{ position: 'absolute' ,display:'flex',justifyContent: 'flex-end', flexDirection:'column', alignItems:'flex-start',top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px', zIndex: 1 }}>
                  <p style={{ fontSize: '50px', marginBottom:'0px'  }}>Descripción: {step[0]}</p>
                  <p style={{ fontSize: '50px', marginTop:'0px' }}>Precio: {step[1]}</p>
                  <p style={{ fontSize: '18px', width:'600px' }}>Dep: {step[2]}</p>
                  <a
                    href={step.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '18px',
                      position: 'absolute',
                      right: '10px',
                      bottom: '10px',
                      color: 'white',
                      textDecoration: 'none',
                      
                    }}
                  >
                    Más información
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Carrousel;