import express from 'express';
import connectDB from './config/db.js';
import contactRoutes from './routes/contact.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.use('/api', contactRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
