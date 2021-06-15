package com.ballprovider;


import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;

// import androidx.multidex.MultiDexApplication;
import android.app.Application;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;

// react native gesture handler
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;

// react native reanimated
import com.swmansion.reanimated.ReanimatedPackage;

// react native async storage
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;

// react native net info
import com.reactnativecommunity.netinfo.NetInfoPackage;


// lottie react native
import com.airbnb.android.react.lottie.LottiePackage;

// react native pushe
// import co.ronash.pushe.ReactNativePushe;


// react native keychain
import com.oblador.keychain.KeychainPackage;


// react native share
// import cl.json.RNSharePackage;
// import cl.json.ShareApplication;


// react native svg
// import com.horcrux.svg.SvgPackage;


// react native vector icons
import com.oblador.vectoricons.VectorIconsPackage;

// react native camera
// import org.reactnative.camera.RNCameraPackage;

// react native camera
import org.reactnative.camera.RNCameraPackage;

import java.util.Arrays;
import java.util.List;


public class MainApplication extends NavigationApplication {

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                            new RNGestureHandlerPackage(),
                            new AsyncStoragePackage(),
                            new LottiePackage(),
        //                    new ReactNativePushe(),
        //                    new PickerPackage(),
                            new KeychainPackage(),
        //                    new RNSharePackage(),
        //                    new SvgPackage(),
                            new VectorIconsPackage(),
                            new NetInfoPackage(),
        //                  new RNCameraPackage(),
                            new ReanimatedPackage(),
                            new RNCameraPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
