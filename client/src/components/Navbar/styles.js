import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appbar:{
        backgroundColor:'#4A8FE7'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: 'none',
      color:'white'
    },
    profile: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '400px',
    },
    userName: {
      display: 'flex',
      alignItems: 'center',
    },
  }));