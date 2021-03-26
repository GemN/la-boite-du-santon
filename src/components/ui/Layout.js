import React from 'react';
import SEO from '../elements/SEO';

type Props = {
  seo: {
    title: string,
  },
  children: any,
}

const Layout = ({ seo, children }: Props) => (
  <div>
    <SEO title={seo.title} />
    {children}
  </div>
);

export default Layout;
