/*
package com.kelompok4.deteksijatuh

import android.content.Context
import com.google.android.gms.auth.api.signin.internal.Storage
import com.google.auth.oauth2.GoogleCredentials
import com.google.cloud.storage.BlobId
import com.google.cloud.storage.BlobInfo
import com.google.cloud.storage.Storage
import com.google.cloud.storage.StorageOptions
import java.io.IOException

class CloudStorageManager(context: Context) {

    private val storage: Storage
    private val bucketName: String

    init {
        val credentialsStream = context.assets.open("service_account.json")
        val credentials = GoogleCredentials.fromStream(credentialsStream)
        val projectId = "falldetectionk4"

        val options = StorageOptions.newBuilder()
            .setProjectId(projectId)
            .setCredentials(credentials)
            .build()

        storage = options.service
        bucketName = "kfall-dataset" // Ganti dengan nama bucket Anda
    }

    // Fungsi untuk mengunggah file ke bucket
    fun uploadFile(namaFile: String, data: ByteArray) {
        val blobId = BlobId.of(bucketName, namaFile)
        val blobInfo = BlobInfo.newBuilder(blobId).build()
        storage.create(blobInfo, data)
    }

    // Fungsi untuk mengunduh file dari bucket
    fun downloadFile(namaFile: String): ByteArray? {
        val blobId = BlobId.of(bucketName, namaFile)
        val blob = storage.get(blobId)
        return blob?.getContent()
    }

    // Fungsi untuk mengunduh file JSON dan mengembalikannya sebagai String
    fun downloadJsonFile(namaFile: String): String? {
        val blobId = BlobId.of(bucketName, namaFile)
        val blob = storage.get(blobId)
        return blob?.getContent()?.toString(Charsets.UTF_8)
    }
}
*/
