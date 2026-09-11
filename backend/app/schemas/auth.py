from enum import Enum

from pydantic import BaseModel, ConfigDict, EmailStr, Field


class UserRole(str, Enum):
    FARMER = "FARMER"
    AGRI_ENTREPRENEUR = "AGRI_ENTREPRENEUR"
    ADMIN = "ADMIN"


class SignupRequest(BaseModel):
    name: str = Field(
        ...,
        min_length=2,
        max_length=100,
    )

    email: EmailStr

    password: str = Field(
        ...,
        min_length=8,
        max_length=128,
    )

    role: UserRole

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


class LoginRequest(BaseModel):
    email: EmailStr

    password: str = Field(
        ...,
        min_length=1,
        max_length=128,
    )


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: "UserResponse"


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    email: EmailStr
    role: UserRole
    is_active: bool


class MessageResponse(BaseModel):
    message: str


class LogoutResponse(BaseModel):
    message: str