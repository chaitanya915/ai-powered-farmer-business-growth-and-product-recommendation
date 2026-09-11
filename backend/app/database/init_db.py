from app.database.session import engine
from app.models.base import Base

# Import all models before create_all().
# This ensures SQLAlchemy knows about every table.
from app.models import (  # noqa: F401
    AdminActivityLog,
    BusinessReport,
    ChatHistory,
    DemandHistory,
    GovernmentScheme,
    Market,
    MarketPrice,
    ModelPrediction,
    ProcessingCost,
    Product,
    ProductMapping,
    RawMaterial,
    Recommendation,
    RecommendationHistory,
    Supplier,
    User,
    UserProfile,
)


def init_db() -> None:
    Base.metadata.create_all(bind=engine)