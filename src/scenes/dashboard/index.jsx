import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import AddIcon from '@mui/icons-material/Add';

const Dashboard = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title=" Portfolio" subtitle="Welcome to your portfolio" />
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
             Add Widget
          </Button>
        </Box>
      </Box>
      </Box>
    
}

export default Dashboard;