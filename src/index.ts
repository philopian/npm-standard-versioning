import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Standard Versioning! 01");
});

app.get("/hello", (c) => {
  return c.text("Hello!");
});

app.get("/something", (c) => {
  return c.text("somthing!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
