from decimal import Decimal

from pydantic import BaseModel, ConfigDict, Field


class ProfileBase(BaseModel):
    name: str | None = Field(
        default=None,
        max_length=100,
    )

    mobile: str | None = Field(
        default=None,
        max_length=20,
    )

    language: str | None = Field(
        default="English",
        max_length=50,
    )

    location: str | None = Field(
        default=None,
        max_length=255,
    )


class FarmerProfileUpdate(ProfileBase):
    farm_size: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=12,
        decimal_places=2,
    )

    primary_crops: str | None = None
    secondary_crops: str | None = None
    irrigation_type: str | None = Field(
        default=None,
        max_length=100,
    )

    raw_materials: str | None = None

    production_quantity: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=14,
        decimal_places=2,
    )

    preferred_product_category: str | None = Field(
        default=None,
        max_length=100,
    )

    maximum_investment: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=14,
        decimal_places=2,
    )

    minimum_roi: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=8,
        decimal_places=2,
    )

    preferred_risk: str | None = Field(
        default=None,
        max_length=50,
    )

    preferred_market: str | None = Field(
        default=None,
        max_length=255,
    )

    preferred_raw_material: str | None = Field(
        default=None,
        max_length=255,
    )


class EntrepreneurProfileUpdate(ProfileBase):
    business_name: str | None = Field(
        default=None,
        max_length=255,
    )

    business_type: str | None = Field(
        default=None,
        max_length=100,
    )

    business_location: str | None = Field(
        default=None,
        max_length=255,
    )

    budget: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=14,
        decimal_places=2,
    )

    production_capacity: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=14,
        decimal_places=2,
    )

    existing_products: str | None = None

    target_market: str | None = Field(
        default=None,
        max_length=255,
    )

    preferred_product_category: str | None = Field(
        default=None,
        max_length=100,
    )

    maximum_investment: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=14,
        decimal_places=2,
    )

    minimum_roi: Decimal | None = Field(
        default=None,
        ge=0,
        max_digits=8,
        decimal_places=2,
    )

    preferred_risk: str | None = Field(
        default=None,
        max_length=50,
    )

    preferred_market: str | None = Field(
        default=None,
        max_length=255,
    )

    preferred_raw_material: str | None = Field(
        default=None,
        max_length=255,
    )


class ProfileResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    user_id: int

    name: str | None
    mobile: str | None
    language: str | None
    location: str | None

    farm_size: Decimal | None
    primary_crops: str | None
    secondary_crops: str | None
    irrigation_type: str | None
    raw_materials: str | None
    production_quantity: Decimal | None

    business_name: str | None
    business_type: str | None
    business_location: str | None
    budget: Decimal | None
    production_capacity: Decimal | None
    existing_products: str | None
    target_market: str | None

    preferred_product_category: str | None
    maximum_investment: Decimal | None
    minimum_roi: Decimal | None
    preferred_risk: str | None
    preferred_market: str | None
    preferred_raw_material: str | None

    completion_percentage: int


class ChangePasswordRequest(BaseModel):
    current_password: str = Field(
        ...,
        min_length=1,
        max_length=128,
    )

    new_password: str = Field(
        ...,
        min_length=8,
        max_length=128,
    )


class SettingsResponse(BaseModel):
    language: str | None
    location: str | None


class SettingsUpdate(BaseModel):
    language: str | None = Field(
        default=None,
        max_length=50,
    )

    location: str | None = Field(
        default=None,
        max_length=255,
    )