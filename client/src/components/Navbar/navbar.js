import React, {useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {useDispatch} from 'react-redux';



import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles'
import { AppBar, Typography, Avatar, Toolbar, Button } from '@material-ui/core';


const NavBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));  // fetch user from local storage
    
    useEffect(() => {
        const token = user?.token;  //If the user exists, send its token to token variable
        
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    const logout = () => {
        dispatch({ type: 'LOGOUT'});
        
        history.push('/');

        setUser(null);
    }


    return (
        <div className={classes.root}>
        <AppBar className={classes.appbar} position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title} component={Link} to='/'>
                Kanji App
            </Typography>
            <Toolbar className={classes.toolbar}>
        {user ? (<div className = {classes.profile}> 
            <Avatar className = {classes.purple} alt= {user.result.name} src = {user.result.imageUrl}> {user.result.name.charAt(0)} </Avatar>
            <Typography className = {classes.userName} variant="h6" > {user.result.name} </Typography>
            <Button variant="contained" className = {classes.logout} color = "secondary" onClick={logout}> Log Out </Button>
        </div>) : (
            <Button component={Link} to = "/auth" variant = "contained" color = "primary">Sign In</Button>
        )}
        </Toolbar>
            </Toolbar>
        </AppBar>
        </div>
    );
}

export default NavBar;