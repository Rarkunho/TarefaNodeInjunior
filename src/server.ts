import { app } from "@/app"
import { env } from "@/env/index"

app.listen({
    host: "0.0.0.0",
    port: 3333
}).then(() => (
    console.log("Servidor rodando em Port 3333")
))