const dataCampos = {
  tipoDePublicacion: [
    {
      value: 'alquiler',
      label: 'Alquiler',
    },
    {
      value: 'venta',
      label: 'Venta',
    },
    {
      value: 'ventaTemporal',
      label: 'Venta Temporal',
    },
  ],
  tipoDePropiedad: [
    {
      value: 'casa',
      label: 'Casa',
    },
    {
      value: 'apartamento',
      label: 'Apartamento',
    },
    {
      value: 'terreno',
      label: 'Terreno',
    },
    {
      value: 'localComercial',
      label: 'Local Comercial',
    },
    {
      value: 'oficina',
      label: 'Oficina',
    },
    {
      value: 'chacraoCampo',
      label: 'Chacra o Campo',
    },
    {
      value: 'garageoCochera',
      label: 'Garage o Cochera',
    },
    {
      value: 'negocioEspecial',
      label: 'Negocio Especial',
    },
    {
      value: 'edificio',
      label: 'Edificio',
    },
    {
      value: 'hotel',
      label: 'Hotel',
    },
    {
      value: 'localIndustrialoGaraje',
      label: 'Local Industrial o Garaje',
    },
    {
      value: 'otro',
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
    
    { label: 'Armarios empotrados', value: 'armariosEmpotrados' },
    { label: 'Cocina equipada', value: 'cocinaEquipada' },
    { label: 'Chimenea', value: 'chimenea' },
    { label: 'Ascensor', value: 'ascensor' },
    { label: 'Lavandería', value: 'lavanderia' },
    { label: 'Alarma de seguridad', value: 'alarmaDeSeguridad' },
    { label: 'Sistema de videovigilancia', value: 'sistemaDeVideovigilancia' },
    { label: 'Acceso para discapacitados', value: 'accesoParaDiscapacitados' },
    { label: 'Trastero', value: 'trastero' },
    { label: 'Suelos de madera', value: 'sueloDeMadera' },
    { label: 'Sistema de riego automático', value: 'sistemaDeRiegoAutomatico' },
    { label: 'Zona de barbacoa', value: 'zonaDeBarbacoa' },
  ],

  
}
export default dataCampos;
