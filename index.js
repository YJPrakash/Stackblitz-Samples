// import 'jquery';
import sdk from '@stackblitz/sdk';
// import './styles.css';

// Open the RealWorld Angular repo in a new window on StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
// Create the index.ts file
const code = `import moment from 'moment';
import $ from 'jquery';

let str = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#time').html(str);
`;

// Create the index.html file
const html = `<h1>I was created on <span id='time'></span></h1>`

// Create the project payload.
const project = {
    files: {
        'index.ts': code,
        'index.html': html
    },
    title: 'Dynamically Generated Project',
    description: 'Created with <3 by the StackBlitz SDK!',
    template: 'typescript',
    tags: ['stackblitz', 'sdk'],
    dependencies: {
        moment: '*', // * = latest version
        jquery: '*' // * = latest version
    }
};

// window['openGithubProject'] = () => {
let openGithubProject = () => {
    //   sdk.openGithubProject('gothinkster/angular-realworld-example-app');
    sdk.openProject(project);
}

// Embed the RealWorld Angular repo on this page
// window['embedGithubProject'] = () => {
let embedGithubProject = () => {
    //   sdk.embedGithubProject(
    //     'myDiv',
    //     'gothinkster/angular-realworld-example-app',
    //     { height: 320 }
    //   );
    sdk.embedProject(
        'myDiv',
        project,
        { width: "100%",height: "100%" }
    );
}

// let open = $("#open");
// let embed = $("#embed");

// open.click(openGithubProject);
// embed.click(embedGithubProject);
embedGithubProject();