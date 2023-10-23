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
    {
      value: 'ARS$',
      label: 'Dólares Argentinos',
    },
  ],
  aceptaOptions: [
    {
      value: true,
      label: 'Sí',
    },
    {
      value: false,
      label: 'No',
    },

  ],

  datosNecesario:
    [
      { label: 'Nombre', type: 'text', value: "title" },
      { label: 'Zona', type: 'text', value: "zona" },
      { label: 'Ubicacion', type: 'text', value: "ubicacion" },
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
 comodidadesOptions : [
    { label: 'Piscina', value: 'piscina' },
    { label: 'Garaje', value: 'garaje' },
    { label: 'Jardín', value: 'jardin' },
    { label: 'Terraza', value: 'terraza' },
    { label: 'Calefacción', value: 'calefaccion' },
    { label: 'Aire acondicionado', value: 'aire-acondicionado' },
    { label: 'Gimnasio', value: 'gimnasio' },
    { label: 'Vistas al mar', value: 'vistas-al-mar' },
    { label: 'Armarios empotrados', value: 'armarios-empotrados' },
    { label: 'Cocina equipada', value: 'cocina-equipada' },
    { label: 'Chimenea', value: 'chimenea' },
    { label: 'Ascensor', value: 'ascensor' },
    { label: 'Lavandería', value: 'lavanderia' },
    { label: 'Alarma de seguridad', value: 'alarma-de-seguridad' },
    { label: 'Sistema de videovigilancia', value: 'sistema-de-videovigilancia' },
    { label: 'Acceso para discapacitados', value: 'acceso-para-discapacitados' },
    { label: 'Trastero', value: 'trastero' },
    { label: 'Suelos de madera', value: 'suelos-de-madera' },
    { label: 'Sistema de riego automático', value: 'sistema-de-riego-automatico' },
    { label: 'Zona de barbacoa', value: 'zona-de-barbacoa' },
  ],
 estadosPropiedad : [
  { label: 'Nuevo', value: 'nuevo' },
  { label: 'Usado', value: 'usado' },
  { label: 'En construcción', value: 'enConstruccion' },
  { label: 'Remodelado', value: 'remodelado' },
  { label: 'A estrenar', value: 'aEstrenar' },
  { label: 'En buen estado', value: 'enBuenEstado' },
  { label: 'Para remodelar', value: 'paraRemodelar' },
  { label: 'Para demoler', value: 'paraDemoler' },
  { label: 'Otro', value: 'otro' },
  ],
  
}
export default dataCampos;
