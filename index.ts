import sdk from '@stackblitz/sdk';
import './styles.css';
// import * as express from "express";

// // const PORT = Number(process.env.PORT) || 8080;
// const PORT = 8080;
// const app = express();

// app.get("/", (req, res) => {
//   res.send("🎉 Hello TypeScript! 🎉");
// });

// const server: object = app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}`);
// });

// Open the RealWorld Angular repo in a new window on StackBlitz
// https://github.com/gothinkster/angular-realworld-example-app
window['openGithubProject'] = () => {
  sdk.openGithubProject('gothinkster/angular-realworld-example-app');
}

// Embed the RealWorld Angular repo on this page
window['embedGithubProject'] = () => {
  sdk.embedGithubProject(
    'myDiv',
    'gothinkster/angular-realworld-example-app',
    { height: 320 }
  );
}

