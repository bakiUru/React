import React, {useState,useEffect} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const shopp = localStorage.getItem("carrito");

export default function CartWidget(){
const [compra, setCompra] = useState();
useEffect(()=>{
    setCompra(shopp)
},[])
const resetCarro = () => {
    setCompra(0)
    localStorage.setItem("carrito",compra)
    console.log(compra)
}
    return(
            <IconButton size="large" aria-label="show 0 new mails" color="inherit">
                <Badge badgeContent={compra} color="error">
                    <ShoppingCartIcon onClick={resetCarro}/>
                </Badge>
            </IconButton>
    )
}