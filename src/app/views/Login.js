import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Menu from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
//import MenuIcon from 'material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    demo: {
        height: 240,
        [theme.breakpoints.up("lg")]: {
            width: 1170
        }
    },

    input_box: {
        width: "100%"
    },
    btn_login: {
        margin: "10px auto",//theme.spacing.unit,
        textAlign: "center",
        display: "block"
    }
});

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            role: ''
        }
        
    }
    
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid item md={5} xs={12} className="wrapper">
                        <Grid item sm={12} md={12} >
                            <TextField 
                                label="Enter your email" 
                                fullWidth 
                                onChange = {(event,newValue) => this.setState({email:newValue})}
                            />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <TextField 
                                label="Enter your Password" 
                                fullWidth
                                onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <NativeSelect
                                fullWidth
                                className={classes.selectEmpty}
                                value={this.state.age}
                                name="role"
                            >
                                <option value="" disabled>
                                    Select Role
                                </option>
                                <option value={10}>Ten</option>
                                <option value={20}>Twenty</option>
                                <option value={30}>Thirty</option>
                            </NativeSelect>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Button color="primary" variant="contained" className={classes.btn_login} onClick={(event) => this.handleClick(event)}> Login </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}


export default withStyles(styles)(Login);
