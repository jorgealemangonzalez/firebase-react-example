##Disabled Google login button
###Issue
Web console says: "Not a valid origin for the client: http://localhost:3000 has not been whitelisted for client ID 
***.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and whitelist this origin for 
your project's client ID."
###Solution
Go to [console.developers.google.com/apis/credentials](console.developers.google.com/apis/credentials) and
create a new OAuth credential whitelisting localhost:3000.