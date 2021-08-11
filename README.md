# Development Guide

0. Setup SSH keys. ```ssh-keygen -t ed25519 -C "munair@usefulcoin.com"```
1. Clone the repository. ```git clone git@github.com:usefulcoin/react-www-development.git```
2. Download necessary code. ```sudo apt -y update```
3. Make react-www-development the working directory. ```cd react-www-development```
4. Install node modules. ```npm i```
5. Run deploy script (from **packages.json** file). ```npm run build```
6. Push the build to the gh-pages subtree **'docs/'** (refer to Cobyism's Gist for detailed instructions)[https://gist.github.com/cobyism/4730490].

Or run ```bash setup.bash && bash deploy.bash```.

(Read this for help with setting up SSH keys)[https://docs.github.com/en/enterprise-server@3.0/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent].

# Learnings


The key learning was acquiring the knowledge to call <scripts> in the *index.html* file. The key to this was employing the **useEffect** React hook to call the function after browser *layout* and *paint*. Read more [here](https://dev.to/trentyang/replace-lifecycle-with-hooks-in-react-3d4n) as it is the source of
knowledge. 


## 1. Running Medium Widget Scripts

Medium provides us a widget to retrieve articles from publication. It is put in script tags and added to the *index.html* file in the *public* directory of a React app.

For the initial build of this app, the script was:

```javascript
<script type="text/javascript">

  function mediumWidget() {
    MediumWidget.Init({
      renderTo: "#medium-widget",
      params: {
        resource: "https://medium.com/usefulcoin",
        postsPerLine: 1,
        limit: 2,
        picture: "big",
        fields: ["description", "author", "claps", "publishAt"],
        ratio: "landscape"
      }
    })
  }

</script>
```

React has lifecycles for components. The top three are, essentially:

1. componentDidMount (**method executed after component mount**)
2. componentDidUpdate (**method executed after component update**)
3. componentWillUnmount (**method executed before component unmount**)

To execute some function after (in this case) the Blog component mounts, we can use a
React [hook](https://reactjs.org/docs/hooks-reference.html#useeffect). In particular, the
**useEffect** hook (or **useLayoutEffect** if you want to execute the method before *painting*) to
manipulate the DOM after *layout* and *paint* in a "deferred event". Biggup to Trent Yang for ELI5 to me.

### useEffect

Takes two arguments:

1. A callback (fired after *layout* and *paint* so that it is non-blocking).
2. An array (usually props).

Three options for method execution:

1. useEffect( () => window.mediumWidget(), [...] ); **triggered by changes to values in the array**
2. useEffect( () => window.mediumWidget() ); **triggered by every render**
3. useEffect( () => window.mediumWidget(), [] ); **triggered once like componentDidMount**


## 2. Use CSS More

It's just cleaner to add lines to the end of a CSS styling section. For example, add this to the images section:

```css
  .image #talent {
		max-width: 150;
	}
```

## 3. Standard React Stuff

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
