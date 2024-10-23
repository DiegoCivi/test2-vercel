'use client'
import { Grid, Box } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
// components
import SalesOverview from '@/app/(DashboardLayout)/components/dashboard/SalesOverview';

import { Button } from "@mui/material"
import { Input } from "@mui/material"
import { useState } from 'react';
import { insert_temperature } from './components/temperature';



const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          
          {/* <Grid item xs={12} lg={8}>
            <InsertTemp/>
          </Grid> */}

          <Grid> 
            < InputWithButton /> 
          </Grid>


          
        </Grid>
      </Box>
    </PageContainer>
  )
}

function InputWithButton() {
  const [temp, setTemp] = useState("")

  const handleButtonClick = () => {
    console.log('El valor ingresado es:', temp);
    // Aquí puedes pasar el valor a la función que necesites
    insert_temperature(temp)
    .then(response => {
      // Manejar la respuesta exitosa aquí
      console.log('Temperatura insertada con éxito', response);
    })
    .catch(error => {
      // Manejar el error aquí
      console.error('Error al insertar la temperatura:', error);
    });
  };

  
  
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input 
      type="string"
      placeholder="Temperature"
      onChange={(e) => setTemp(e.target.value)} // Actualiza el valor del estado cuando cambia el input
      />

      <Button type="submit" onClick={handleButtonClick}>Subscribe</Button>
    </div>
  )
}




export default Dashboard;
