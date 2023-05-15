package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    EditText e1,e2;
    Button b1 ,b2;

    TextView t1;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        e1=(EditText) findViewById(R.id.editText);
        e2=(EditText) findViewById(R.id.editText2);
        b1=(Button) findViewById(R.id.button);
        b2=(Button) findViewById(R.id.button1);
        t1=(TextView) findViewById(R.id.textView);
        b2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String n1=e1.getText().toString();
                String n2=e2.getText().toString();
                String n3="";
                if(n1!= n3 && n2!=n3)
                {


                    int no1 = Integer.parseInt(e1.getText().toString());
                    int no2 = Integer.parseInt(e2.getText().toString());
                    int ans = no1 - no2;
                    //int ans = no1 - no2;
                    String a = String.valueOf(ans);
                    t1.setText(a);
                }
                else{
                    t1.setText("Please Enter No1 & No2");
                }

            }
        });
        b1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String n1=e1.getText().toString();
                String n2=e2.getText().toString();
                String n3="";

                //if (!e1.getText().toString().equals(null) && !e2.getText().toString().equals(null) )
                if(n1!= n3 && n2!=n3)
                {


                    int no1 = Integer.parseInt(e1.getText().toString());
                    int no2 = Integer.parseInt(e2.getText().toString());
                   int ans = no1 + no2;
                    //int ans = no1 - no2;
                    String a = String.valueOf(ans);
                    t1.setText(a);
                }
                else{
                    t1.setText("Please Enter No1 & No2");
                }
            }
        });
    }
}
