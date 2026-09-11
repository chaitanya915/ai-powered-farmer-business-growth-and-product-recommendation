from __future__ import annotations

from decimal import Decimal

from sqlalchemy import ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin


class Recommendation(Base, TimestampMixin):
    __tablename__ = "recommendations"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        nullable=False,
    )

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id"),
        nullable=False,
    )

    raw_material_id: Mapped[int | None] = mapped_column(
        ForeignKey("raw_materials.id", ondelete="SET NULL"),
        nullable=True,
    )

    expected_revenue: Mapped[Decimal | None] = mapped_column(
        Numeric(16, 2),
        nullable=True,
    )

    expected_profit: Mapped[Decimal | None] = mapped_column(
        Numeric(16, 2),
        nullable=True,
    )

    roi: Mapped[Decimal | None] = mapped_column(
        Numeric(10, 2),
        nullable=True,
    )

    risk_score: Mapped[Decimal | None] = mapped_column(
        Numeric(8, 2),
        nullable=True,
    )

    business_score: Mapped[Decimal | None] = mapped_column(
        Numeric(8, 2),
        nullable=True,
    )

    recommendation_text: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        default="GENERATED",
    )

    user: Mapped["User"] = relationship(
        "User",
        back_populates="recommendations",
    )

    product: Mapped["Product"] = relationship(
        "Product",
        back_populates="recommendations",
    )

    history: Mapped[list["RecommendationHistory"]] = relationship(
        "RecommendationHistory",
        back_populates="recommendation",
        cascade="all, delete-orphan",
    )