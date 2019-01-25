import 'jquery';
import sdk from '@stackblitz/sdk';
// import './styles.css';

// Open the RealWorld Angular repo in a new window on StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app

// window['openGithubProject'] = () => {
let openGithubProject = () => {
  sdk.openGithubProject('gothinkster/angular-realworld-example-app');
}

// Embed the RealWorld Angular repo on this page
// window['embedGithubProject'] = () => {
let embedGithubProject = () => {
  sdk.embedGithubProject(
    'myDiv',
    'gothinkster/angular-realworld-example-app',
    { height: 320 }
  );
}

let open = $("#open");
let embed = $("#embed");

open.click(openGithubProject);
embed.click(embedGithubProject);