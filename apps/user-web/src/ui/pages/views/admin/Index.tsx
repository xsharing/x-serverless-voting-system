import { NextPage } from 'next';
import Link from 'next/link';
import * as React from 'react';

const IndexPage: NextPage = () => (
  <div>
    <p>
      Hello Admin
      <Link href="/about">
        <a>About us</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
