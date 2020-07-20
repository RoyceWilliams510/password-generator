# password-generator
This application is used for users who would like to generate quick passwords on the go. In this application the user can select what their password would look like based on a variety of different character types ranging from capital letters, lowercase letters, numbers and special characters

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
For all users the first thing you are going to need is to install git. If you already have git installed and have configured your account onto your local machine, then skip the following steps and go to the installing section. You can find the instructions on how to download and install the git software for operating systems of Linux, Mac and Windows at the following link: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

<br>
Once you are on the page select the corresponding download link to the operating system of your own machine and follow the instructions.
<br>
After having installed the software and have created your own github account, you will now have to link your account to your local machine and you can do this by following the instructions at this link:  

<a href ="https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" >SSH Key</a>


### Installing

Now that you have git installed and you have configured your account to your local machine your next step will be to click on the clone or download button on the page of this repository and click on the clipboard symbol to copy the link. Next open up terminal (mac) or bash (windows), navigate to the directory you want your cloned directory to reside at, and type in the following code:

```
git clone
```

Then paste the copied link.

```
git clone git@github.com:RoyceWilliams510/password-generator.git
```

## Application's functionality

When you open the directory of the project the first thing that you will see is solely the readme document and that is because all of the source code of the project is actually situated in the Develop directory of the project. Once you've navigated to the Develop directory, you will see three different files, one being the index.html file, then the script.js file and finally the style.css file. These three files making up the 'holy trinity' of web developement and each being used for their respected purposes. In the index.html file there is a minimal amount of contents and that is because the entirity of this project can be ran on one page. For the script.js file there are three main functions that this application is based off of, there is the generatePassword() function the verifyLength() function and the writePassword() function. All of these are actually ran in a sequence of each other once the application is ran and the user clicks on the generate password button on the home screen. To try out the application for yourself here is a link to the [deployed application](https://roycewilliams510.github.io/password-generator/Develop/index.html).

### Overview of the directory

## Built with 
* [Javascript](https://www.javascript.com/)
* [HTML](https://www.w3schools.com/html/)

## License
[MIT](https://choosealicense.com/licenses/mit/)