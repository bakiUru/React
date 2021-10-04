import  React,{useState, useEffect}  from 'react';
import './Servicios.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';





const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


const Servicios = (props) => {

//Agrega al carrito
const [servAdd, SetservAdd] = useState(1);

useEffect(()=>{

      
},[servAdd]);

//guarda la cantidad de compras
const shopp = () =>{
    SetservAdd (servAdd + 1);
    console.log(servAdd);
    localStorage.setItem("carrito",servAdd);
}



//Control Cbox Instalacion
const [Instalacion, setservInst] = React.useState(''); 
useEffect(()=>{   
   
},[Instalacion])
const handleChangeInst = (event) => {
    
          setservInst(event.target.value);
        };

//Control Cbox Tipo
const [Tipo, setservTipo] = React.useState('');    
const handleChangeTipo = (event) => {
          setservTipo(event.target.value);
        };
//Control Cbox SCADA
const [Scada, setservScada] = React.useState('');    
const handleChangeScada = (event) => {
          setservScada(event.target.value);
        };
    
const instalacion=JSON.parse(localStorage.getItem("listaInstalacion"));    
const servicios=JSON.parse(localStorage.getItem("Servicios"));     
    return (
        <div className="contenedor-servicios">
            <Box sx={{ flexGrow: 1}}>
            
                    <div className="servicios">
            
                    <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}>
                        <Item ><h2 id="nameS">{servicios[props.id-1].name}</h2></Item>
                        <Item>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={servicios[props.id-1].img}
                                    alt="Servicios"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    {servicios[props.id-1].texto}
                                    </Typography>

                                    </CardContent>
                                </CardActionArea>
        
                                </Card>
                                <Typography variant="h5" padding-top="50px">
                                      {servicios[props.id-1].desc}
                                    </Typography>
                        </Item>
                        <Item><Box sx={{ minWidth: 120 }}>
                           <Typography variant="h6" color="text.secondary" padding-top="50px" elevation={3}>
                                      Seleccione el tipo de Instalación: 
                                    </Typography> 
       

                            <FormControl fullWidth>

                                <InputLabel id="demo-simple-select-label">Instalacion</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Instalacion}
                                label="Instalacion"
                                onChange={handleChangeInst}
                                >
                                
                                <MenuItem value={instalacion[0].inst[0]}>{instalacion[0].inst[0]}</MenuItem>
                                <MenuItem value={instalacion[0].inst[1]}>{instalacion[0].inst[1]}</MenuItem>
                                <MenuItem value={instalacion[0].inst[2]}>{instalacion[0].inst[2]}</MenuItem>
                                
                  
    
                                    
                                </Select>
                            </FormControl>
                        </Box></Item>
                        <Item><Box sx={{ minWidth: 120 }}>
                        <Typography variant="h6" color="text.secondary" padding-top="50px">
                                      Seleccione el tipo de Automatizacion: 
                                    </Typography>
                            <FormControl fullWidth>

                                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Tipo}
                                label="Tipo"
                                onChange={handleChangeTipo}
                                >
                                
                                <MenuItem value={instalacion[1].tServ[0]}>{instalacion[1].tServ[0]}</MenuItem>
                                <MenuItem value={instalacion[1].tServ[1]}>{instalacion[1].tServ[1]}</MenuItem>


                                    
                                </Select>
                            </FormControl>
                            </Box>
                        </Item>
                        <Item><Box sx={{ minWidth: 120 }}>
                        <Typography variant="h6" color="text.secondary" padding-top="50px">
                                      Seleccione el tipo de Control: 
                                    </Typography>
                            <FormControl fullWidth>

                                <InputLabel id="demo-simple-select-label">SCADA</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Scada}
                                label="Scada"
                                onChange={handleChangeScada}
                                >
                                
                                <MenuItem value={instalacion[2].SCADA[0]}>{instalacion[2].SCADA[0]}</MenuItem>
                                <MenuItem value={instalacion[2].SCADA[1]}>{instalacion[2].SCADA[1]}</MenuItem>
                                <MenuItem value={instalacion[2].SCADA[2]}>{instalacion[2].SCADA[2]}</MenuItem>
                                    
                                </Select>
                            </FormControl>
                            </Box>
                        </Item>
                        <Item>
                        <Button variant="contained" onClick={shopp} endIcon={<AddShoppingCartIcon/>}>
                         Agregar Servicio
                        </Button>
                        </Item>

                    </Grid>
                    <Grid item xs>

                    </Grid>
                    </Grid>
               
    
                </div>

                


            </Box>
        </div>
 
        );
    }

export default Servicios