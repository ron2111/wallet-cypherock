import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import logo from "../../img/logo.svg";
import logo2 from "../../img/logo2.svg";
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const Topbar = () => {
  const theme = useTheme();
  const [img,setImg] = useState(false);
  const colors = tokens(theme.palette.mode);
//   to switch between different color modes
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}> 
        {/* <img style={{ height:'20px', marginLeft:'10px', marginTop:'10px'}} src={img}  alt="logo" /> */}
{theme.palette.mode === "dark" ?  
   (
    <img style={{ height:'20px', marginLeft:'10px', marginTop:'10px'}} src={logo}  alt="logo" />

    ) : 
    (
        <img style={{ height:'20px', marginLeft:'10px', marginTop:'10px'}} src={logo2}  alt="logo" />

    )
}


      {/* ICONS */}
      
      <Box display="flex">
      <IconButton >
          <CheckCircleOutlineOutlinedIcon style={{ color: "#4848F6" }}/>
        </IconButton>
        <div style={{color: colors.yellow[900],paddingTop : '7px', fontWeight:'600',fontSize:'15px',paddingRight: '30px'}}className="sync" > Syncronized </div>

        <IconButton onClick={colorMode.toggleColorMode}> 
        {/* mode changer */}
          {theme.palette.mode === "dark" ? (
            <ContrastOutlinedIcon />
          ) : (
            <ContrastOutlinedIcon />
          )}
        </IconButton>
       
        <IconButton>
          <LockOutlinedIcon style={{color: colors.yellow[900]}}/>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;