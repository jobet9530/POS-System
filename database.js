import { Database } from "bun:sqlite";

try{
    const db = new Database(":memory:", (error) => {
        if(error)
            throw new Error(error);

            db.exec("CREATE TABLE IF NOT EXISTS Product (product_id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT NOT NULL, price REAL NOT NULL, quantity INTEGER NOT NULL, barcode TEXT UNIQUE, category TEXT NOT NULL)");
    });
}