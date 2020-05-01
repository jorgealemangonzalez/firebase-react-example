##Disabled Google login button
###Issue
Web console says: "Not a valid origin for the client: http://localhost:3000 has not been whitelisted for client ID 
***.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and whitelist this origin for 
your project's client ID."
###Solution
Go to [console.developers.google.com/apis/credentials](console.developers.google.com/apis/credentials) and
create a new OAuth credential whitelisting localhost:3000.


##User is not beeing created in firebase console
### Issue
When I set up a login with google button and the user logs-in it doesn't shows up
on the firebase authentication window.
###Solution
`npm i firebase`

Initialize the app: [https://www.npmjs.com/package/firebase](https://www.npmjs.com/package/firebase)


More information [on the firebase webpage.](https://firebase.google.com/docs/auth/web/manage-users)
 