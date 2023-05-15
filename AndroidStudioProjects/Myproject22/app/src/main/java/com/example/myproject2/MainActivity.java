package com.example.myproject2;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
Button b1;
Button b2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        b1=(Button) findViewById(R.id.button);
       b1.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View v) {
               b1.setBackgroundColor(Color.RED);
           }
       });
    }
}
