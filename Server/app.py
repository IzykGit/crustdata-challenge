from flask import Flask, request, jsonfiy
import json
import requests




def create_app():
    
    app = flask(__name__)
    
    with open("responses.json", "r") as file:
        responses = json.load(file)
    
    @app.route("/api/chatbot", methods=["POST"])
    def chatbot():
        user_message = request.json.get("message", "").lower()
        
        # Check if message matches predefined responses
        for key in responses:
            if key.lower() in user_message:
                return jsonify({"response": responses[key]})

        # If no predefined response, validate API request
        validated_response = validate_api_request(user_message)
        if validated_response:
            return jsonify({"response": validated_response})

    
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)