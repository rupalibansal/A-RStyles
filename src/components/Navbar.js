import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Button,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { styled, alpha } from "@mui/material/styles";
import { useContext } from "react";
import { StateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(StateContext);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/searchResults/${e.target.value}`);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" variant="text" color="inherit">
          A&R Styles
        </Button>
        <Typography
          variant="h3"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
        >
          A&R Styles
        </Typography>

        <Search onKeyDown={handleSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <IconButton color="inherit" component={Link} to="/shoppingBag">
          <Badge badgeContent={state.numberOfBagItems} color="success">
            <ShoppingBagIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export { Navbar };
