for FACEBOOK LOGIN: 
make an id in facebook developers  in following link : https://developers.facebook.com/docs/…
install fbsdk by following link : react-native install react-native-fbsdk
linked the dependencies by following cmd : react-native link react-native-fbsdk
for Android :
Assuming you have Android Studio installed, open the project with Android Studio.

If your react-native version is below 0.29.0

Go to MainActivity.java under app/src/main/java/com/<project name>/ to complete setup. Note that packages must be imported to use.

Add an instance variable of type CallbackManager in class.

import android.content.Intent;     // <--- import
import android.os.Bundle;

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;

public class MainActivity extends ReactActivity {
    CallbackManager mCallbackManager;
    //...
Register sdk package in method getPackages().

@Override
protected List<ReactPackage> getPackages() {
    mCallbackManager = new CallbackManager.Factory().create();
    ReactPackage packages[] = new ReactPackage[]{
        new MainReactPackage(),
        new FBSDKPackage(mCallbackManager),
    };
    return Arrays.<ReactPackage>asList(packages);
}
Override onActivityResult().

@Override
public void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);
    mCallbackManager.onActivityResult(requestCode, resultCode, data);
}
Before you can run the project, follow the Getting Started Guide for Facebook Android SDK to set up a Facebook app. You can skip the build.gradle changes since that's taken care of by the rnpm link step above, but make sure you follow the rest of the steps such as calling FacebookSdk.sdkInitialize and updating strings.xml and AndroidManifest.xml. Note that react-native project doesn't have the Application class, so you'll need to create an implementation of the Application class yourself.

If your react-native version is 0.29 or above

Go to MainApplication.java and MainActivity.java under app/src/main/java/com/<project name>/ to complete setup.

In MainApplication.java,

Add an instance variable of type CallbackManager and its getter.

import com.facebook.CallbackManager;
import com.facebook.FacebookSdk;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.facebook.appevents.AppEventsLogger;
...

public class MainApplication extends Application implements ReactApplication {

  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }
    //...
Override onCreate() method

@Override
public void onCreate() {
  super.onCreate();
  FacebookSdk.sdkInitialize(getApplicationContext());
  // If you want to use AppEventsLogger to log events.
  AppEventsLogger.activateApp(this);
}
Register sdk package in method getPackages().

private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new FBSDKPackage(mCallbackManager)
      );
    }
};
In MainActivity.java

Override onActivityResult() method

import android.content.Intent;

public class MainActivity extends ReactActivity {

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        MainApplication.getCallbackManager().onActivityResult(requestCode, resultCode, data);
    }
    //...
Before you can run the project, follow the Getting Started Guide for Facebook Android SDK to set up a Facebook app. You can skip the build.gradle changes since that's taken care of by the rnpm link step above, and the step of calling FacebookSdk.sdkInitialize. But make sure you follow the rest of the steps such as updating strings.xml and AndroidManifest.xml.


usage : 
const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
      </View>
    );
  }
});



FOR GMAIL LOGIN  : 
install  : npm install react-native-google-signin --save
and link the following  by cmd  : react-native link react-native-google-signin,
Note: If you use React Native < v0.40 stick with v0.8.1 (npm install react-native-google-signin@0.8 --save).
 
 Project Guid : 
 for indroid : 
 Google project configuration

Open https://developers.google.com/identity/sign-in/android/start-integrating

Scroll down and click Get a configuration file button

Place the generated configuration file (google-services.json) into <YOUR_PROJECT_ROOT>/android/app
 2 . make sure goegle play service installed in sdk.
3. Installation

run react-native link react-native-google-signin

In android/settings.gradle you should have

...
include ':react-native-google-signin', ':app'
project(':react-native-google-signin').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-google-signin/android')
Update android/build.gradle with
...
dependencies {
    classpath 'com.android.tools.build:gradle:2.1.2' // <--- update this
    classpath 'com.google.gms:google-services:3.0.0' // <--- add this
}
Update android/app/build.gradle with
...
dependencies {
    compile fileTree(dir: "libs", include: ["*.jar"])
    compile "com.android.support:appcompat-v7:23.0.1"
    compile "com.facebook.react:react-native:+"
    compile(project(":react-native-google-signin")){         
        exclude group: "com.google.android.gms" // very important
    }
    compile 'com.google.android.gms:play-services-auth:9.2.1' // should be at least 9.0.0
}

apply plugin: 'com.google.gms.google-services' // <--- this should be the last line
Register Module (in MainApplication.java)
import co.apptailor.googlesignin.RNGoogleSigninPackage;  // <--- import

public class MainApplication extends Application implements ReactApplication {

  ......

  @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new RNGoogleSigninPackage() // <-- add this
      );
    }
  ......

}
Update gradle wrapper in android/gradle/wrapper/gradle-wrapper.properties
replace

distributionUrl=https\://services.gradle.org/distributions/gradle-2.4-all.zip
with

distributionUrl=https\://services.gradle.org/distributions/gradle-2.14-all.zip
4. Running on simulator

Make sure you have a simulator with Google Play installed.

Also to help with performances, install HAXM from the Android SDK Manager.

Running on device

