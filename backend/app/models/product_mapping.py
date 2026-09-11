from __future__ import annotations

from decimal import Decimal
from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey, Integer, Numeric
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.models.base import Base, TimestampMixin

if TYPE_CHECKING:
    from app.models.product import Product
    from app.models.raw_material import RawMaterial


class Product_MMapping(Base, TimestampMixin):
    __tablename__ = "product_mappings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    raw_material_id: Mapped[int] = mapped_column(
        ForeignKey("raw_materials.id", ondelete="CASCADE"),
        nullable=False,
    )

    product_id: Mapped[int] = mapped_column(
        ForeignKey("products.id", ondelete="CASCADE"),
        nullable=False,
    )

    processing_cost: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    yield_percentage: Mapped[Decimal] = mapped_column(
        Numeric(7, 2),
        nullable=False,
    )

    selling_price: Mapped[Decimal] = mapped_column(
        Numeric(14, 2),
        nullable=False,
    )

    raw_material: Mapped["RawMaterial"] = relationship(
        "RawMaterial",
        back_populates="product_mappings",
    )

    product: Mapped["Product"] = relationship(
        "Product",
        back_populates="product_mappings",
    )