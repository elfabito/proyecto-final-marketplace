import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Data from './Data'
import './Filters.css'

const filtros = [[], [], [], [], [], []];

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

  const handleChangeLocalidades = (event) => {
    const {
      target: { value },
    } = event
    setLocalidades(typeof value === 'string' ? value.split(',') : value)
  }

  const handleChangeEstado = (event) => {
    const {
      target: { value },
    } = event
    filtros[1].push(value)
    setFiltro(filtros)
  }

  const handleChangeTipo = (event) => {
    const {
      target: { value },
    } = event
    filtros[2].push(value)
    setFiltro(filtros)
  }

  const handleChangeDormitorios = (event) => {
    const {
      target: { value },
    } = event
    filtros[3].push(value)
    setFiltro(filtros)
  }

  const handleChangePrecio = (event) => {
    const {
      target: { value },
    } = event
    filtros[4].push(value)
    setFiltro(filtros)
  }

  const handleChangeExtraFilters = (event) => {
    const {
      target: { value },
    } = event
    filtros[5].push(value)
    setFiltro(filtros)
  }

  const resetFilters = () => {
    setFiltro([[], [], [], [], [], []])
  }

  return (
    <div>
      <div>
        {filtro.forEach(filter => {
          filter.map((elemento) => {
            return <><p>${elemento}</p></>
          })
        })}
     
      </div>
      <div className='selects'>
        <FormControl className='selects'>
          <Select
            multiple
            displayEmpty
            onChange={handleChangeLocalidades}
            value={localidades}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              // if (selected.length === 0) {
              //   return <em>Localidades</em>
              // }
              // return selected.join(', ')
              return <em>Localidades</em>
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Localidades</em>
            </MenuItem>
            {Data.localidades.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
          {/* <Select
            multiple
            displayEmpty
            onChange={handleChangeEstado}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Estado</em>
              }

              return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Estado</em>
            </MenuItem>
            {Data.estado.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            multiple
            displayEmpty
            onChange={handleChangeTipo}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Tipo</em>
              }

              return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Tipo</em>
            </MenuItem>
            {Data.tipo.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            multiple
            displayEmpty
            onChange={handleChangeDormitorios}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Dormitorios</em>
              }

              return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Dormitorios</em>
            </MenuItem>
            {Data.dormitorios.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            multiple
            displayEmpty
            onChange={handleChangePrecio}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Precio</em>
              }

              return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Precio</em>
            </MenuItem>
            {Data.precio.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Select
            multiple
            displayEmpty
            onChange={handleChangeExtraFilters}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Otros filtros</em>
              }

              return selected.join(', ')
            }}
            MenuProps={MenuProps}
            inputProps={{ 'aria-label': 'Without label' }}
          >
            <MenuItem disabled value=''>
              <em>Otros filtros</em>
            </MenuItem>
            {Data.extraFilters.map((name) => (
              <MenuItem key={name} value={name} style={getStyles(name, theme)}>
                {name}
              </MenuItem>
            ))}
          </Select> */}
        </FormControl>
        <Button variant='outlined' onClick={resetFilters}>
          Borrar Filtros
        </Button>
      </div>
    </div>
  )
}

export default Filters
