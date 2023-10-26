import React, { useState } from 'react';
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
import { storeContext } from "../Store/StoreProvider"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function Carrousel() {
  const [store, dispatch] = React.useContext(storeContext);
  const arrayProp = store?.propiedades;

  function tomarDatosStore() {
    const primerosCincoDatos = [];
    
    for (let i = 0; i < 6 && i < arrayProp.length; i++) {
      const dato = arrayProp[i];
      primerosCincoDatos.push(dato);
    }
    
    return primerosCincoDatos;
  }

  const datosDelCarrousel = tomarDatosStore(); // Obtiene los datos del store


  
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = datosDelCarrousel.length; // Usar los datos del carrousel

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  }

  return (
    <Box sx={{ maxWidth: 800, flexGrow: 1, position: 'relative' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {datosDelCarrousel.map((step, index) => (
          <div key={index}>
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
                  src={step.imgsrc[0]}
                 
                />
                <div style={{ position: 'absolute', display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', alignItems: 'flex-start', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '10px', zIndex: 1 }}>
                  <p style={{ fontSize: '50px', marginBottom: '0px' }}>Descripción: {step.descripcion}</p>
                  <p style={{ fontSize: '50px', marginTop: '0px' }}>Precio: {step.precio}</p>
                  <p style={{ fontSize: '18px', width: '600px' }}>Dep: {step.ubicacion}</p>
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
