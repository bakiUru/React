import  React,{useState}  from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

 //Lista de Servicios

/*
 const listaServicios = new Promise((resolve) =>{

    setTimeout(()=>{
    const respuesta =[

        {name: 'Hogar', inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
        tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"]},
    
        {name: 'ComplejoDeportivo',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
        tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"]},
    
        {name: 'Agro',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
        tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"]},
    
        {name: 'Hidro',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
        tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"]},
    
        {name: 'Canna',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
        tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"]},
    
        
    ]
        resolve(respuesta)
        }, 3000)

    })

listaServicios.then((data)=>{
    console.log("Respuesta: ",JSON.stringify(data));
    })

*/
const Servicios = (props) => {

const [serviinst, setservInst] = React.useState('Selec. Instalacion');
      
const handleChange = (event) => {
          setservInst(event.target.value);
        };

    const [servicios, setServicios] = useState([
            {name: 'Hogar', inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
            tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"],
            img: "../../assets/img/Jardin__Card.jpg", texto: "RIEGO HOGAR", desc: "Distintas Tecnicas"},
        
            {name: 'Complejo Deportivo',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
            tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"],
            img: "../../assets/img/complejoDeportivo__Card.jpg", texto: "RIEGO Complejos Deportivos", desc: "Distintas Tecnicas"},
        
            {name: 'Agro',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
            tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"],
            img: "../../assets/img/Agro__Card.jpg", texto: "RIEGO Agro", desc: "Distintas Tecnicas"},
        
            {name: 'Hidroponia',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
            tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"],
            img: "../../assets/img/Hidropo__Card.jpg", texto: "Sistemas Hidroponicos", desc: "Distintas Tecnicas"},

            {name: 'Cannabis',inst:["Riego","Completo/Auxiliares","Energias Renovables"], 
            tipoServ: ["Simple/Instalacion","Automatizado"], SCADA: ["APP/WEB","Historial/Monitoreo"],
            img: "../../assets/img/Cannabis__Card.jpg", texto: "Sistemas Cultivo Cannabis", desc: "Distintas Tecnicas"}

    ]);
   

    return (
        <div className="contenedor-servicios">
            <Box sx={{ flexGrow: 1}}>
            {servicios.map((serv) =>{
                return(
                    <div className="servicios">
            
                    <Grid container spacing={3}>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item><h2>{serv.name}</h2></Item>
                        <Item>
                        <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={serv.img}
                                    alt="Servicios"
                                    
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {serv.texto}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {serv.desc}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                        </Item>
                        <Item><Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Instalacion</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="Instalación"
                                label="Tipo"
                                onChange={handleChange}
                                >
                                {servicios.map((servInst) =>{
                                    return(
                                        <MenuItem value={servInst.inst.target}>{servInst.inst}</MenuItem>
                                    )
                                })}

                                    
                                </Select>
                            </FormControl>
                            </Box>
                        </Item>
                        <Item><Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="Tipo"
                                label="Tipo"
                                onChange={handleChange}
                                >
                                {servicios.map((servTipo) =>{
                                    return(
                                        <MenuItem value={servTipo.tipoServ}>{servTipo.tipoServ}</MenuItem>
                                    )
                                })}

                                    
                                </Select>
                            </FormControl>
                            </Box>
                        </Item>
                        <Item><Box sx={{ minWidth: 50 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">SCADA</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value="Instalación"
                                label="Tipo"
                                onChange={handleChange}
                                >
                                {servicios.map((servScada) =>{
                                    return(
                                        <MenuItem value={servScada.SCADA}>{servScada.SCADA}</MenuItem>
                                    )
                                })}

                                    
                                </Select>
                            </FormControl>
                            </Box>
                        </Item>

                    </Grid>
                    <Grid item xs>
                        <Item>xs</Item>
                    </Grid>
                    </Grid>
               
    
                </div>

                )

            })}
            </Box>
        </div>
 
        );
    }

export default Servicios