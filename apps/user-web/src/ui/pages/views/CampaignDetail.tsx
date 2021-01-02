import {
  Button,
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
import RJSForm from '@rjsf/material-ui';
import { JSONSchema7 } from 'json-schema';

const useStyles = makeStyles((theme) => ({
  form: {},
}));

const IndexPage: NextPage = () => {
  const classes = useStyles();

  const schema: JSONSchema7 = {
    title: 'Custom array of strings',
    type: 'array',
    items: {
      type: 'string',
    },
  };

  const [checks, setChecks] = React.useState([false, false, false]);

  const handleChange = (event) => {
    const newChecks = [...checks];
    newChecks[parseInt(event.target.name, 10)] = !checks[
      parseInt(event.target.name, 10)
    ];
    setChecks(newChecks);
    console.log(newChecks);
  };

  const handleVote = (event) => {
    console.log(event);
  };

  const error = checks.filter((c) => c).length === 2 ? false : true;

  return (
    <Container component="main" maxWidth="xs">
      <Paper>
        <form className="classes.form" autoComplete="off">
          <TextField id="code" label="投票コード" fullWidth />
          <RJSForm schema={schema}></RJSForm>
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
            <Button
              variant="contained"
              color="primary"
              onClick={handleVote}
              disabled={error}
            >
              投票{error ? '(エラー)' : ''}
            </Button>
          </FormControl>
        </form>
      </Paper>
    </Container>
  );
};

export default IndexPage;
