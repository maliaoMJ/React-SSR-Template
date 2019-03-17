import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import styled from 'styled-components';
import MainContainer from '../layout/menu'

const Title: any = styled.h1`
  color: red;
  font-size: 50px;
`;
const styles:any = (theme:any) => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
});

function About(props:any) {
    const { classes } = props;

    return (
        <MainContainer className={classes.root} title={'hello this is home page'}>
            <Title>hello Next.js for React SSR</Title>
            <Typography variant="h4" gutterBottom>
              hello world
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                about page
            </Typography>
            <Typography gutterBottom>
                <Link href="/">
                    <a>Go to the main page</a>
                </Link>
            </Typography>
            <Button variant="contained" color="primary">
                Do nothing button
            </Button>
        </MainContainer>
    );
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);