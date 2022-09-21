import os
import pathlib
from functools import lru_cache
from typing import Union

from pydantic import BaseSettings

__version__ = "0.0.4"

description = """
Content Aggregator - URL shortener for reducing database storage of long URLs. 🚀
"""

tags_metadata = [
    {
        "name": "urls",
        "description": "URL related operations like adding new url, redirecting to target url and etc.",
    }
]


class Settings(BaseSettings):
    app_name: str = "CA - URL shortener microservice"

    env_name: str = "Local"
    base_url: str = "http://localhost:8000"
    DATABASE_URL: str

    version: str = __version__
    description: str = description
    tags_metadata = tags_metadata

    class Config:
        env_file = ".env"


@lru_cache()
def get_settings():
    return Settings()
