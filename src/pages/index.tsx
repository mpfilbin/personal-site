import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <div className="row">
            <div className="alert alert--warning margin-top--md col col--6 col--offset-3" role="alert">
              <strong>⚠️Note:</strong> This site is currently under construction.
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
