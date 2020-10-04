import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../store/signup/actionCreator";

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },

  signupForm: {
    justifyContent: "center",
    minHeight: "90vh",
  },

  signupBackground: {
    padding: "20px",
    minHeight: "62vh",
    maxWidth: "50vh",
    justifyContent: "center",
  },
  genderRadioGroup: {
    display: "block",
  },
});

const SignUp = (props) => {

  const [allValues, setAllValues] = useState({
    mobile: '6876876',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    gender: '',
  });

  const changeHandler = e => {
    // console.log(e)
    // console.log(e.target)
    setAllValues({...allValues, [e.target.name]: e.target.value})
  }

  const { classes } = props;

  const dispatch = useDispatch();
  const signUpPostResponse = useSelector(
    (state) => state.signUpReducer.signUpPostResponse
  );
  const signUpPostErrResponse = useSelector(
    (state) => state.signUpReducer.signUpPostErrResponse
  );

  useEffect(() => {
    if (signUpPostResponse) {
      console.log("--------------SUCCESS MESSAGE------------");
    } else if (signUpPostErrResponse) {
      console.log("--------------ERROR MESSAGE------------");
    }
  }, [signUpPostResponse, signUpPostErrResponse]);

  //
  const handleRoute = (route) => {
    props.history.push(`/${route}`);
  };

  //
  const signUpClicked = () => {

    // console.log(allValues);
    if (allValues.firstname !== '' && allValues.lastname !== '' && allValues.email !== ''
      && allValues.password !== '' && (allValues.gender === 'M' || allValues.gender === 'F')) {
      processRequest();
    }
  };

  //
  const processRequest = () => {
    const requestBody = {
      firstName: allValues.firstname,
      lastName: allValues.lastname,
      mobileNumber: allValues.mobile,
      emailAddress: allValues.email,
      password: allValues.password,
      gender: allValues.gender,
    };

    dispatch(signUp(requestBody));
    handleRoute("login")
  };

  // const updateFirstName = (value) => {
  //
  // }

  // const { active, updateWindow } = props
  // if (active === true) {

  return (
    <div>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            spacing={2}
            className={classes.signupForm}
          >
            <Paper
              variant="elevation"
              elevation={2}
              className={classes.signupBackground}
            >
              <Grid item>
                <Typography component="h1" variant="h5">
                  Create your account
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <TextField
                        type="name"
                        placeholder="First Name"
                        fullWidth
                        name="firstname"
                        variant="outlined"
                        required
                        autoFocus
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="name"
                        placeholder="Last Name"
                        fullWidth
                        name="lastname"
                        variant="outlined"
                        required
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="email"
                        variant="outlined"
                        required
                        autoFocus
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        required
                        onChange={changeHandler}
                      />
                    </Grid>
                    <Grid item>
                      <RadioGroup
                        aria-label="gender"
                        name="gender"
                        className={classes.genderRadioGroup}
                        onChange={changeHandler}
                      >
                        <FormControlLabel
                          value="F"
                          control={<Radio />}
                          label="Female"
                        />
                        <FormControlLabel
                          value="M"
                          control={<Radio />}
                          label="Male"
                        />
                      </RadioGroup>
                    </Grid>
                    <Grid item>
                      <Checkbox
                        style={{ padding: "9px 9px 9px 0px" }}
                        size="small"
                        inputProps={{
                          "aria-label": "checkbox with small size",
                        }}
                      />
                      I agree to Samarthanam {}
                      <Link
                        href="https://www.samarthanam.org/terms-conditions/"
                        color="inherit"
                      >
                        Terms & Conditions
                      </Link>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                        onClick={() => signUpClicked()}
                      >
                        Sign Up
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Link
                  component="button"
                  variant="body2"
                  // onClick={() => updateWindow('LOGIN')}
                  onClick={() => handleRoute("login")}
                >
                  Already have an account? Sign In
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  // } else
  //     return null
};

export default withStyles(styles)(SignUp);
