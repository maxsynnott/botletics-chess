const app = require("express")();

app.get("/", (req: any, res: any) => {
	res.send("Hello World!");
});

app.listen(8080);
