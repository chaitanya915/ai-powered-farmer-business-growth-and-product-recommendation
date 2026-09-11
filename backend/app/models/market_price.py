from __future__ import annotations

from datetime import date
from decimal import Decimal

from sqlalchemy import Date, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin


class MarketPrice(Base, TimestampMixin):
    __tablename__ = "market_prices"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    date: Mapped[date] = mapped_column(
        Date,
        nullable=False,
        index=True,
    )

    state: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    district: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    market_id: Mapped[int | None] = mapped_column(
        ForeignKey("markets.id", ondelete="SET NULL"),
        nullable=True,
    )

    raw_material_id: Mapped[int] = mapped_column(
        ForeignKey("raw_materials.id"),
        nullable=False,
    )

    commodity: Mapped[str] = mapped_column(
        String(150),
        nullable=False,
    )

    variety: Mapped[str | None] = mapped_column(
        String(150),
        nullable=True,
    )

    min_price: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    max_price: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    modal_price: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    market: Mapped["Market | None"] = relationship(
        "Market",
        back_populates="market_prices",
    )

    raw_material: Mapped["RawMaterial"] = relationship(
        "RawMaterial",
        back_populates="market_prices",
    )