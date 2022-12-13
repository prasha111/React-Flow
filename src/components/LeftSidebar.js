import React from "react";
//import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
//import Accordion from "@material-ui/core/Accordion";
//import AccordionSummary from "@material-ui/core/AccordionSummary";
//import AccordionDetails from "@material-ui/core/AccordionDetails";


//import Avatar from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     marginTop: "1px",
//     width: "35%",
//     border: "1px solid rgba(0, 0, 0, .125)",
//     boxShadow: "none",
//     "&:not(:last-child)": {
//       borderBottom: 0
//     },
//     "&:before": {
//       display: "none"
//     },
//     "&$expanded": {
//       margin: "auto"
//     }
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1)
//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular
//   },
//   Avatar: {
//     width: "65px",
//     height: "65px",
//     margin: "5px",
//     fontSize: "15px",
//     color: "white",
//     backgroundColor: "#1d428a"
//   },
//   search: {
//     position: "relative",
//     border: "1px solid rgba(0, 0, 0, .20)",
//     margin: "6px",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25)
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       marginLeft: theme.spacing(3),
//       width: "auto"
//     }
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   AvatarHead: {
//     width: "min-content"
//   }
// }));

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: "rgba(0, 0, 0, .03)",
//     borderBottom: "1px solid rgba(0, 0, 0, .125)",
//     marginBottom: -1,
//     minHeight: 56,
//     "&$expanded": {
//       minHeight: 56
//     }
//   },

//   content: {
//     "&$expanded": {
//       margin: "12px 0"
//     }
//   },
//   expanded: {}
// })(MuiAccordionSummary);

export default function SimpleAccordion(props) {
  //const classes = useStyles();
  const onDragStart = (event, nodeType, name, image) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.setData("name", name);
    event.dataTransfer.setData("image", image);
    event.dataTransfer.effectAllowed = "move";
  };
  return (
    <div>
      <div >
        <div >
        <svg height={'20px'} width={'20px'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </div>
        <input
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div>
        <div
         
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <span >Players</span>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              fontSize: "13px",
              justifyContent: "center"
            }}
          >
            <div
           
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Precious Achiuwa",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1630173.png"
               
              />
              Precious Achiuwaaa
            </div>
            <div
              
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Jaylen Adams",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1629121.png"
              
              />
              Jaylen Adams
            </div>
            <div
              
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Steven Adams",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/203500.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/203500.png"
              />
              Steven Adams
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Bam Adebayo",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1628389.png"
              />
              Bam Adebayo
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "LaMarcus Aldridge",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/200746.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/200746.png"
              />
              LaMarcus Aldridge
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Ty-Shon Alexander",
                  "https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://cdn.nba.com/headshots/nba/latest/260x190/1630234.png"
              />
              Ty-Shon Alexander
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <span>Coaches</span>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              fontSize: "13px",
              justifyContent: "center"
            }}
          >
            <div
             
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Brad Stevens",
                  "https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2019/05/Boston-NBAHeadCoaches-300x300.jpg"
             
              />
              Brad Stevens
            </div>
            <div
              
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Steve Nash",
                  "https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/09/Brooklyn-NBAHeadCoaches-300x300.jpg"
               
              />
              Steve Nash
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Tom Thibodeau",
                  "https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/08/Untitled-design-300x300.png"

              />
              Tom Thibodeau
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Doc Rivers",
                  "https://nbacoaches.com/wp-content/uploads/2020/10/LAC-NBAHeadCoaches-300x300.jpg"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2020/10/LAC-NBAHeadCoaches-300x300.jpg"
              />
              Doc Rivers
            </div>
            <div
              onDragStart={(event) =>
                onDragStart(
                  event,
                  "default",
                  "Nick Nurse",
                  "https://nbacoaches.com/wp-content/uploads/2019/05/Toronto-NBAHeadCoaches-300x300.jpg"
                )
              }
              draggable
            >
              <img
                alt=""
                src="https://nbacoaches.com/wp-content/uploads/2019/05/Toronto-NBAHeadCoaches-300x300.jpg"
              />
              Nick Nurse
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
