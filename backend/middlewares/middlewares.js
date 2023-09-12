import express from "express";
import multer from "multer"; //Multer ist ein sehr beliebtes Middleware-Modul, das speziell für die Verarbeitung von Dateiuploads in Express.js-Anwendungen entwickelt wurde.
import morgan from "morgan"; //Das Modul "morgan" wird verwendet, um HTTP-Anforderungen zu protokollieren, was besonders hilfreich ist, um Informationen über den Serverbetrieb und die Anforderungen zu erhalten.

export const upload = multer({ storage: multer.memoryStorage() }); //An dieser Stelle wird eine Upload-Instanz erstellt. Dabei wird die Funktion multer() aufgerufen und als Parameter ein Konfigurationsobjekt übergeben. In diesem Fall verwenden wir { storage: multer.memoryStorage() }, um den Speicherort für die hochgeladenen Dateien festzulegen. "multer.memoryStorage()" ist eine Funktion, die einen Speicherbereich im Arbeitsspeicher (RAM) für die zwischengespeicherten Dateien bereitstellt. Mit dieser Konfiguration werden die Dateien nicht dauerhaft auf der Festplatte gespeichert, sondern nur im Arbeitsspeicher gehalten.

export const app = express(); // erstellt eine Express-App und speichert sie in der Variable 'app'

app.use(express.json()); //eingehende Anfragedaten parsen

app.use(morgan("dev")); // Mit der Anweisung app.use() wird "morgan" als Middleware in der Express.js-Anwendung eingebunden. Der Parameter "dev" gibt an, welche Art von Protokollierung durchgeführt werden soll.In diesem Fall steht "dev" für ein vordefiniertes Ausgabeformat von "morgan", das als Entwicklungsformat bekannt ist. Wenn du deine Anwendung im Entwicklungsmodus ausführst, wird "morgan" die Protokollierung auf der Konsole ausgeben. Die protokollierten Informationen enthalten beispielsweise die HTTP-Methode, die angeforderte URL, den HTTP-Statuscode, die Antwortzeit und andere nützliche Informationen.
