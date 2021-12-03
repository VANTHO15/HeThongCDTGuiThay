#include <ESP8266WiFi.h>
#include "FirebaseESP8266.h"

#define FIREBASE_HOST "https://smartdog-5e78b-default-rtdb.firebaseio.com/"
#define FIREBASE_AUTH "NJ9tou8WOK5zDbw6fwmE6clkFN9iaG0ffwI3pQk9"
#define WIFI_SSID "Van Tho 15"
#define WIFI_PASSWORD "vannhucu15"

FirebaseData firebaseData;
String path = "/";
void ReadDataToFirebase();
String DataToSTM = "";

#include <SoftwareSerial.h>
const byte RX = D6;
const byte TX = D7;
SoftwareSerial mySerial = SoftwareSerial(RX, TX);
void Send_Uart();    // UART STM

long long last=0;

void setup()
{
  Serial.begin(9600);
  mySerial.begin(115200);
  while (!mySerial);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("connecting");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println();
  Serial.print("connected: ") ;
  Serial.println(WiFi.localIP());

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);
  if (!Firebase.beginStream(firebaseData, path))
  {
    Serial.println("REASON:+ " + firebaseData.errorReason());
    Serial.println();
  }
  last =millis();
}

void loop()
{
  ReadDataToFirebase();
  Serial.println(DataToSTM);
  Send_Uart();
}
void ReadDataToFirebase()
{
  last =millis();
  if (Firebase.getString(firebaseData, path + "/Data"))
  {
    DataToSTM = firebaseData.stringData();
  }
   Serial.println(millis()-last);
}
void Send_Uart()
{
  last =millis();
  mySerial.print(DataToSTM);
  Serial.println(millis()-last);
}
