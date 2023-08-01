
# BreathGuard: AI-Powered Lung Cancer Risk Predictor (Work in Progress)

The project uses a machine learning model created in a two-person group as part of a class at the university. I used the [Flask](https://flask.palletsprojects.com/en/2.3.x/) library to create the REST API. [Joblib](https://joblib.readthedocs.io/en/stable/) was used to load the machine learning model saved in .joblib format. The graphical interface is provided through an application written in [React](https://react.dev), using several libraries such as [react-bootstrap](https://react-bootstrap.netlify.app), and [react-icons](https://react-icons.github.io/react-icons/).

## Table of Contents

- [Related](#related)
- [Installation](#installation)
- [Run Locally](#run-locally)

## Related

Link to the dataset used to train the model:
https://www.kaggle.com/datasets/thedevastator/cancer-patients-and-air-pollution-a-new-link

Link to the college project repository:
https://github.com/arix2000/MachineLearningProject

## Installation

To run this project locally, you need to have Python installed on your system. Follow these steps to install the required dependencies:

#### 1. Install NumPy:
NumPy is a fundamental package for scientific computing with Python. It is a prerequisite for several libraries used in this project.
```bash
  pip install numpy
```
#### 2. Install Joblib:
Joblib is a library for lightweight pipelining in Python. It is used for saving and loading machine learning models in this project.
```bash
  pip install joblib
```
#### 3. Install Flask:
Flask is a micro web framework used for building web applications and APIs in Python.
```bash
  pip install flask
```
#### 4. Install Client Dependencies:
This project includes a frontend built with React.js. To install the necessary dependencies for the frontend, navigate to the "client" directory and run the following command:
```bash
  cd client
  npm install
```

## Run Locally

Follow these steps to run the project locally:

#### 1. Run ML Backend:
First, navigate to the ML directory and run main.py to start the Python backend:
```bash
  cd ml_model
  python main.py
```
#### 2. Run React Frontend:
Next, in a separate terminal or command prompt, navigate to the client directory and start the React frontend:
```bash
  cd client
  npm start
```   

## Screenshots
| Desktop View                                          | Mobile View                                          |
|-------------------------------------------------------|------------------------------------------------------|
| ![Desktop1](https://github.com/joohnnyvv/breath-guard/assets/110868938/739ad801-fe91-4b0a-80a1-f35f43659621) | ![Mobile1](https://github.com/joohnnyvv/breath-guard/assets/110868938/24bcaf33-d872-405f-bc92-59a01e56ea49) |
| ![Desktop2](https://github.com/joohnnyvv/breath-guard/assets/110868938/71e72ac8-fcb9-46a8-8242-baad967ad364") | ![Mobile2](https://github.com/joohnnyvv/breath-guard/assets/110868938/cfb7445e-0b38-44df-817e-e434e301cdb7) |
| ![Desktop3](https://github.com/joohnnyvv/breath-guard/assets/110868938/74805448-ef68-47a1-b47f-e9aae1a4d145) | ![Mobile3](https://github.com/joohnnyvv/breath-guard/assets/110868938/5da57fa9-26e5-47c2-82e6-d47955803bf7) |
|                                                       | ![Mobile4](https://github.com/joohnnyvv/breath-guard/assets/110868938/a8d5a75a-01e3-419f-b94f-87a2a8b520f1) |
