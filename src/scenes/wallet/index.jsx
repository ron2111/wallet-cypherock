import * as React from 'react';
import PropTypes from 'prop-types';
import { Box, Button,Divider,Typography,TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCoin} from "../../data/mockData";
import AddIcon from '@mui/icons-material/Add';
import Header from "../../components/Header";
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



function BootstrapDialogTitle(props) {
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
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Wallet = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = React.useState(false);
  const [address, setAdd] = React.useState(false);
  const [verify, setVerify] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // 2nd recieve page
  const handleAddress = () => {
    setAdd(false);
  };

  // Finaly recieve page
  const handleVerify = () => {
    setVerify(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAdd(true);
    setVerify(false);
  };
  // to diable the default behaviour of selecting the row
  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };
  
  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };
  const columns = [
    { field: "id",headerName: "Total Coins: 6" },
    {
      field: 'cLogo',
      headerName: '',
      flex: 0.1,
      width: 150,
      editable: true,
      renderCell: (params) => <img src={params.value} />,
    },
    {
      field: "cName",
      headerName: "Coin",
      flex: 0.4,
      cellClassName: "name-column--cell",
    },
    {
      field: "val",
      headerName: "Value",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 0.25,
    },
    {
      field: "usd",
      headerName: "USD Value",
      
    },
    {
      field: "Receive ",
      headerName: '',
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
            
          >
           <CallReceivedOutlinedIcon style={{color:colors.blueAccent[200]}}/>  Receive
          </Button>
        );
      }
    },
    {
      field: "Send ",
      headerName: '',
      renderCell: (cellValues) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
           <ArrowOutwardIcon style={{color:colors.yellow[600]}}/> Send
          </Button>
        );
      }
    }
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">

      
      <Header title="Wallet" subtitle="Welcome to your wallet" />
      <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[800],
              color: colors.yellow[900],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
             Add Coin
          </Button>
        </Box>
        </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.primary[200],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.blueAccent[800],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >

        {/* DataGrid Table for coins */}
        <DataGrid rows={mockDataCoin} columns={columns} onCellClick={handleCellClick}
        onRowClick={handleRowClick}/>

      {/*Dialog box  */}
        <Dialog
         PaperProps={{ sx: { backgroundColor: colors.primary[900],width: "80%", height: "90%", } }}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        
      >
       
        <Box width="600px" p={2}>
        
        <Typography style={{ fontWeight: 500,fontSize:40 ,marginLeft:200}}>
            Recieve
            <CloseIcon style={{ marginLeft:200}}autoFocus onClick={handleClose}>
            Close
          </CloseIcon>
          </Typography>
          {address === true ?  
   (
    <img width="550px" style={{marginTop:10}} src={require('../../logos/dev.png')}  />

    ) : 
    (
      // { verify === true ? (
      //   <img width="550px" src={require('../../logos/dev2.png')} />
      // ) : (
        <div>
          {verify=== false ?  
          (
           <img width="550px" style={{marginTop:10}} src={require('../../logos/dev2.png')}  />
       
           ) : 
           (
        <img width="550px" src={require('../../logos/dev3.png')} />
           )
}
        </div>
      )
      
    
}
          
          <Box marginLeft={5} >
            {address === true ?(
        <Typography style={{fontSize:25 , fontWeight: 300}}>
            Follow the instructions on device
          </Typography>
            ) : null
}


{address === true ?(
          <Box
          height={35}
          width= {450}
               backgroundColor={colors.yellow[700]}
               borderRadius={2}
              >
          <Typography style={{ fontSize:20 ,marginTop: 20}}>
          <ArrowForwardIcon style={{ marginLeft:5,color: colors.yellow[900]}}/>   Select the Wallet On Device
          </Typography>
          </Box>
) : (
  <Box
          height={60}
          width= {550}
          marginLeft={-4}
               backgroundColor={colors.yellow[700]}
               borderRadius={3}
              >
                {/* Verification */}
  <Typography style={{ fontSize:30 ,textAlign:'center' , marginTop: 30,color: colors.yellow[200]}}>
     25BKJNKNLJL58fjkdhfk26dnfds15
     <Button variant="contained" style={{marginLeft:20,color: colors.yellow[200]}}>
      Copy
     </Button>
  </Typography>
  </Box>
)

}
{address === true ?(
          <Box
          height={35}
          width= {450}
          
               backgroundColor={colors.yellow[700]}
               borderRadius={2}
              >
          <Typography style={{ fontSize:20 ,marginTop: 20}}>
          <ArrowForwardIcon style={{ marginLeft:5,color: colors.yellow[900]}}/>  Select the Coin on Device
          </Typography>
          </Box>
) : (
  <div>
    {verify === false ?(
<Typography style={{fontSize:20 , marginTop:10, fontWeight: 500, color :"#4848F6"}}>
   {/* Verification */}
            Verify Address on Device
          </Typography> ) : ( null)
}
          </div>

)

}
          <Box
          height={35}
          width= {450}
               backgroundColor={colors.yellow[700]}
               borderRadius={2}
              >

{address === true ?(
  // Device
          <Typography style={{ fontSize:20 ,marginTop: 20}}>
          <ArrowForwardIcon style={{marginLeft:5,color: colors.yellow[900]}}/>  Tap 1 card of any 4 Cards
          </Typography>
) : (
  <Box
          height={35}
          width= {500}
          marginTop={5}
          marginLeft={-4}
               backgroundColor={colors.yellow[700]}
               borderRadius={2}
              >
                {verify === false ?(
<Typography style={{ fontSize:20 ,marginTop: 20}}>
{/* Device */}
          <ArrowForwardIcon style={{marginLeft:5,color: colors.yellow[900]}}/>  Please match the address to be shown in x1 wallet.

          </Typography>) : (
            <Typography style={{ fontSize:20 , fontWeight: 800, marginTop: 20, color :"#4848F6"}}>
{/* Recieve */}
               <ErrorOutlineIcon style={{marginLeft:35,color: "#4848F6"}}/> Address Verified
  
            </Typography>) 

}
          </Box>
)
}
          </Box>
          </Box>
       
       <Divider style={{marginTop:20,width:599,marginLeft:-15}}/>
       {address===true ? (
        // Device
          <Button onClick={handleAddress} style={{fontSize:23,marginTop: 30, marginLeft: 400, color: colors.yellow[900]}} variant="outlined"  >
            Continue
          </Button>
       ) : (
        // Verification -----> Receive
        <Button onClick={handleVerify} style={{fontSize:23,marginTop: 30, marginLeft: 200, color: colors.yellow[900]}} variant="contained"  >
            {verify === false ? "Continue" : "Re-verify"}
          </Button>
       )
}
        </Box>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
        
      </Box>
    </Box>
  );
};

export default Wallet;