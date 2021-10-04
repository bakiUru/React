import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { green, grey } from '@mui/material/colors';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[100]),
    backgroundColor: green[400],
    '&:hover': {
      backgroundColor: green[500],
    },
  }));
const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ModalDetalle(props) {
    const [mensaje, setMensaje] = React.useState([
        {mensaje: "Se incluyen en el Riego de Hogar las distintas caracteristicas: ",
        lista:"Control de Caudal / Control de Presion / Estudio del Area / Diagrama de Conexiones / etc"
        },
        {mensaje: "Se incluyen en los Complejos Deportivos las distintas caracteristicas: ",
        lista:"Control de Caudal / Control de Presion / Estudio del Area / Diagrama de Conexiones / etc"
        },
        {mensaje: "Se incluyen en el Agro las distintas caracteristicas: ",
        lista:"Control de Caudal / Control de Presion / Estudio del Area / Diagrama de Conexiones / etc"
        },
        {mensaje: "Se incluyen en el Cultivo Hidroponico las distintas caracteristicas: ",
        lista:"Control de Caudal / Control de Presion / Estudio del Area / Diagrama de Conexiones / etc"
        },
        {mensaje: "Se incluyen en el Cultivo de Cannabis las distintas caracteristicas: ",
        lista:"Control de Caudal / Control de Presion / Estudio del Area / Diagrama de Conexiones / etc"
        },
    ])
//funcion que deglose el mensaje en items

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton  variant="contained" onClick={handleClickOpen}>
        Ver
      </ColorButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Detalles del Servicio
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Traera el titulo
          </Typography>
          <Typography gutterBottom>
            Lista de Caracteristicas // Segun Servicio
          </Typography>
          <Typography gutterBottom>
            Breve descipcion de los tipos de instalaciones // el boton te lleva a la parte de agregar el servicio   
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Adquirir Servicio
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
