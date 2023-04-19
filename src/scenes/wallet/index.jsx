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
import { styled } from '@mui/material/styles';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';
import { CenterFocusStrong } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RemoveIcon from '@mui/icons-material/Remove';

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   '& .MuiDialogContent-root': {
//     padding: theme.spacing(2),
//   },
//   '& .MuiDialogActions-root': {
//     padding: theme.spacing(1),
//   },
// }));
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleAddress = () => {
    setAdd(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        <DataGrid rows={mockDataCoin} columns={columns} onCellClick={handleCellClick}
        onRowClick={handleRowClick}/>
        
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
          <img  width="550px"src={require('../../logos/dev.png')}></img>
          <Box marginLeft={5} >
        <Typography style={{fontSize:25 , fontWeight: 300}}>
            Follow the instructions on device
          </Typography>
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
          <Box
          height={35}
          width= {450}
               backgroundColor={colors.yellow[700]}
               borderRadius={2}
              >
          <Typography style={{ fontSize:20 ,marginTop: 20}}>
          <ArrowForwardIcon style={{marginLeft:5,color: colors.yellow[900]}}/>  Tap 1 card of any 4 Cards
          </Typography>
          </Box>
          </Box>
       
       <Divider style={{marginTop:20,width:599,marginLeft:-15}}/>
          <Button onClick={handleAddress} style={{fontSize:23,marginTop: 30, marginLeft: 400, color: colors.yellow[900]}} variant="outlined"  >
            Continue
          </Button>
          
        </Box>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
        
      </Box>
    </Box>
  );
};

export default Wallet;