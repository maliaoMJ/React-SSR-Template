import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import WhatShot from "@material-ui/icons/Whatshot"
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IndexLayout from "../layout/index";
import withStyles from '@material-ui/core/styles/withStyles';
interface IReactReadWebPartProps {
    classes: {
        loginContainer:any,
        main:any,
        paper:any,
        avatar:any,
        form:any,
        submit:any
    }
}
interface IReactReadWebPartState {
    userName:String,
    userPassword:String,
    isRemember: Boolean
}
const styles:any = (theme:any) => ({
    loginContainer: {
        width:'100%',
        height:'100%',
        position:'relative',
        background: 'linear-gradient( to top left, rgb(102, 223, 243), #673AB7 )',
        overflow: 'hidden'
    },
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: '#9c27b0',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component<IReactReadWebPartProps,IReactReadWebPartState> {
    constructor(props:any){
        super(props);
        this.state = {
            userName:"",
            userPassword:"",
            isRemember: false
        };
    }
    getUserInfo(e:any, type:String){
        if(type === "userName"){
            this.setState({
                userName:e.target.value
            })
        }else{
            this.setState({
                userPassword:e.target.value
            })
        }
    }
    submitForm(){
        console.log(this.state);
    }
    render(){
        const { classes } = this.props;
        return (
        <IndexLayout title={'welcome to sign in!'}>
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <WhatShot/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={classes.form}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus defaultValue={this.state.userName} onChange={(event:any)=>{this.getUserInfo.bind(this,event,'userName')()}} />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Your Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" defaultValue={this.state.userPassword} onChange={(event:any)=>{this.getUserInfo.bind(this,event,'userPassword')()}}/>
                        </FormControl>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"
                            />}
                            label="Remember Me"
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.submitForm.bind(this)}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        </IndexLayout>
    );
}
}
export default withStyles(styles)(SignIn);