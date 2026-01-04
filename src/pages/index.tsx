import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Alert} from "@site/src/components/Alert";

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 margin-top--md">
              <Alert type='warning'>
                <strong>⚠️Note:</strong> This site is currently under construction.
              </Alert>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
