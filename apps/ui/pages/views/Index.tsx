import { Container, CssBaseline, makeStyles } from '@material-ui/core';
import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    borderWidth: '1px',
    borderColor: 'black',
    borderStyle: 'solid',
  },
}));

const IndexPage: NextPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className={classes.form}>Hello</div>
      </div>
    </Container>
  );
};

export default IndexPage;
