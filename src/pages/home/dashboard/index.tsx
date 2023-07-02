import { 
  Box, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Typography, 
  useMediaQuery, 
  useTheme 
} from "@mui/material";
import { PropsWithChildren } from "react";
import { Description, Event } from "@mui/icons-material";


const drawerWidth = 280;

const Dashboard = ({ children }: PropsWithChildren) => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:1320px)");

  const drawer = (
    <Box
      height="100%"
      sx={{ overflowX: "hidden", overflowY: "auto", paddingBottom: 4 }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={drawerWidth}
        height={87}
      >
        <Typography 
            variant="h4" 
            component="h1" 
            color={theme.palette.primary.main}
            >
              Declaraí . . .
            </Typography>
      </Box>

      <List>
        <ListItem key="eventos" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
            <ListItemText primary="Evento" />
          </ListItemButton>
        </ListItem>
        <ListItem key="declaracoes" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Description />
            </ListItemIcon>
            <ListItemText primary="Minhas declarações" />
          </ListItemButton>
        </ListItem>
      </List>
      
    </Box>
  );

  // TODO: aplicar responsividade e appbar
  return (
    <Box display="flex">
      <Box
        component="nav"
        sx={{ width: matches ? drawerWidth : 0, flexShrink: matches ? 1 : 0 }}
      >
          <Drawer
            variant="permanent"
            open
            sx={{
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
              
            }}
          >
            {drawer}
          </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          width: `calc(100% - ${matches ? drawerWidth : 0}px)`,
          backgroundPositionX: "right",
          backgroundPositionY: "bottom",
          backgroundRepeat: "no-repeat",
          paddingTop: 2,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            m: "auto",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
