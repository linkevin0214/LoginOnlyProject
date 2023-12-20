package com.nanhaishop;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.shell.MainPackageConfig;

public class VersionModule extends ReactContextBaseJavaModule {

    VersionModule(ReactApplicationContext context) {
        super(context);
    }



    @Override
    public String getName() {
        return "VersionModule";
    }

    @ReactMethod
    public void getBuildConfigValue(String key, Callback callback) {
       if(BuildConfig.FLAVOR.equals("HuarayPN")){
           String result = "1" ;
           callback.invoke(result);
       }
        if(BuildConfig.FLAVOR.equals("nanhaiPN")){
            String result = "2" ;
            callback.invoke(result);
        }
        if(BuildConfig.FLAVOR.equals("nanhaitestPN")){
            String result = "3" ;
            callback.invoke(result);
        }
    }

}
