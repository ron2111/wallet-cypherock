import { Box, Button,Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataCoin} from "../../data/mockData";
import AddIcon from '@mui/icons-material/Add';
import Header from "../../components/Header";
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
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
            color: colors.greenAccent[300],
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
      </Box>
    </Box>
  );
};

export default Team;