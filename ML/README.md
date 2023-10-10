# Lung-Cancer-Prediction-Model

This repository contains a machine learning model and an API for predicting lung cancer.

## Getting Started

## Deployment
The API is deployed on Heroku. You can access it at [https://lung-cancer-prediction-d3d07d9e4aad.herokuapp.com](https://lung-cancer-prediction-d3d07d9e4aad.herokuapp.com)

### Prerequisites

- Python 3.7+
- Flask
- scikit-learn
- joblib
- numpy

### Installation

1. Clone the repository:

```bash
git clone https://github.com/joohnnyvv/Lung-Cancer-Prediction-Model.git
```
2. Install the required packages:
   
```
pip install -r requirements.txt
```

### API Routes

- POST /get-prediction: Predict if a patient has lung cancer.\
Input: JSON data with patient features.\
Output: JSON response with prediction result.
