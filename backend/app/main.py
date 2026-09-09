
from fastapi import FastAPI

app = FastAPI(
    title="AI-Powered Farmer Business Growth API",
    description=(
        "AI-powered agriculture and agri-business "
        "decision-support system."
    ),
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "message": "AI-Powered Farmer Business Growth API",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }
