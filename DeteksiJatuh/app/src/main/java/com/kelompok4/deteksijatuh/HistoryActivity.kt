package com.kelompok4.deteksijatuh


import android.os.Bundle
import android.view.MenuItem
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase
import java.text.SimpleDateFormat
import java.util.*

class HistoryActivity : AppCompatActivity() {

    private lateinit var historyAdapter: HistoryAdapter
    private lateinit var recyclerViewHistory: RecyclerView

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_history)

        // Aktifkan tombol kembali di ActionBar
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.apply {
            title = "History"
            setDisplayHomeAsUpEnabled(true)
        }
        // Initialize recyclerViewHistory
        recyclerViewHistory = findViewById(R.id.recyclerViewHistory)

        // Ambil data riwayat jatuh dari Firestore
        val db = Firebase.firestore
        db.collection("fallhistorys")
            .get()
            .addOnSuccessListener { result ->
                val historyList = mutableListOf<String>()
                for (document in result) {
                    val prediction = document.getString("fallhistory") ?: ""
                    val timestamp = document.getString("timestamp") ?: ""
                    historyList.add("Prediction: $prediction, Timestamp: $timestamp")
                }
                // Set up RecyclerView dengan data riwayat yang telah diambil
                setupRecyclerView(historyList)
            }
            .addOnFailureListener { exception ->
                // Tangani kegagalan ketika mengambil data dari Firestore
                // Misalnya, menampilkan pesan kesalahan atau melakukan fallback ke data lokal
            }
    }

    // Override untuk menangani klik tombol kembali di ActionBar
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        return when (item.itemId) {
            android.R.id.home -> {
                onBackPressed()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    // Inside setupRecyclerView function
    private fun setupRecyclerView(historyList: List<String>) {
        historyAdapter = HistoryAdapter(historyList)
        recyclerViewHistory.layoutManager = LinearLayoutManager(this)
        recyclerViewHistory.adapter = historyAdapter
    }
}
