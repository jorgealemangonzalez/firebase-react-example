##Disabled Google login button
###Issue
Web console says: "Not a valid origin for the client: http://localhost:3000 has not been whitelisted for client ID 
***.apps.googleusercontent.com. Please go to https://console.developers.google.com/ and whitelist this origin for 
your project's client ID."
###Solution
Go to [console.developers.google.com/apis/credentials](console.developers.google.com/apis/credentials) and
create a new OAuth credential whitelisting localhost:3000.


## User is not beeing created in firebase console
### Issue
When I set up a login with google button and the user logs-in it doesn't shows up
on the firebase authentication window.
### Solution
`npm i firebase react-redux-firebase`

Initialize the app: [https://www.npmjs.com/package/firebase](https://www.npmjs.com/package/firebase)
Configure the reducer and use `useFirebase()` instead of regular firebase: [react redux firebase npm](https://www.npmjs.com/package/react-redux-firebase)

More information [on the firebase webpage.](https://firebase.google.com/docs/auth/web/manage-users)
 
## service_account_key.json not found
### Issue
The file with the required configuration to run the cloud functions locally does't work.
### Solution
Follow the guidelines under [https://firebase.google.com/docs/functions/local-emulator](https://firebase.google.com/docs/functions/local-emulator)

## CORS issue
### Issue
```
Access to fetch at 'http://localhost:5000/notes-9e2e3/us-central1/addMessage' from origin 'http://localhost:3000' has 
been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: 
No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, 
set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
``` 

Firebase SDK fails with CORS error when **ANY KIND OF ERROR** occur. So never believe it.

### Solution
Look at any other reason an error could raise. 

## Calling HTTP cloud functions: Your client does not have permission to get URL

### Solution
Take a look at the [cloud functions permissions setup](https://stackoverflow.com/questions/47511677/firebase-cloud-function-your-client-does-not-have-permission-to-get-url-200-fr)
