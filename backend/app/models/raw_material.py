from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin


class RawMaterial(Base, TimestampMixin):
    __tablename__ = "raw_materials"

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
        back_populates="raw_material",
        cascade="all, delete-orphan",
    )

    market_prices: Mapped[list["MarketPrice"]] = relationship(
        "MarketPrice",
        back_populates="raw_material",
        cascade="all, delete-orphan",
    )

    suppliers: Mapped[list["Supplier"]] = relationship(
        "Supplier",
        back_populates="raw_material",
    )