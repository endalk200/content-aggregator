from ..database.config import SessionLocal


def get_db():
    """Create a new DB session with each request."""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
