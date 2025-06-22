# Entry-point for the backend server


from flask import Flask, request, jsonify
from flask_cors import CORS


def create_app():
    """Initialize the backend application."""
    app = Flask(__name__)
    CORS(app)

    @app.route("/submit-profile", methods=["POST"])
    def submit_profile():
        data = request.get_json(silent=True) or {}
        app.logger.info("Received profile data: %s", data)
        return jsonify({"status": "success"}), 200

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=5000)
