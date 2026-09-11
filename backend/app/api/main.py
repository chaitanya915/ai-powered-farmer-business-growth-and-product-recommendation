from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.health import router as health_router
from app.database.init_db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="AI-Powered Farmer Business Growth",
    description=(
        "Agriculture and agri-business decision-support "
        "application."
    ),
    version="0.2.0",
    lifespan=lifespan,
)


app.include_router(health_router)


@app.get("/")
def root():
    return {
        "project": "AI-Powered Farmer Business Growth",
        "status": "running",
        "version": "0.2.0",
    }