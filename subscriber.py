import json
import asyncio
import firebase_admin
from firebase_admin import credentials, firestore
from typing import Final
from telegram.ext import Application

# Initialize Firebase Admin application
cred = credentials.Certificate('falldetectionk4-07f9faa580c1.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

# Function to read subscriber data from JSON file
def load_subscribers():
    with open('subscribers.json', 'r') as file:
        data = json.load(file)
    return data

# Function to read prediction data from JSON file
def load_prediction():
    with open('hasilprediksi.json', 'r') as file:
        data = json.load(file)
    return data['prediction']

TOKEN: Final = "6652548059:AAHMjQxSifta_RDNP99XZe3TxOHOFh0gGwA"
BOT_USERNAME: Final = "@FallDetectionMonitorBot"

async def send_periodic_messages(app):
    while True:
        subscribers = load_subscribers()
        prediction = load_prediction()
        print("Checking the list of subscribed customers...")

        # Check if the prediction is "Stand for 30 seconds (D01/01)" or "Walk normally and turn for 4m (D06/06)"
        if prediction in ["Stand for 30 seconds (D01/01)", "Stand normally and walk (D06/06)"]:
            for subscriber_id in subscribers:
                # Send prediction result to Firebase
                doc_ref = db.collection('predictions').document(str(subscriber_id))
                doc_ref.set({
                    'prediction': prediction
                })           
                print(f"Prediction result is '{prediction}'. Skipping message sending.")
        elif subscribers:  # Only send messages if there are subscribers
            for subscriber_id in subscribers:
                print(f"Sending periodic message to {subscriber_id}")
                await app.bot.send_message(subscriber_id, f"Darurat!! Hasil prediksi: {prediction}")
                # Send prediction result to Firebase
                doc_ref = db.collection('predictions').document(str(subscriber_id))
                doc_ref.set({
                    'prediction': prediction
                })
        else:
            print("No subscribed customers.")

        await asyncio.sleep(3)

if __name__ == '__main__':
    print('Starting bot...')
    app = Application.builder().token(TOKEN).build()

    # Start sending periodic messages
    asyncio.run(send_periodic_messages(app))
    print('Running send_periodic_messages()')
