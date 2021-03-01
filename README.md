## Description

Personally, I’m fascinated by sports. However I’ve never made a website or app about the thing I love… This is my time to shine! 

When I heard about this project I immediately started searching for APIs. I finally found a free NBA API. Within this API I get to fetch all sorts of data, I’ll show this data on the screen dynamically.

This app will show the following data:
- previous played games   
- Current NBA Teams 
- Players per team

**Screenshots app:** <br>
<img src="https://github.com/sreen020/NBA-WEBAPP/blob/master/img/github-images/screenshot-app2.png" width="300">
<img src="https://github.com/sreen020/NBA-WEBAPP/blob/master/img/github-images/screenshot-app.png" width="300">

Getting interested? Take a look!

## Live link
**For the best performance visit the app on your phone**<br>
https://sreen020.github.io/NBA-WEBAPP/


## Install

**Clone folder**<br>
Then you need to download this project and open it with your code editor. To do this, open your terminal with the correct path in which you want this repository. Example:

cd/Desktop/projects/

Then type the following line of code into your terminal:
```
git clone git@github.com:sreen020/web-app-from-scratch-2021.git
```

3. Start and run the code
Go to the repository in the terminal and add the following line of code below:
This will start a python server.

```
python -m SimpleHTTPServer 8000
```
Now you can open http://localhost:8000/ in your browser to view the web application.

## API
This API contains information about the most popular basketball league, the NBA. Within this API there is a lot of data. Data from each player, data from each team and data from each game. 

This is a snipped of the JSON I get back from the API. This example shows how I recieve the game data.
```
0:{
  "id":47179
  "date":"2019-01-30T00:00:00.000Z"
  "home_team": {
    "id":2
    "abbreviation":"BOS"
    "city":"Boston"
    "conference":"East"
    "division":"Atlantic"
    "full_name":"Boston Celtics"
    "name":"Celtics"
  }
  "home_team_score":126
  "period":4
  "postseason":false
  "season":2018
  "status":"Final"
  "time":" "
  "visitor_team": {
    "id":4
    "abbreviation":"CHA"
    "city":"Charlotte"
    "conference":"East"
    "division":"Southeast"
    "full_name":"Charlotte Hornets"
    "name":"Hornets"
}
  "visitor_team_score":94
}
```
There are more APIs who can get this data but most of them aren’t free. This one is!
To find out more about this API, read more on:
https://rapidapi.com/theapiguy/api/free-nba/details

## Diagrams

Actor diagram:
![Actor diagram](https://github.com/sreen020/NBA-WEBAPP/blob/master/img/github-images/actorDiagramNew.png)

Interaction diagram:
![Interaction diagram](https://github.com/sreen020/web-app-from-scratch-2021/blob/master/img/github-images/Interaction-diagram.png)




