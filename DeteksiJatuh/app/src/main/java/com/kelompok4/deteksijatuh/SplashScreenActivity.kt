package com.kelompok4.deteksijatuh

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import androidx.appcompat.app.AppCompatActivity
import com.airbnb.lottie.LottieAnimationView

class SplashScreenActivity : AppCompatActivity() {

    private val SPLASH_DISPLAY_LENGTH = 3000L // Durasi splash screen dalam milidetik

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_splash_screen)

        val lottieAnimationView = findViewById<LottieAnimationView>(R.id.animationView)
        lottieAnimationView.setAnimation("animationfall.json") // Ganti "your_animation.json" dengan nama file animasi Lottie Anda
        lottieAnimationView.playAnimation()

        // Menggunakan handler untuk menunda pindah ke MainActivity
        Handler().postDelayed({
            val mainIntent = Intent(this@SplashScreenActivity, MainActivity::class.java)
            startActivity(mainIntent)
            finish() // Menutup activity agar tidak kembali lagi ke splash screen saat tombol back ditekan
        }, SPLASH_DISPLAY_LENGTH)
    }
}
