import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@material-ui/core';

const AboutPage: NextPage = () => (
  <div>
    <p>about us!!</p>
    <Link href="/">
      <Button variant="contained" color="primary">
        material ui button
      </Button>
    </Link>
  </div>
);

export default AboutPage;
