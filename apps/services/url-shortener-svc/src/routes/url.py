import validators
from fastapi import APIRouter, Depends, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from starlette.datastructures import URL

from ..config import get_settings
from ..database import crud, models
from ..dependencies.get_db import get_db
from ..dependencies.responses import raise_bad_request, raise_not_found
from ..types import schemas

router = APIRouter(
    tags=["urls"],
    dependencies=[Depends(get_db)],
    responses={404: {"description": "Not found"}},
)


def get_admin_info(db_url: models.URL, request: Request) -> schemas.URLInfo:
    """Return the Admin info."""
    base_url = URL(get_settings().base_url)

    admin_endpoint = request.url_for(
        "administration info", secret_key=db_url.secret_key
    )

    db_url.url = str(base_url.replace(path=db_url.key))

    # db_url.admin_url = str(base_url.replace(path=admin_endpoint))
    db_url.admin_url = admin_endpoint

    return db_url


def get_list_info(db_url: models.URL) -> schemas.URLListItem:
    """Return List info for the URL."""
    base_url = URL(get_settings().base_url)
    db_url.url = str(base_url.replace(path=db_url.key))
    return db_url


@router.get("/url/list", response_model=schemas.URLList)
def list_saved_urls(db: Session = Depends(get_db)):
    """
    # List Saved URLs

    List all saved URLs in the database
    """
    url_list = [get_list_info(item) for item in crud.get_all_urls(db=db)]
    return {"urls": url_list}


@router.post("/url/shorten", response_model=schemas.URLInfo)
def shorten_url(url: schemas.URLBase, request: Request, db: Session = Depends(get_db)):
    """
    # Shorten URL

    Shorten passed URL and save to the database
    """
    if not validators.url(url.target_url):
        raise_bad_request(message="Your provided URL is not Valid")

    db_url = crud.create_db_url(db=db, url=url)

    return get_admin_info(db_url, request)


@router.get("/{url_key}/peek", response_model=schemas.URLBase)
def show_target_url(url_key: str, request: Request, db: Session = Depends(get_db)):
    """
    # Show Target URL

    Return only the target URL, do not redirect.

    This endpoint allows users to check the URL before visiting.
    """
    if db_url := crud.get_db_url_by_key(db=db, url_key=url_key):
        return db_url
    else:
        raise_not_found(request)


@router.get("/{url_key}")
def forward_to_target_url(
    url_key: str, request: Request, db: Session = Depends(get_db)
):
    """
    # Forward to Target URL

    Forward to the correct full URL.
    """
    if db_url := crud.get_db_url_by_key(db=db, url_key=url_key):
        crud.update_db_clicks(db=db, db_url=db_url)
        return RedirectResponse(db_url.target_url)
    else:
        raise_not_found(request)
