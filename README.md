## Stream isn't working of diferent nodes ( broker instances ).

### How to reproduce:

1 - Intall de dependencies and start docker compose with `docker-compose up -d`

2 - Open one terminal and run `node index.js`. Then load the service `load './storage.service.js'`

3 - Open a second instance of the terminal and run `node index.js`. However, at this time load the service `load './assets.service.js'`

4 - On the second terminal ( the one you loaded the **assets** service ), run `call assets.get`. It should download the file from azure storage to the download folder but instead it will throw and error `>> ERROR: stream.pipe is not a function`.


**PS**: If you run load both services within the same terminal/broker it should work fine.