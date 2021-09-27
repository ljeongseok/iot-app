import paho.mqtt.client as mqtt
import random
from time import sleep

# 1. MQTT 클라이언트 객체 인스턴스화

client = mqtt.Client()

try:
    # 2. 브로커 연결
    client.connect("localhost")

    while True:
        # 3. 토픽 메시지 발행
        temp = random.randint(-10,40)
        client.publish("iot/hong/sensors/kitchen/temp",temp)
        client.loop(2)
        
        humi = random.randint(0,100)
        client.publish("iot/hong/sensors/kitchen/humi",humi)
        client.loop(2)

        illu = random.randint(0,100)
        client.publish("iot/hong/sensors/kitchen/illu",illu)
        client.loop(2)

        sleep(2)

except Exception as err:
    print("에러 : %s" %err)