import os
import pathlib
from typing import Union

from fastapi import Depends, FastAPI

from . import config
from .config import Settings
from .database import config, models
from .dependencies.fetch_urls import fetch_urls
from .routes import admin, url

app = FastAPI(
    title="CA - URL shortener microservice",
    description=config.get_settings().description,
    version=config.get_settings().version,
    openapi_tags=config.get_settings().tags_metadata,
    openapi_url="/api/v1/openapi.json",
    docs_url="/doc/default",
    redoc_url="/doc/redoc",
)
models.Base.metadata.create_all(bind=config.engine)

app.include_router(url.router)
app.include_router(admin.router)


@app.get("/")
def index(settings: Settings = Depends(config.get_settings)):
    """
    # Root route.

    Get full microservice information
    """
    return {"name": settings.app_name, "version": settings.version}
