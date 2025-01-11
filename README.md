# 🌍 AI Environmental Impact Analyzer

## 🌟 Project Overview
The **AI Environmental Impact Analyzer** is a full-stack application designed to calculate and present the environmental impact of consumer goods. Leveraging artificial intelligence, the tool analyzes product descriptions, manufacturing details, and supply chain information to generate an environmental footprint score. This project aims to promote sustainable consumer behavior by providing transparent and actionable insights into the environmental impact of purchased products.

---

## ✨ Features
- **🔍 Product Description Analysis**: Uses AI to parse and understand product descriptions.
- **🏭 Manufacturing Data Insights**: Evaluates the environmental impact of manufacturing processes.
- **🚚 Supply Chain Assessment**: Tracks supply chain details to determine carbon footprint and sustainability.
- **📊 Environmental Footprint Score**: Aggregates data into a comprehensible score for the user.
- **💻 User-Friendly Interface**: Interactive dashboard for displaying detailed analysis and suggestions for eco-friendly alternatives.

---

## 🛠️ Tech Stack
### 🎨 Frontend
- **React.js**: For building a responsive and dynamic user interface.
- **Tailwind CSS**: For modern and customizable styling.

### 🌐 Backend
- **Node.js with Express.js**: For handling API requests and server-side logic.
- **Python (FastAPI)**: For AI model integration and data analysis.

### 🤖 AI/ML
- **Natural Language Processing (NLP)**: To analyze textual data like product descriptions and supply chain details.
- **TensorFlow/PyTorch**: For training and deploying AI models.
- **Pre-trained Models**: Fine-tuned models like BERT for textual analysis.

### 🗄️ Database
- **MongoDB**: For storing user data and analysis results.

### 🚀 Deployment
- **Frontend**: Deployed on Vercel/Netlify.
- **Backend**: Hosted on AWS/Heroku.

---

## ⚙️ Installation
### Prerequisites
- **Node.js** and **npm**
- **Python** (version 3.8 or higher)
- MongoDB instance (local or cloud-based)

### Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-environmental-impact-analyzer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ai-environmental-impact-analyzer
   ```

3. Install dependencies for the frontend:
   ```bash
   cd client
   npm install
   ```

4. Install dependencies for the backend:
   ```bash
   cd ../server
   npm install
   ```

5. Set up the Python environment for AI:
   ```bash
   python -m venv env
   source env/bin/activate # For Windows: env\Scripts\activate
   pip install -r requirements.txt
   ```

6. Configure environment variables:
   - Create a `.env` file in both `client` and `server` directories.
   - Add your MongoDB URI, API keys, and other secrets.

7. Run the application:
   - Start the backend:
     ```bash
     cd server
     npm start
     ```
   - Start the frontend:
     ```bash
     cd client
     npm start
     ```

---

## 📖 Usage
1. Open the application in your browser.
2. Log in or create an account.
3. Input product details or upload relevant documentation.
4. View the environmental footprint score and detailed analysis.
5. Explore recommendations for more sustainable alternatives.

---

## 🧠 AI Model Details
- **Training Data**: Includes datasets on supply chain emissions, manufacturing processes, and sustainability metrics.
- **Algorithm**: Fine-tuned transformer models for textual analysis combined with regression models for scoring.
- **Output**: Scores are normalized between 0 (eco-friendly) and 100 (high environmental impact).

---

## 🚀 Roadmap
1. **Phase 1**: Core functionality (MVP)
   - Product analysis and footprint scoring.
2. **Phase 2**: Advanced features
   - Eco-friendly product suggestions.
   - Integration with e-commerce platforms.
3. **Phase 3**: Scalability
   - Global product database.
   - Multilingual support.

---

## 🤝 Contributing
We welcome contributions from the community! Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Create a pull request with a detailed description of your changes.

---

## 📜 License
This project is licensed under the [GNU General Public License v3.0](https://github.com/Kaeytee/Ai-Environmental-Impact-Analyzer/blob/main/LICENSE).

---

## 📧 Contact
For questions or feedback, please reach out to:
- **Project Lead**: Austin Bediako
- **Email**: austinbediako4@gmail.com

Feel free to report issues or suggest improvements via the [GitHub Issues](https://github.com/Kaeytee/Ai-Environmental-Impact-Analyzer) page.
