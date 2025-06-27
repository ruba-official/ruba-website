from pydantic import BaseSettings
from typing import List

class Settings(BaseSettings):
    # MongoDB settings
    MONGO_URL: str
    DB_NAME: str

    # CORS settings for security
    # A list of allowed origins. e.g., ["http://localhost:3000", "https://your-frontend-domain.com"]
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000"]

    class Config:
        # This tells pydantic to load variables from a .env file
        env_file = ".env"

# Create a single instance of the settings to be imported in other files
settings = Settings()