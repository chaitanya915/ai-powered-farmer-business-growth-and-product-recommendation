from __future__ import annotations

from decimal import Decimal

from sqlalchemy import ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin


class ModelPrediction(Base, TimestampMixin):
    __tablename__ = "model_predictions"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    model_name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    model_version: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    prediction_type: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    product_id: Mapped[int | None] = mapped_column(
        ForeignKey("products.id", ondelete="SET NULL"),
        nullable=True,
    )

    predicted_value: Mapped[Decimal | None] = mapped_column(
        Numeric(18, 4),
        nullable=True,
    )

    confidence_score: Mapped[Decimal | None] = mapped_column(
        Numeric(8, 4),
        nullable=True,
    )

    input_data: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    prediction_metadata: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    product: Mapped["Product | None"] = relationship(
        "Product",
        back_populates="model_predictions",
    )