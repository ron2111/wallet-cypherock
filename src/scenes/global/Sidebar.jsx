import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";


import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import CallReceivedOutlinedIcon from '@mui/icons-material/CallReceivedOutlined';
import MultipleStopOutlinedIcon from '@mui/icons-material/MultipleStopOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.yellow[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[800]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.yellow[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.yellow[100]}>
                  DASHBOARD
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
             
              
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Portfolio"
              to="/dashboard"
              icon={<CallReceivedOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

           
            <Item
              title="Wallets"
              color="#E2C19D"
              to="/wallet"
              icon={<AccountBalanceWalletOutlinedIcon style={{color:'#C78D4E'}}/>}
              selected={selected}
              setSelected={setSelected}
            />
             <Typography
              variant="h6"
              color={"#C78D4E"}
              fontWeight= "800"

              sx={{ m: "-5px 0 5px 80px" }}
            >
              Wallet 1
            </Typography>
            <Typography
              variant="h7"
              display={isCollapsed ? "none" : "visible"}
              color={"#616161"}
              fontWeight= "200"
              sx={{ m: "-5px 0 5px 90px" }}
            >
              + add wallet
            </Typography>
            <Item
              title="Last Transactions"
              to="/"
              icon={<MultipleStopOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tutorials"
              to="/"
              icon={<SmartDisplayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title=" Setting"
              to="/"
              icon={<BuildOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;