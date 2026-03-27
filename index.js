import express from 'express';
import {
  getAllUsers,
  getSingleUser,
  insertUser,
  deleteUser,
  getAllProducts,
  getSingleProduct,
  insertProduct,
  deleteProduct,
  updateProduct
} from "../Controller/shopleftController.js";

const app = express();
const port = 2123;

app.use(express.json());

// PRODUCTS ROUTES
app.get('/products', getAllProducts);                
app.get('/products/:product_code', getSingleProduct);
app.post('/products', insertProduct);                
app.delete('/products/:product_code', deleteProduct);
app.patch('/products/:product_code', updateProduct); 

// USERS ROUTES
app.get('/users', getAllUsers);                      
app.get('/users/:user_id', getSingleUser);           
app.post('/users', insertUser);                      
app.delete('/users/:user_id', deleteUser);           

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});