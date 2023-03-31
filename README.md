# Tensorflow Chatbot

This project is capable of interacting with user in four different ways. Each of these module are functioning independently.

* Web interface
* Reset Api
* GUI
* CLI

And also you can train your own data model which suit to your business model. The data model format is not complex. 

### Installing

Program requires following dependencies

* Python >= 3
* Tensorflow [Click here](https://www.tensorflow.org/install/)

After successfully installation of above dependencies, you need to follow these steps in order to train the bot. 

* You can find [data model](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/Bot/content.json) from */Bot/content.json* and change the content as you wish. 
* Execute [train.py](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/Bot/train.py) file which is inside */Bot/* directory to train the model that you have prepared.
* Then, You are done!


## Getting Started

You can interact with chat bot any of these four method

#### Web interface
Django framework is used to implement this web app. You can install Django by fallowing these steps from [here](https://www.djangoproject.com/download/)

*After installation of Django framework, you need to follow these steps*

* Find [settings.py](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/Tensorflow_Chatbot/settings.py) file inside */Tensorflow_Chatbot/* directory.
* Replace 96 line according to the path of the static folder of your project under *STATICFILES_DIRS * variable. 
* Then execute following command inside the root directory.

```
python manage.py runserver

#### Rest api
This app allows you to interact with bot using a rest api. You can find the [controller](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/Tensorflow_Chatbot/Api/controller.py) file from */Tensorflow_Chatbot/Api/controller.py* location. To execute this Rest api you also need to install [Django framework](https://www.djangoproject.com/download/) 


* Request URL     &nbsp;&nbsp;&nbsp;: http://cheerbot/api/
* Request Type    &nbsp;&nbsp;&nbsp;: 'POST'
* Pay load        &nbsp;&nbsp;&nbsp;: ```{"msg" : "What is your name"}```
* Response        &nbsp;&nbsp;&nbsp;: ```{"ques" : "What is your name", "res":"I'm Slack", "time" :"2018-01 10:07:32"}```


![api](https://user-images.githubusercontent.com/7195953/34638814-b46d1cbe-f2f9-11e7-916b-b79ef0eeff0c.PNG)

#### GUI

You can find UI directory from root directory and then execute [ChatView.py](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/UI/ChatView.py) file. Before executing this you need to install pygubu. Pygubu is a RAD tool which helps to develop python tknter base user interfaces.
* Download pygubu from [here](https://pypi.python.org/pypi/pygubu).
* And then extract .tar.gz file and execute following command.

```
python setup.py install
```
* Then execute [ChatView.py](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/UI/ChatView.py) file inside */UI* directory.

![ui](https://user-images.githubusercontent.com/7195953/34639820-4645c196-f30d-11e7-881a-ffb51ace6341.PNG)


#### CLI

You can interact with bot through command line interface. So find [cli.py](https://github.com/nimeshabuddhika/Tensorflow-Chatbot/blob/master/CLI/cli.py) file from */CLI* directory and then execute.

![cli](https://user-images.githubusercontent.com/7195953/34639005-60870836-f2fd-11e7-8f73-ed0d100b5521.PNG)


## Built With

* [Tensorflow](https://www.tensorflow.org/get_started/) - Build neural network
* [Django](https://www.djangoproject.com/) - Web application
* [Tkinter](https://wiki.python.org/moin/TkInter) - GUI
* [Pygubu](https://pypi.python.org/pypi/pygubu) - To Design GUI
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
