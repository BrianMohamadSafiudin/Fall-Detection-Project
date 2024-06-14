package com.kelompok4.deteksijatuh

import android.content.Context
import android.media.MediaPlayer
import android.os.Handler
import android.os.Looper
import android.util.Log
import java.io.IOException

object AlarmUtils {
    private var mediaPlayer: MediaPlayer? = null
    private var handler: Handler? = null
    private val stopRunnable = Runnable {
        stopAlarm()
    }

    fun playAlarm(context: Context) {
        try {
            if (mediaPlayer == null) {
                mediaPlayer = MediaPlayer.create(context, R.raw.dangeralarm1) // Ensure you have dangeralarm.mp3 in your res/raw folder
                mediaPlayer?.isLooping = true
            }
            mediaPlayer?.start()

            handler = Handler(Looper.getMainLooper())
            handler?.postDelayed(stopRunnable, 5000) // Stop the alarm after 30 seconds
        } catch (e: IOException) {
            Log.e("AlarmUtils", "IOException while preparing MediaPlayer: ${e.message}", e)
        } catch (e: IllegalStateException) {
            Log.e("AlarmUtils", "IllegalStateException while preparing MediaPlayer: ${e.message}", e)
        } catch (e: Exception) {
            Log.e("AlarmUtils", "Unexpected exception while preparing MediaPlayer: ${e.message}", e)
        }
    }

    fun stopAlarm() {
        try {
            mediaPlayer?.stop()
            mediaPlayer?.release()
            mediaPlayer = null
            handler?.removeCallbacks(stopRunnable)
        } catch (e: Exception) {
            Log.e("AlarmUtils", "Unexpected exception while stopping MediaPlayer: ${e.message}", e)
        }
    }
}
