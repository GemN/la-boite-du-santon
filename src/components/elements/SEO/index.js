import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

type Props = {
  title: string,
  description: string,
  image: string,
  url: string,
  article: boolean,
};

const siteQuery = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
      }
    }
  }
`;

const SEO = ({
  title, description, image, url, article,
}: Props) => (
  <StaticQuery
    query={siteQuery}
    render={(data) => {
      const {
        defaultTitle, defaultDescription, siteUrl, twitterUsername, titleTemplate, defaultImage,
      } = data.site.siteMetadata;

      const seo = {
        title: title || defaultTitle,
        fullTitle: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${url || '/'}`,
      };

      return (
        <>
          <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="referrer" content="origin" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.fullTitle && <meta property="og:title" content={seo.fullTitle} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:site" content={twitterUsername} />}
            {seo.fullTitle && <meta name="twitter:title" content={seo.fullTitle} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {seo.url && <link rel="canonical" href={seo.url} />}
          </Helmet>
        </>
      );
    }}
  />
);

export default SEO;
