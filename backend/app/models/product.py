from __future__ import annotations

from typing import TYPE_CHECKING

from sqlalchemy import Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin

if TYPE_CHECKING:
    from app.models.demand_history import DemandHistory
    from app.models.market import Market
    from app.models.model_prediction import ModelPrediction
    from app.models.processing_cost import ProcessingCost
    from app.models.product_mapping import ProductMapping
    from app.models.recommendation import Recommendation


class Product(Base, TimestampMixin):
    __tablename__ = "products"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    name: Mapped[str] = mapped_column(
        String(150),
        unique=True,
        nullable=False,
        index=True,
    )

    category: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    unit: Mapped[str] = mapped_column(
        String(30),
        nullable=False,
        default="kg",
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    product_mappings: Mapped[list["ProductMapping"]] = relationship(
        "ProductMapping",
        back_populates="product",
        cascade="all, delete-orphan",
    )

    markets: Mapped[list["Market"]] = relationship(
        "Market",
        back_populates="product",
    )

    demand_history: Mapped[list["DemandHistory"]] = relationship(
        "DemandHistory",
        back_populates="product",
    )

    processing_costs: Mapped[list["ProcessingCost"]] = relationship(
        "ProcessingCost",
        back_populates="product",
    )

    recommendations: Mapped[list["Recommendation"]] = relationship(
        "Recommendation",
        back_populates="product",
    )

    model_predictions: Mapped[list["ModelPrediction"]] = relationship(
        "ModelPrediction",
        back_populates="product",
    )