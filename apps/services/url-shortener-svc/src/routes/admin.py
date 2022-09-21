import validators
from fastapi import APIRouter, Depends, Request
from sqlalchemy.orm import Session
from starlette.datastructures import URL

from ..config import get_settings
from ..database import crud, models
from ..dependencies.get_db import get_db
from ..dependencies.responses import raise_bad_request, raise_not_found
from ..types import schemas

router = APIRouter(
    tags=["admin"],
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


@router.get(
    "/admin/{secret_key}", name="administration info", response_model=schemas.URLInfo
)
def get_url_info(secret_key: str, request: Request, db: Session = Depends(get_db)):
    """
    # Get URL Info

    Admin path to return the URL info.
    """
    if db_url := crud.get_db_url_by_secret_key(db, secret_key=secret_key):
        return get_admin_info(db_url, request)
    else:
        raise_not_found(request)


@router.patch("/admin/{secret_key}", response_model=schemas.URL)
def edit_url(
    new_url: schemas.URLBase,
    secret_key: str,
    request: Request,
    db: Session = Depends(get_db),
):
    """
    # Edit URL

    Admin path to edit the URL link.
    """
    if not validators.url(new_url.target_url):
        raise_bad_request(message="Your provided URL is not Valid")
    if db_url := crud.get_db_url_by_secret_key(db, secret_key=secret_key):
        return crud.update_db_url(db=db, url=db_url, new_url=new_url)
    else:
        raise_not_found(request)


@router.delete("/admin/{secret_key}")
def delete_url(secret_key: str, request: Request, db: Session = Depends(get_db)):
    """
    # Delete URL

    Endpoint to delete (deactivate) a URL.
    """
    if db_url := crud.deactivate_db_url_by_secret_key(db, secret_key=secret_key):
        message = f"Successfully deleted shortened URL for '{db_url.target_url}'"
        return {"detail": message}
    else:
        raise_not_found(request)
