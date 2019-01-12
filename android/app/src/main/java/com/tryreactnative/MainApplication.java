package com.tryreactnative;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNGestureHandlerPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {

    // 去掉在 Android P 上的提醒弹窗
    closeAndroidPDialog();

    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }

  // 去掉在 Android P 上的提醒弹窗
  // ref: https://www.jianshu.com/p/f87fe39caf1d
  private void closeAndroidPDialog(){
    try {
      Class aClass = Class.forName("android.content.pm.PackageParser$Package");
      Constructor declaredConstructor = aClass.getDeclaredConstructor(String.class);
      declaredConstructor.setAccessible(true);
    } catch (Exception e) {
      e.printStackTrace();
    }
    try {
      Class cls = Class.forName("android.app.ActivityThread");
      Method declaredMethod = cls.getDeclaredMethod("currentActivityThread");
      declaredMethod.setAccessible(true);
      Object activityThread = declaredMethod.invoke(null);
      Field mHiddenApiWarningShown = cls.getDeclaredField("mHiddenApiWarningShown");
      mHiddenApiWarningShown.setAccessible(true);
      mHiddenApiWarningShown.setBoolean(activityThread, true);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
