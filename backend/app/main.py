from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.auth import router as auth_router
from app.api.health import router as health_router
from app.api.protected import router as protected_router
from app.core.config import settings
from app.database.init_db import init_db
from app.api.profile import router as profile_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title="AI-Powered Farmer Business Growth",
    description=(
        "Agriculture and agri-business decision-support application."
    ),
    version="0.3.0",
    lifespan=lifespan,
)


cors_origins = [
    origin.strip()
    for origin in settings.cors_origins.split(",")
    if origin.strip()
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(health_router)
app.include_router(auth_router)
app.include_router(protected_router)
app.include_router(profile_router)

@app.get("/")
def root():
    return {
        "project": "AI-Powered Farmer Business Growth",
        "status": "running",
        "version": "0.3.0",
    }