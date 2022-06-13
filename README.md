# CrowdComputing

# Instructions for integerating TickTalkTurk into Toloka

You would need to host the scripts file on a website for toloka to pull it and runs it for each task. 
We recommend using github pages which are easily deployable and we tested it works smoothly.

The example below is for the setup with the evolution avatar but the same steps can be followed just by using the right files.

In edit project > task interface > Editor > settings add the following libraries

JS:
- $TOLOKA_ASSETS/js/toloka-handlebars-templates.js
- https://qiusihang.github.io/ticktalkturk/js/jquery.js
- https://qiusihang.github.io/ticktalkturk/js/chatbot.js
- (deployed src\toloka-avatar-evolution\client-avatar.js)

CSS:
- (deployed src\client.css)

In the HTML editor paste the following html:
- src\toloka-avatar-evolution\index.html

In the JS editor paste the following script:
- src\toloka-avatar-evolution\script.js

## Data specification
Input data:
- imageURL : string : required

Output data:
- result 1 : string : required 
- result 2 : string : required 
- result 3 : string : required 
- result 4 : string : required 
- result 5 : string : required 
