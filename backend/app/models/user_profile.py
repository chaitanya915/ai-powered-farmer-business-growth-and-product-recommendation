from __future__ import annotations

from decimal import Decimal
from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin

if TYPE_CHECKING:
    from app.models.user import User


class UserProfile(Base, TimestampMixin):
    __tablename__ = "user_profiles"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        unique=True,
        nullable=False,
    )

    name: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    mobile: Mapped[str | None] = mapped_column(
        String(30),
        nullable=True,
    )

    language: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    location: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    farm_size: Mapped[Decimal | None] = mapped_column(
        Numeric(12, 2),
        nullable=True,
    )

    primary_crops: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    secondary_crops: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    irrigation_type: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    raw_materials: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    production_quantity: Mapped[Decimal | None] = mapped_column(
        Numeric(14, 2),
        nullable=True,
    )

    business_name: Mapped[str | None] = mapped_column(
        String(200),
        nullable=True,
    )

    business_type: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    business_location: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    budget: Mapped[Decimal | None] = mapped_column(
        Numeric(14, 2),
        nullable=True,
    )

    production_capacity: Mapped[Decimal | None] = mapped_column(
        Numeric(14, 2),
        nullable=True,
    )

    existing_products: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    target_market: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    preferred_product_category: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    maximum_investment: Mapped[Decimal | None] = mapped_column(
        Numeric(14, 2),
        nullable=True,
    )

    minimum_roi: Mapped[Decimal | None] = mapped_column(
        Numeric(8, 2),
        nullable=True,
    )

    preferred_risk: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    preferred_market: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    preferred_raw_material: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    user: Mapped["User"] = relationship(
        "User",
        back_populates="profile",
    )