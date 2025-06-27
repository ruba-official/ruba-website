from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import logging
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# --- IMPROVEMENT: Import settings from a dedicated config file ---
from .settings import settings

# MongoDB connection using settings
client = AsyncIOMotorClient(settings.MONGO_URL)
db = client[settings.DB_NAME]

# Create the main app
app = FastAPI(title="RUBA API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# --- Models ---
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# --- API Routes ---
@api_router.get("/")
async def root():
    return {"message": "Welcome to RUBA API"}

@api_router.post("/status", response_model=StatusCheck, status_code=201)
async def create_status_check(input_data: StatusCheckCreate):
    status_obj = StatusCheck(**input_data.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Using .sort() to get the latest entries first
    cursor = db.status_checks.find().sort("timestamp", -1).limit(100)
    return await cursor.to_list(length=100)

# Include the router in the main app
app.include_router(api_router)

# --- IMPROVEMENT: Stricter CORS policy for security ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    logger.info("Closing MongoDB connection...")
    client.close()