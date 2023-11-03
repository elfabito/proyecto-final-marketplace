import { useEffect, useState, useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import './Filters.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import { storeContext } from '../Store/StoreProvider'
import TextField from '@mui/material/TextField'

const ITEM_HEIGHT = 44;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function getStyles(name, theme) {
  return {
    fontWeight: theme.typography.fontWeightMedium,
  };
}

function Filters() {
  const theme = useTheme()

  const [store, dispatch] = useContext(storeContext)

  const [filtro, setFiltro] = useState()

  const [localidades, setLocalidades] = useState([])
  const [estado, setEstado] = useState([])
  const [tipo, setTipo] = useState([])
  const [dormitorios, setDormitorios] = useState([])
  const [moneda, setMoneda] = useState([])
  const [maxPrice, setMaxPrice] = useState(0)
  const [comodidad, setComodidad] = useState([])

  useEffect(() => {
    const filtros = {
      localidades: localidades,
      estado: estado,
      tipo: tipo,
      dormitorios: dormitorios,
      moneda: moneda,
      maxPrice: maxPrice,
      comodidad: comodidad,
    }
    setFiltro(filtros)
  }, [localidades, estado, tipo, dormitorios, moneda, maxPrice, comodidad])

  const handleChangeLocalidades = (event) => {
    const {
      target: { value },
    } = event;
    setLocalidades(value);
  };

  const handleChangeEstado = (event) => {
    const {
      target: { value },
    } = event;
    setEstado(value);
  };

  const handleChangeTipo = (event) => {
    const {
      target: { value },
    } = event;
    setTipo(value);
  };

  const handleChangeDormitorios = (event) => {
    const {
      target: { value },
    } = event;
    setDormitorios(value);
  };

  const handleChangeMoneda = (event) => {
    const {
      target: { value },
    } = event
    setMoneda(value)
  }

  const handleChangeComodidad = (event) => {
    const {
      target: { value },
    } = event
    setComodidad(value)
  }

  const resetFilters = () => {
    setFiltro({})
  }

  return (
    <div>
      <div className='filtritos'>
        {localidades?.map((item) => {
          return <Chip label={item} />
        })}
        {estado?.map((item) => {
          return <Chip label={item} />
        })}
        {tipo?.map((item) => {
          return <Chip label={item} />
        })}
        {dormitorios?.map((item) => {
          return <Chip label={item} />
        })}
        {moneda?.map((item) => {
          return <Chip label={item} />
        })}
        {maxPrice > 0 && <Chip label={'Precio máximo: ' + maxPrice} />}
        {comodidad?.map((item) => {
          return <Chip label={item} />
        })}
        <Button variant="outlined" onClick={resetFilters}>
          Borrar Filtros
        </Button>
      </div>
      <div className="selects">
        <FormControl className="selects">
          <Stack direction="row" spacing={2}>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeLocalidades}
                value={localidades}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Localidades</em>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderLocalidades'>
                  <em>Localidades</em>
                </MenuItem>
                {store.localidades.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeEstado}
                value={estado}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Estado</em>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderEstado'>
                  <em>Estado</em>
                </MenuItem>
                {store.estado.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeTipo}
                value={tipo}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Tipo</em>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderTipo'>
                  <em>Tipo</em>
                </MenuItem>
                {store.tipoPropiedad.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeDormitorios}
                value={dormitorios}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Dormitorios</em>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderDormitorios'>
                  <em>Dormitorios</em>
                </MenuItem>
                {store.dormitorios.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeMoneda}
                value={moneda}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Moneda</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderMoneda'>
                  <em>Moneda</em>
                </MenuItem>
                {store.moneda.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl>
              <TextField
                id='maxPrice'
                label='Precio máximo'
                variant='outlined'
                placeholder='Precio máximo'
                key='placeholderMaxPrice'
                type='number'
                onChange={(e) => {
                  setMaxPrice(e.target.value)
                }}
              />
            </FormControl>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeComodidad}
                value={comodidad}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Otros filtros</em>;
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value='' key='placeholderOtherFilters'>
                  <em>Otros filtros</em>
                </MenuItem>
                {store.comodidad.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </FormControl>
      </div>
    </div>
  );
}

export default Filters;
