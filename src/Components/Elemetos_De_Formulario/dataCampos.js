const dataCampos = {
  tipoDePublicacion: [
    {
      value: 'Alquiler',
      label: 'Alquiler',
    },
    {
      value: 'Venta',
      label: 'Venta',
    },
    {
      value: 'VentaTemporal',
      label: 'Venta Temporal',
    },
  ],
  tipoDePropiedad: [
    {
      value: 'Casa',
      label: 'Casa',
    },
    {
      value: 'Apartamento',
      label: 'Apartamento',
    },
    {
      value: 'Terreno',
      label: 'Terreno',
    },
    {
      value: 'Local Comercial',
      label: 'Local Comercial',
    },
    {
      value: 'Oficina',
      label: 'Oficina',
    },
    {
      value: 'Chacra o Campo',
      label: 'Chacra o Campo',
    },
    {
      value: 'Garage o Cochera',
      label: 'Garage o Cochera',
    },
    {
      value: 'Negocio Especial',
      label: 'Negocio Especial',
    },
    {
      value: 'Edificio',
      label: 'Edificio',
    },
    {
      value: 'Hotel',
      label: 'Hotel',
    },
    {
      value: 'Local Industrial o Garaje',
      label: 'Local Industrial o Garaje',
    },
    {
      value: 'Otro',
      label: 'Otro',
    },
  ],
  tipoPrecio: [
    {
      value: '$',
      label: 'Pesos Uruguayos',
    },
    {
      value: 'u$',
      label: 'Dólares estadounidenses',
    },
  ],
  aceptaMascotasOptions: [
    {
      value: 'si',
      label: 'Sí',
    },
    {
      value: 'no',
      label: 'No',
    },

  ],
  garageOptions: [
    {
      value: 'si',
      label: 'Sí',
    },
    {
      value: 'no',
      label: 'No',
    },
  ],
  datosNecesario:
    [
      { label: 'Nombre', type: 'text', value: "title" },
      { label: 'Zona', type: 'text', value: "zona" },
      { label: 'Ubicacion', type: 'text', value: "ubicacion" },
      { label: 'Estado', type: 'text', value: "estado" },
      { label: 'Disposicion', type: 'text', value: "disposicion" },
      { label: 'Piso', type: 'number', value: "piso" },
      { label: 'Dormitorios', type: 'number', value: "dormitorio" },
      { label: 'Baños', type: 'number', value: "banos" },
      { label: 'Año de Construccion', type: 'number', value: "anioConstruccion" },
      { label: 'M² edificados', type: 'number', value: " m2Edificados" },
      { label: 'M² del terreno', type: 'number', value: "m2Terreno" }
    ],

  camposMonetarios: [
    { label: "Precio", value: "precio"},
    {
      label: "Gastos Comunes",value: "gastosComunes"
    }
  ],
}
export default dataCampos;
