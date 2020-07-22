This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

ReactAudioPlayer: https://www.npmjs.com/package/react-audio-player

React Audio Player
This is a light React wrapper around the HTML5 audio tag. It provides the ability to manipulate the player and listen to events through a nice React interface.

Installation
npm install --save react-audio-player
Also be sure you have react and react-dom installed in your app at version 15 or above.

Usage
import ReactAudioPlayer from 'react-audio-player';
//...
<ReactAudioPlayer
  src="my_audio_file.ogg"
  autoPlay
  controls
/>
Example
See the example directory for a basic working example of using this project. To run it locally, run npm install in the example directory and then npm start.

Props
Props - Native/React Attributes
See the audio tag documentation for detailed explanations of these attributes.

Prop	Type	Default	Notes
autoPlay	Boolean	false	---
children	Element	null	---
className	String	empty string	---
controls	Boolean	false	---
crossOrigin	String	empty string	See MDN's article on CORS for more about this attribute.
controlsList	String	empty string	For Chrome 58+. Only available in React 15.6.2+
id	String	empty string	---
loop	Boolean	false	---
muted	Boolean	false	---
volume	Number	1.0	---
preload	String	'metadata'	---
src	String	empty string	---
style	Object	---	---
Props - Events
Prop	Type	Description
listenInterval	Number	Indicates how often to call the onListened prop during playback, in milliseconds. Default is 10000.
onAbort	Function	called when unloading the audio player, like when switching to a different src file. Passed the event.
onCanPlay	Function	called when enough of the file has been downloaded to be able to start playing. Passed the event.
onCanPlayThrough	Function	called when enough of the file has been downloaded to play through the entire file. Passed the event.
onEnded	Function	called when playback has finished to the end of the file. Passed the event.
onError	Function	called when the audio tag encounters an error. Passed the event.
onListen	Function	called every listenInterval milliseconds during playback. Passed the event.
onPause	Function	called when the user pauses playback. Passed the event.
onPlay	Function	called when the user taps play. Passed the event.
onSeeked	Function	called when the user drags the time indicator to a new time. Passed the event.
onVolumeChanged	Function	called when the user changes the volume, such as by dragging the volume slider
onLoadedMetadata	Function	called when the metadata for the given audio file has finished downloading. Passed the event.
Advanced Usage
Access to the audio element
You can get direct access to the underlying audio element. First get a ref to ReactAudioPlayer:

<ReactAudioPlayer
  ref={(element) => { this.rap = element; }}
/>
Then you can access the audio element like this:

this.rap.audioEl
This is especially useful if you need access to read-only attributes of the audio tag such as

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
