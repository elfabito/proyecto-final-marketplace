import { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Data from './Data'
import './Filters.css'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
let filtros = {
  localidades: [],
  estado: [],
  tipo: [],
  dormitorios: [],
  precio: [],
  extraFilters: [],
}

const ITEM_HEIGHT = 44
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
}

function getStyles(name, theme) {
  return {
    fontWeight: theme.typography.fontWeightMedium,
  }
}

function Filters() {
  const theme = useTheme()
  const [filtro, setFiltro] = useState(filtros)

  const [localidades, setLocalidades] = useState([])
  const [estado, setEstado] = useState([])
  const [tipo, setTipo] = useState([])
  const [dormitorios, setDormitorios] = useState([])
  const [precio, setPrecio] = useState([])
  const [extraFilters, setExtraFilters] = useState([])

  useEffect(() => {
    filtros = {
      localidades: localidades,
      estado: estado,
      tipo: tipo,
      dormitorios: dormitorios,
      precio: precio,
      extraFilters: extraFilters,
    }
    setFiltro(filtros)
  }, [localidades, estado, tipo, dormitorios, precio, extraFilters])

  const handleChangeLocalidades = (event) => {
    const {
      target: { value },
    } = event
    setLocalidades(value)
  }

  const handleChangeEstado = (event) => {
    const {
      target: { value },
    } = event
    setEstado(value)
  }

  const handleChangeTipo = (event) => {
    const {
      target: { value },
    } = event
    setTipo(value)
  }

  const handleChangeDormitorios = (event) => {
    const {
      target: { value },
    } = event
    setDormitorios(value)
  }

  const handleChangePrecio = (event) => {
    const {
      target: { value },
    } = event
    setPrecio(value)
  }

  const handleChangeExtraFilters = (event) => {
    const {
      target: { value },
    } = event
    setExtraFilters(typeof value === 'string' ? value.split(',') : value)
  }

  const resetFilters = () => {
    filtros = {
      localidades: [],
      estado: [],
      tipo: [],
      dormitorios: [],
      precio: [],
      extraFilters: [],
    }
    setFiltro(filtros)
  }

  return (
    <div>
      <div className='filtritos'>
        {filtro.localidades.map((item) => {
          return <Chip label={item} />
        })}
        {filtro.estado.map((item) => {
          return <Chip label={item} />
        })}
        {filtro.tipo.map((item) => {
          return <Chip label={item} />
        })}
        {filtro.dormitorios.map((item) => {
          return <Chip label={item} />
        })}
        {filtro.precio.map((item) => {
          return <Chip label={item} />
        })}
        {filtro.extraFilters.map((item) => {
          return <Chip label={item} />
        })}
        <Button variant='outlined' onClick={resetFilters}>
          Borrar Filtros
        </Button>
      </div>
      <div className='selects'>
        <FormControl className='selects'>
          <Stack direction='row' spacing={2}>
            <FormControl>
              <Select
                multiple
                displayEmpty
                onChange={handleChangeLocalidades}
                value={localidades}
                key={localidades}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Localidades</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Localidades</em>
                </MenuItem>
                {Data.localidades.map((name) => (
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
                  return <em>Estado</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Estado</em>
                </MenuItem>
                {Data.estado.map((name) => (
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
                  return <em>Tipo</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Tipo</em>
                </MenuItem>
                {Data.tipo.map((name) => (
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
                  return <em>Dormitorios</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Dormitorios</em>
                </MenuItem>
                {Data.dormitorios.map((name) => (
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
                onChange={handleChangePrecio}
                value={precio}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Precio</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Precio</em>
                </MenuItem>
                {Data.precio.map((name) => (
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
                onChange={handleChangeExtraFilters}
                value={extraFilters}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  return <em>Otros filtros</em>
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value=''>
                  <em>Otros filtros</em>
                </MenuItem>
                {Data.extraFilters.map((name) => (
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
  )
}

export default Filters
