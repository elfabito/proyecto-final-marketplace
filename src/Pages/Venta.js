import React from 'react'
import Carrousel from '../Components/Carrousel';

const Venta = () => {

  const ListadoPropiedades = [
    {
        id: 1,
        title: "Casa en la playa",
        tipoMoneda: "U$D",
        precio: 1200,
        disposicion: "Frente al mar",
        tipoVenta: "Venta",
        ubicacion: ["Punta del Este", "Maldonado"],
        comodidades: ["Piscina", "Cocina Equipada", "Vista al mar", "Jardín"],
        descripcion: "Espectacular casa frente al mar en Punta del Este",
        aceptaMascotasOptions: "Sí",
        zona: "Punta Ballena",
        garaje: "Sí",
        m2Edificados: 400,
        m2Terreno: 1000,
        tipoDePropiedad: "Casa",
        banos: 4,
        dormitorio: 5,
        anioConstruccion: 2015,
        estado: "Excelente estado",
        imgsrc: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg"
        ]
      },
      {
        id: 2,
        title: "Apartamento céntrico",
        tipoMoneda: "U$D",
        precio: 900,
        disposicion: "Interno",
        tipoVenta: "Alquiler",
        ubicacion: ["Centro", "Montevideo"],
        comodidades: ["Aire Acondicionado", "Terraza", "Cocina Equipada"],
        descripcion: "Acogedor apartamento en pleno centro de Montevideo",
        aceptaMascotasOptions: "No",
        zona: "Centro",
        garaje: "No",
        m2Edificados: 80,
        m2Terreno: 0,
        tipoDePropiedad: "Apartamento",
        banos: 1,
        dormitorio: 2,
        anioConstruccion: 2000,
        estado: "Buen estado",
        imgsrc: [
          "https://example.com/image4.jpg",
          "https://example.com/image5.jpg",
          "https://example.com/image6.jpg"
        ]
      },
      {
        id: 3,
        title: "Chalet en el bosque",
        tipoMoneda: "U$D",
        precio: 1500,
        disposicion: "Bosque",
        tipoVenta: "Venta",
        ubicacion: ["Sierras de Minas", "Lavalleja"],
        comodidades: ["Piscina", "Vista al bosque", "Parque amplio"],
        descripcion: "Encantador chalet rodeado de naturaleza en las Sierras de Minas",
        aceptaMascotasOptions: "Sí",
        zona: "Sierras de Minas",
        garaje: "Sí",
        m2Edificados: 200,
        m2Terreno: 3000,
        tipoDePropiedad: "Casa",
        banos: 2,
        dormitorio: 3,
        anioConstruccion: 1990,
        estado: "Muy buen estado",
        imgsrc: [
          "https://example.com/image7.jpg",
          "https://example.com/image8.jpg",
          "https://example.com/image9.jpg"
        ]
      },
      {
        id: 4,
        title: "Piso en el centro histórico",
        tipoMoneda: "U$D",
        precio: 1100,
        disposicion: "Exterior",
        tipoVenta: "Alquiler",
        ubicacion: ["Ciudad Vieja", "Montevideo"],
        comodidades: ["Vista al casco antiguo", "Terraza", "Cocina moderna"],
        descripcion: "Elegante piso con vistas en el corazón de la Ciudad Vieja",
        aceptaMascotasOptions: "No",
        zona: "Ciudad Vieja",
        garaje: "No",
        m2Edificados: 120,
        m2Terreno: 0,
        tipoDePropiedad: "Piso",
        banos: 2,
        dormitorio: 2,
        anioConstruccion: 2012,
        estado: "Excelente estado",
        imgsrc: [
          "https://example.com/image10.jpg",
          "https://example.com/image11.jpg",
          "https://example.com/image12.jpg"
        ]
      },
      {
        id: 5,
        title: "Terreno en las afueras",
        tipoMoneda: "U$D",
        precio: 500,
        disposicion: "Rural",
        tipoVenta: "Venta",
        ubicacion: ["San Ramón", "Canelones"],
        comodidades: ["Terreno amplio", "Vistas al campo"],
        descripcion: "Amplio terreno rural para construir tu casa de ensueño",
        aceptaMascotasOptions: "Sí",
        zona: "San Ramón",
        garaje: "No",
        m2Edificados: 0,
        m2Terreno: 5000,
        tipoDePropiedad: "Terreno",
        banos: 0,
        dormitorio: 0,
        anioConstruccion: null,
        estado: "Sin construcción",
        imgsrc: [
          "https://example.com/image13.jpg",
          "https://example.com/image14.jpg",
          "https://example.com/image15.jpg"
        ]
      },
      {
        id: 6,
        title: "Apartamento en la costa",
        tipoMoneda: "U$D",
        precio: 950,
        disposicion: "Frente al mar",
        tipoVenta: "Alquiler",
        ubicacion: ["Atlántida", "Canelones"],
        comodidades: ["Balcón con vistas", "Cocina Equipada", "Piscina comunitaria"],
        descripcion: "Agradable apartamento con vistas al mar en Atlántida",
        aceptaMascotasOptions: "Sí",
        zona: "Atlántida",
        garaje: "Sí",
        m2Edificados: 70,
        m2Terreno: 0,
        tipoDePropiedad: "Apartamento",
        banos: 1,
        dormitorio: 2,
        anioConstruccion: 2005,
        estado: "Buen estado",
        imgsrc: [
          "https://example.com/image16.jpg",
          "https://example.com/image17.jpg",
          "https://example.com/image18.jpg"
        ]
      },
      {
        id: 7,
        title: "Casa de campo",
        tipoMoneda: "U$D",
        precio: 850,
        disposicion: "Campo",
        tipoVenta: "Venta",
        ubicacion: ["Tacuarembó", "Tacuarembó"],
        comodidades: ["Terreno amplio", "Piscina", "Parque con árboles"],
        descripcion: "Tranquila casa de campo en Tacuarembó",
        aceptaMascotasOptions: "Sí",
        zona: "Tacuarembó",
        garaje: "Sí",
        m2Edificados: 150,
        m2Terreno: 10000,
        tipoDePropiedad: "Casa",
        banos: 2,
        dormitorio: 3,
        anioConstruccion: 1995,
        estado: "Buen estado",
        imgsrc: [
          "https://example.com/image19.jpg",
          "https://example.com/image20.jpg",
          "https://example.com/image21.jpg"
        ]
      },
      {
        id: 8,
        title: "Apartamento en Malvín Norte",
        tipoMoneda: "U$D",
        precio: 1000,
        disposicion: "Contrafrente",
        tipoVenta: "Alquiler",
        ubicacion: ["Malvín Norte", "Montevideo"],
        comodidades: ["Balcón", "Cocina Equipada", "Aire Acondicionado"],
        descripcion: "Amplio apartamento en Malvín Norte, cerca de la playa",
        aceptaMascotasOptions: "Sí",
        zona: "Malvín Norte",
        garaje: "Sí",
        m2Edificados: 90,
        m2Terreno: 0,
        tipoDePropiedad: "Apartamento",
        banos: 2,
        dormitorio: 3,
        anioConstruccion: 2008,
        estado: "Excelente estado",
        imgsrc: [
          "https://example.com/image22.jpg",
          "https://example.com/image23.jpg",
          "https://example.com/image24.jpg"
        ]
      },
      {
        id: 9,
        title: "Casa de playa en La Paloma",
        tipoMoneda: "U$D",
        precio: 1300,
        disposicion: "Frente al mar",
        tipoVenta: "Venta",
        ubicacion: ["La Paloma", "Rocha"],
        comodidades: ["Piscina", "Vista al mar", "Jardín amplio"],
        descripcion: "Hermosa casa de playa en La Paloma, frente al mar",
        aceptaMascotasOptions: "Sí",
        zona: "La Paloma",
        garaje: "Sí",
        m2Edificados: 180,
        m2Terreno: 800,
        tipoDePropiedad: "Casa",
        banos: 3,
        dormitorio: 4,
        anioConstruccion: 2013,
        estado: "Excelente estado",
        imgsrc: [
          "https://example.com/image25.jpg",
          "https://example.com/image26.jpg",
          "https://example.com/image27.jpg"
        ]
      },

  return (
    <div>Venta
     <Carrousel nuevoArray={ListadoPropiedades} />
    
    </div>
  )
}

export default Venta