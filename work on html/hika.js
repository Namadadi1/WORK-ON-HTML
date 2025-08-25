ings/GreetingReceiver.java
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.speech.tts.TextToSpeech;
import java.util.Locale;

public class GreetingReceiver extends BroadcastReceiver {
    private TextToSpeech tts;

    @Override
    public void onReceive(Context context, Intent intent) {
        final String message = intent.getStringExtra("message");
        
        tts = new TextToSpeech(context, new TextToSpeech.OnInitListener() {
            @Override
            public void onInit(int status) {
                if (status == TextToSpeech.SUCCESS) {
                    tts.setLanguage(Locale.US);
                    tts.speak(message, TextToSpeech.QUEUE_FLUSH, null, null);
                }
            }
        });
    }
}