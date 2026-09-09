

from fastapi import FastAPI


app = FastAPI(
    title="AI-Powered Farmer Business Growth",
    description=(
        "Agriculture and agri-business decision-support "
        "application."
    ),
    version="0.1.0",
)


@app.get("/")
def root():
    return {
        "project": "AI-Powered Farmer Business Growth",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }

