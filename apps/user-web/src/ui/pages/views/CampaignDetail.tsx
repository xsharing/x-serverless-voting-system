import {
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  makeStyles,
  Paper,
  TextField,
} from '@material-ui/core';
import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  form: {},
}));

const IndexPage: NextPage = () => {
  const classes = useStyles();

  const [checks, setChecks] = React.useState([false, false, false]);

  const handleChange = (event) => {
    const newChecks = [...checks];
    newChecks[parseInt(event.target.name, 10)] = !checks[
      parseInt(event.target.name, 10)
    ];
    setChecks(newChecks);
    console.log(newChecks);
  };

  const error = checks.filter((c) => c).length === 2 ? false : true;

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <form className="classes.form" autoComplete="off">
          <TextField id="code" label="投票コード" fullWidth />
        </form>

        <FormControl required error={error} component="fieldset">
          <FormLabel component="legend">2つ選択してください。</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checks[0]}
                  onChange={handleChange}
                  name="0"
                />
              }
              label="Gilad Gray"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checks[1]}
                  onChange={handleChange}
                  name="1"
                />
              }
              label="Jason Killian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checks[2]}
                  onChange={handleChange}
                  name="2"
                />
              }
              label="Antoine Llorca"
            />
          </FormGroup>
          {/* <FormHelperText>You can display an error</FormHelperText> */}
        </FormControl>
      </Paper>
    </Container>
  );
};

export default IndexPage;
