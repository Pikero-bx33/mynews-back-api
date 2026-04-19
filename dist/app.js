import express from "express";
import cors from "cors";
import v1Router from "./routes/v1/index.js";
//import { notFound } from "./middlewares/notFound";
//import { errorHandler } from "./middlewares/errorHandler";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1", v1Router);
/* app.use(notFound);
app.use(errorHandler); */
export default app;
//# sourceMappingURL=app.js.map