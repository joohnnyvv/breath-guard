
# BreathGuard: AI-Powered Lung Cancer Risk Predictor (Work in Progress)

The project uses a machine learning model created in a two-person group as part of a class at the university. I used the [Flask](https://flask.palletsprojects.com/en/2.3.x/) library to create the REST API. [Joblib](https://joblib.readthedocs.io/en/stable/) was used to load the machine learning model saved in .joblib format. The graphical interface is provided through an application written in [React](https://react.dev), using several libraries such as [react-bootstrap](https://react-bootstrap.netlify.app), and [react-icons](https://react-icons.github.io/react-icons/).




## Related

Link to the dataset used to train the model:
https://www.kaggle.com/datasets/thedevastator/cancer-patients-and-air-pollution-a-new-link

Link to the college project repository:
https://github.com/arix2000/MachineLearningProject

## Installation

To run this project locally, you need to have Python installed on your system. Follow these steps to install the required dependencies:

### 1. Install NumPy:
NumPy is a fundamental package for scientific computing with Python. It is a prerequisite for several libraries used in this project.
```bash
  pip install numpy
```
### 2. Install Joblib:
Joblib is a library for lightweight pipelining in Python. It is used for saving and loading machine learning models in this project.
```bash
  pip install joblib
```
### 3. Install Flask:
Flask is a micro web framework used for building web applications and APIs in Python.
```bash
  pip install flask
```
### 4. Install Client Dependencies:
This project includes a frontend built with React.js. To install the necessary dependencies for the frontend, navigate to the "client" directory and run the following command:
```bash
  cd client
  npm install
```

## Run Locally

Follow these steps to run the project locally:

### 1. Run ML Backend:
First, navigate to the ML directory and run main.py to start the Python backend:
```bash
  cd ML
  python main.py
```
### 2. Run React Frontend:
Next, in a separate terminal or command prompt, navigate to the client directory and start the React frontend:
```bash
  cd client
  npm start
```   
    
