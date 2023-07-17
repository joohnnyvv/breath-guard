import numpy as np
import joblib
from flask import Flask, request, jsonify

app = Flask(__name__)

svm_model = joblib.load("MLmodel.joblib")


@app.route("/")
def index():
    return "Hello World"


@app.route("/get-prediction", methods=["POST"])
def predict_if_patient_has_lung_cancer():
    try:
        user_data = request.json["user_data"]
        new_patient = np.array(user_data)
        new_patient = new_patient.reshape(1, -1)

        prediction = svm_model.predict(new_patient)

        result = {
            "prediction": prediction.tolist()
        }

        return jsonify(result)
    except KeyError:
        error = {
            "error": "Invalid request payload. 'user_data' key is missing."
        }
        return jsonify(error), 400
    except Exception:
        error = {
            "error": "An error occurred while processing the request."
        }
        return jsonify(error), 500


if __name__ == "__main__":
    app.run(debug=True)
