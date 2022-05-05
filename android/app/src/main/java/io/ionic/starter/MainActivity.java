package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

import com.getcapacitor.community.database.sqlite.CapacitorSQLite;
//import com.ahm.capacitor.biometric.BiometricAuth;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(CapacitorSQLite.class);
  }
}
//add(BiometricAuth.class);