Nothing special here, as long as you run your app on a Google Android device (again with play store installed !)

Usage : 
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

render() {

  <GoogleSigninButton
    style={{width: 48, height: 48}}
    size={GoogleSigninButton.Size.Icon}
    color={GoogleSigninButton.Color.Dark}
    onPress={this._signIn.bind(this)}/>
}


2. GoogleSignin

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
- hasPlayServices

Check if device has google play services installed. Always return true on iOS.

GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
    // play services are available. can now configure library
})
.catch((err) => {
  console.log("Play services error", err.code, err.message);
})



Push Notification  : 
install : Run npm install react-native-fcm --save
Run react-native link react-native-fcm (RN 0.29.1+, otherwise rnpm link react-native-fcm)
 
 Note : 
 current latest version: v8.x

for RN < 0.47.0, use react-native-fcm@7.5.1

for iOS SDK < 4, use react-native-fcm@6.2.3 (v6.x is still compatible with Firebase SDK v4)

for RN < 0.40.0, use react-native-fcm@2.5.6

for RN < 0.33.0, use react-native-fcm@1.1.0

for RN < 0.30.0, use react-native-fcm@1.0.15

local notification is not only available in V1

An example working project is available at: https://github.com/evollu/react-native-fcm/tree/master/Examples/simple-fcm-client;

in firebase console you can 
for Android: download google-services.json file and place it in android/app directory;

Android Configration : 
Edit android/build.gradle:
  dependencies {
    classpath 'com.android.tools.build:gradle:2.0.0'
+   classpath 'com.google.gms:google-services:3.0.0'
Edit android/app/build.gradle. Add at the bottom of the file:
  apply plugin: "com.android.application"
+ apply plugin: 'com.google.gms.google-services'
Edit android/app/src/main/AndroidManifest.xml:
  <application
    ...
    android:theme="@style/AppTheme">

+   <service android:name="com.evollu.react.fcm.MessagingService" android:enabled="true" android:exported="true">
+     <intent-filter>
+       <action android:name="com.google.firebase.MESSAGING_EVENT"/>
+     </intent-filter>
+   </service>

+   <service android:name="com.evollu.react.fcm.InstanceIdService" android:exported="false">
+     <intent-filter>
+       <action android:name="com.google.firebase.INSTANCE_ID_EVENT"/>
+     </intent-filter>
+   </service>

    ...
Edit {YOUR_MAIN_PROJECT}/app/build.gradle:
 dependencies {
+    compile project(':react-native-fcm')
+    compile 'com.google.firebase:firebase-core:10.0.1' //this decides your firebase SDK version
     compile fileTree(dir: "libs", include: ["*.jar"])
     compile "com.android.support:appcompat-v7:23.0.1"
     compile "com.facebook.react:react-native:+"  // From node_modules
 }
Edit android/settings.gradle
  ...
+ include ':react-native-fcm'
+ project(':react-native-fcm').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fcm/android')
  include ':app'
Config for notification and click_action in Android

To allow android to respond to click_action, you need to define Activities and filter on specific intent. Since all javascript is running in MainActivity, you can have MainActivity to handle actions:

Edit AndroidManifest.xml:

  <activity
    android:name=".MainActivity"
    android:label="@string/app_name"
    android:windowSoftInputMode="adjustResize"
+   android:launchMode="singleTop"
    android:configChanges="keyboard|keyboardHidden|orientation|screenSize">
    <intent-filter>
      <action android:name="android.intent.action.MAIN" />
      <category android:name="android.intent.category.LAUNCHER" />
    </intent-filter>
+   <intent-filter>
+     <action android:name="fcm.ACTION.HELLO" />
+     <category android:name="android.intent.category.DEFAULT" />
+   </intent-filter>
  </activity>
Notes:

launchMode="singleTop" is to reuse MainActivity
replace "fcm.ACTION.HELLO" by the click_action you want to match
If you are using RN < 0.30.0 and react-native-fcm < 1.0.16, pass intent into package, edit MainActivity.java:

RN 0.28:
  import com.facebook.react.ReactActivity;
+ import android.content.Intent;

  public class MainActivity extends ReactActivity {

+   @Override
+   public void onNewIntent (Intent intent) {
+     super.onNewIntent(intent);
+       setIntent(intent);
+   }       
NOTE: Verify that react-native links correctly in MainApplication.java

import android.app.application
...
+import com.evollu.react.fcm.FIRMessagingPackage;
....

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new VectorIconsPackage(),
+         new FIRMessagingPackage(),
          new RNDeviceInfo(),
      );
    }
RN <= 0.27:
  import com.facebook.react.ReactActivity;
+ import android.content.Intent;

  public class MainActivity extends ReactActivity {

+   @Override
+   protected void onNewIntent (Intent intent) {
+     super.onNewIntent(intent);
+       setIntent(intent);
+   }       
Notes:

@Override is added to update intent on notification click



Usage : 

 FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'You Have Recieve A New Message',
      priority: "high",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
     });

     componentWillMount(){
  FCM.requestPermissions();
  FCM.getFCMToken().then(token =>{
      console.log('token',token)
      
   

  })

  Note : 
  to get token and notification body should make 2 class in android/app/src/java