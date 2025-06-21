import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // Palette customization
  palette: {
    primary: {
      main: "#FF5722", // Example: Orange
      light: "#FF8A50",
      dark: "#E64A19",
      contrastText: "#ffffff", // Text color for contrast with primary.main
    },
    secondary: {
      main: "#00BCD4", // Example: Cyan
      light: "#4DD0E1",
      dark: "#0097A7",
      contrastText: "#000000", // Text color for contrast with secondary.main
    },
    error: {
      main: "#f44336", // Default red
    },
    warning: {
      main: "#ff9800", // Default orange
    },
    info: {
      main: "#2196f3", // Default blue
    },
    success: {
      main: "#4caf50", // Default green
    },
    background: {
      default: "#000000", // Your desired black background
      paper: "#1a1a1a", // A slightly lighter dark for paper/card elements
    },
    text: {
      primary: "#ffffff", // Primary text color for dark background
      secondary: "#bbbbbb", // Secondary text color for dark background
    },
    onBackground: {
      // Custom color for text/icons on primary background
      main: "#ffffff", // White for text on your black background
    },
  },

  // Typography customization
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.2em",
      lineHeight: 1.1,
      fontWeight: 700,
      color: "#ffffff", // Ensure headings are white
    },
    h2: {
      fontSize: "2.5em",
      fontWeight: 600,
      color: "#ffffff",
    },
    body1: {
      fontSize: "1.2rem",
      color: "#ffffff",
    },
    body2: {
      fontSize: "0.875rem",
      color: "#bbbbbb",
    },
    button: {
      textTransform: "none", 
      fontSize: "1.1rem",
      fontWeight: 500,
    },
  },

  // Component-specific overrides (if needed)
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: "1px solid transparent",
          padding: "0.6em 1.2em",
          fontSize: "1em",
          fontWeight: 500,
          fontFamily: "inherit",
          backgroundColor: "#171717", // Your desired button background
          color: "#e3e3e3", // Text color for this specific button type
          transition: "border-color 0.25s",
          "&:hover": {
            backgroundColor: "#5e5e5e", // Slightly lighter on hover
            color: "#ffffff",
            borderColor: "#545454", // Your desired hover border
          },
          "&:focus, &:focus-visible": {
            outline: "4px auto -webkit-focus-ring-color",
          },
        },
        // You can target specific variants if needed, e.g., for contained buttons
        containedPrimary: {
          // This would apply to <Button variant="contained" color="primary">
          // You could override background here if different from root
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        // This targets the container holding the toggle buttons
        root: {
          // Remove default border styles that make them stick together
          "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            marginLeft: "8px", // Add margin between buttons (adjust as needed)
            borderLeft: "1px solid currentColor", // Re-add border to the left of grouped items
            // You might need to override borderRadius if it's applying only to ends
            // borderRadius: '8px !important', // Ensure individual buttons have full rounded corners
          },
          "& .MuiToggleButtonGroup-grouped:not(:last-of-type)": {
            // If you removed initial border-right, you might need to re-add it here
          },
          // To ensure each button has its own rounded corners
          "& .MuiToggleButtonGroup-grouped": {
            borderRadius: "8px !important", // Apply border-radius to all buttons, overriding group styling
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: "#171717",
          color: "#e3e3e3",
          borderColor: "#545454 !important", 
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main, // Selected button background
            color: theme.palette.primary.contrastText, // Selected button text
            borderColor: theme.palette.primary.dark + " !important",
          },
          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        }),
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main, // Color of the slider track and thumb
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#333333", // Darker background for tooltips
          color: "#ffffff", // White text for tooltips
          fontSize: "1em",
        },
      },
    },
    // You can add more components here (MuiAvatar, MuiTextField, etc.)
  },
});

export default theme;
