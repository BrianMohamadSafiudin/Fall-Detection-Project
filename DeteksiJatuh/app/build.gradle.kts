plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("com.google.gms.google-services")
}

android {
    namespace = "com.kelompok4.deteksijatuh"
    compileSdk = 34

    defaultConfig {
        applicationId = "com.kelompok4.deteksijatuh"
        minSdk = 24
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(
                getDefaultProguardFile("proguard-android-optimize.txt"),
                "proguard-rules.pro"
            )
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
    kotlinOptions {
        jvmTarget = "1.8"
    }
    viewBinding{
        enable = true
    }
    packagingOptions {
        resources.excludes.add("META-INF/INDEX.LIST")
        resources.excludes.add ("META-INF/DEPENDENCIES")
        resources.excludes.add("META-INF/LICENSE")
        resources.excludes.add ("META-INF/LICENSE.txt")
        resources.excludes.add ("META-INF/license.txt")
        resources.excludes.add ("META-INF/NOTICE")
        resources.excludes.add ("META-INF/NOTICE.txt")
        resources.excludes.add ("META-INF/notice.txt")
        excludes += "google/protobuf/field_mask.proto"
        exclude ("google/protobuf/wrappers.proto")
        excludes += "google/protobuf/type.proto"
    }
}

dependencies {

    implementation("androidx.core:core-ktx:1.9.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.constraintlayout:constraintlayout:2.1.4")
    implementation("com.google.firebase:firebase-firestore:25.0.0")
    implementation("com.google.firebase:firebase-database:21.0.0")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")

    implementation ("com.airbnb.android:lottie:4.2.0")
    implementation("com.github.LottieFiles:dotlottie-android:0.3.0")

    implementation ("androidx.legacy:legacy-support-v4:1.0.0")
    implementation ("com.github.hannesa2:paho.mqtt.android:4.2")
    //implementation ("com.github.AnyChart:AnyChart-Android:1.1.2")
    implementation ("com.github.PhilJay:MPAndroidChart:v3.1.0")

    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
//
//    implementation ("com.google.api-client:google-api-client-android:1.33.0")
//    implementation ("com.google.http-client:google-http-client-gson:1.39.2")
//    implementation ("com.google.oauth-client:google-oauth-client-jetty:1.31.5")
//
//    implementation ("com.google.cloud:google-cloud-storage:2.1.1")
//    implementation ("com.google.auth:google-auth-library-oauth2-http:1.3.0")
}


