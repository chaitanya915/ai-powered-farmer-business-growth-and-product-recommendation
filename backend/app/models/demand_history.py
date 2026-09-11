from __future__ import annotations

from datetime import date
from decimal import Decimal

from sqlalchemy import Date, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin


class DemandHistory(Base, TimestampMixin):
    __tablename__ = "demand_history"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    date: Mapped[date] = mapped_column(
        Date,
        nullable=False,
        index=True,
    )

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id"),
        nullable=False,
    )

    location: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    quantity_sold: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    selling_price: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    season: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    month: Mapped[int | None] = mapped_column(
        Integer,
        nullable=True,
    )

    festival: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    historical_demand: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    product: Mapped["Product"] = relationship(
        "Product",
        back_populates="demand_history",
    )