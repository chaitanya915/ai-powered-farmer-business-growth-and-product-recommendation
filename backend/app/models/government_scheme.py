from __future__ import annotations

from decimal import Decimal

from sqlalchemy import Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base, TimestampMixin


class GovernmentScheme(Base, TimestampMixin):
    __tablename__ = "government_schemes"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)

    scheme_name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
        index=True,
    )

    target_group: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    eligibility: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    benefit: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    subsidy: Mapped[Decimal | None] = mapped_column(
        Numeric(16, 2),
        nullable=True,
    )

    required_documents: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    application_information: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )