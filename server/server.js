const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jollibee",
});

db.connect((err) => {
  if (err) {
    console.error("Could not connect to MySQL:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL");
});

// Allow requests from your frontend (localhost:5173)
app.use(cors());

app.use("/category_img", express.static(path.join(__dirname, "category_img")));
app.use("/product_img", express.static(path.join(__dirname, "product_img")));

// API route to get languages
app.get("/languages_available", (req, res) => {
  const query =
    "SELECT language_name, language_code FROM languages where is_active=1";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    {
      res.json(results);
    }
  });
});

app.get("/category_list", (req, res) => {
  const query =
    "SELECT id,default_name,img_name FROM category where is_active=1";

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database query failed" });
    }
    {
      res.json(results);
    }
  });
});

app.get("/product_list", (req, res) => {
  const id = req.query.id;

  if (!id) {
    return res.status(400).json({ error: "ID parameter is required" });
  }

  let query;
  let queryParams;

  if (id == "0") {
    query =
      "SELECT id, default_name, img_name, price FROM products WHERE is_active = 1 AND category_id = 1";
    queryParams = []; // No need to pass 'id' for this case
  } else {
    query =
      "SELECT id, default_name, img_name, price FROM products WHERE is_active = 1 AND category_id = ?";
    queryParams = [id]; // Use the `id` for the query
  }

  db.query(query, queryParams, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching data" });
    }

    return res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
