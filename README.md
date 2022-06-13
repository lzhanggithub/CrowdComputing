# CrowdComputing
## TickTalkAvaLoKa (TTALK) - Investigating Avatar Evolution as a furtherance incentive on Toloka using Conversational Interfaces

Crowd sourcing enables a system to take full advantage of human perception, judgements and creativity in completing
certain task like labelling, analysis, and clustering. Crowd sourcing techniques has weaved crowds to efficient and
effective systems for getting the desired output. But a challenge remains is how to increase the quality of the task
output. The task output’s quality depends on the worker’s engagement and satisfaction while performing those tasks.
Therefore creating more engaged systems would increase the quality of the output.

The goal of this paper is to investigate avatar evolution as a furtherance incentive design strategy to increase
worker engagement and throughput of tasks. To facilitate engagement, we tend to incorporate avatar evolution
and conversational interfaces. For this we introduce **TickTalkAvaLoKa (TTALK)**, a system that utilizes Toloka as a
crowdwork platform, combining its functionalities with TickTalkTurk as a conversational interface and avatar evolution
as a furtherance incentive.

The main question in whether avatar evolution increases engagement are therefore:
1. Do personalized avatars increase worker engagement after completion of tasks?
2. Does avatar evolution increase the throughput of tasks?

Addressing these RQs, we carried out three experiments to investigate the engagement of users using avatars in
microtask crowdsourcing.We explored whether short-term goals for avatar evolution and enabling avatar customization
can reduce perceived workload, increase engagement, and increase throughput of tasks.

## Instructions for integerating TickTalkTurk into Toloka

You would need to host the scripts file on a website for toloka to pull it and run it for each task. 
We recommend using github pages which make it easy to deploy the necessary JS and CSS files. 

The example below is for the setup with the evolution avatar but the same steps can be followed just by using the right files.

### Editor

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

### Data specification
Input data:
- imageURL : string : required

Output data:
- result 1 : string : required 
- result 2 : string : required 
- result 3 : string : required 
- result 4 : string : required 
- result 5 : string : required 

### Upload data in Toloka
In Toloka > Upload data > upload:
- set manually = 1
- upload data\captcha_avatar_and_static.tsv