## I. VERSÃO EM EXECUÇÃO DISPONÍVEL EM:

http://129.148.39.64:3000/devices

#### Devices API

<table>
  <tr>
    <th>Método</th>
    <th>Endpoint</th>
    <th>Uso</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/devices</td>
    <td>Retorna todos os devices</td>
  </tr>
  <tr>
    <td>GET</td>
    <td>/devices/{id}</td>
    <td>Retorna device e suas informações</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/devices</td>
    <td>Cria device</td>
  </tr>
  <tr>
    <td>PATCH</td>
    <td>/devices/{id}</td>
    <td>Atualiza device</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/devices/{id}</td>
    <td>Remove device</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/devices/information</td>
    <td>Envia informações do device</td>
  </tr>
</table>

#### MQTT

Um broker MQTT está disponível para envio de informações de dispositivos.

<p><code> mqtt://129.148.39.64:1883 </p></code>

Para enviar dados basta se conectar ao broker acima (não é necessário autenticação) e publicar no tópico 'device' o um JSON como o a seguir.

<p><code>
{
    "name": "Temperatura",
   "value": "25ºC",
    "device": "63f900df58aca56d40b61f6e"
}
</p></code>

> <b>Obs.:</b> O campo device deve ser preenchido com um ID válido de um device. Os campos 'name' e 'value' são livres para envio de quaisquer informações a partir de um device.

#### WebSocket

<p><code>
http://129.148.39.64:3000
</p></code>

> Listener: device

## II. EXECUÇÃO DO PROJETO LOCAL:

<b>Pré-requisito:</b> Docker Compose (https://github.com/docker/compose)

<b>Execução:</b>

```bash
$ docker-compose up -d --build
```