"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Home;
var useDocusaurusContext_1 = require("@docusaurus/useDocusaurusContext");
var Layout_1 = require("@theme/Layout");
var Alert_1 = require("@site/src/components/Alert");
function Home() {
    var siteConfig = (0, useDocusaurusContext_1.default)().siteConfig;
    return (<Layout_1.default title={"".concat(siteConfig.title)} description="Description will go into a meta tag in <head />">
      <main>
        <div className="container">
          <div className="row">
            <div className="col col--6 col--offset-3 margin-top--md">
              <Alert_1.Alert type='warning'>
                <strong>⚠️Note:</strong> This site is currently under construction.
              </Alert_1.Alert>
            </div>
          </div>
        </div>
      </main>
    </Layout_1.default>);
}
