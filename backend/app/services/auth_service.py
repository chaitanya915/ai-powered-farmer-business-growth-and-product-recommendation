from sqlalchemy import select
from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.models.user import User
from app.models.user_profile import UserProfile
from app.schemas.auth import LoginRequest, SignupRequest


class AuthService:
    """
    Authentication business logic.

    Database operations remain inside this service instead of
    being placed directly inside API route functions.
    """

    @staticmethod
    def get_user_by_email(
        db: Session,
        email: str,
    ) -> User | None:
        statement = select(User).where(
            User.email == email.lower()
        )

        return db.scalar(statement)

    @staticmethod
    def signup(
        db: Session,
        data: SignupRequest,
    ) -> User:
        existing_user = AuthService.get_user_by_email(
            db,
            data.email,
        )

        if existing_user:
            raise ValueError(
                "An account with this email already exists."
            )

        # NEVER store data.password directly.
        password_hash = hash_password(data.password)

        user = User(
            email=data.email.lower(),
            password_hash=password_hash,
            role=data.role.value,
            is_active=True,
        )

        db.add(user)
        db.flush()

        profile = UserProfile(
            user_id=user.id,
            name=data.name,
            mobile=data.mobile,
            language=data.language,
            location=data.location,
        )

        db.add(profile)
        db.commit()
        db.refresh(user)

        return user

    @staticmethod
    def authenticate(
        db: Session,
        data: LoginRequest,
    ) -> User | None:
        user = AuthService.get_user_by_email(
            db,
            data.email,
        )

        if user is None:
            return None

        if not verify_password(
            data.password,
            user.password_hash,
        ):
            return None

        if not user.is_active:
            return None

        return user

    @staticmethod
    def create_login_token(user: User) -> str:
        return create_access_token(
            subject=str(user.id),
            role=user.role,
        )