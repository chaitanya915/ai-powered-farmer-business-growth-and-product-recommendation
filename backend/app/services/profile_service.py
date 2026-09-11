from decimal import Decimal

from sqlalchemy.orm import Session

from app.core.security import hash_password, verify_password
from app.models.user import User
from app.models.user_profile import UserProfile
from app.schemas.profile import (
    ChangePasswordRequest,
    EntrepreneurProfileUpdate,
    FarmerProfileUpdate,
    SettingsUpdate,
)


class ProfileService:

    @staticmethod
    def get_or_create_profile(
        db: Session,
        user: User,
    ) -> UserProfile:
        if user.profile:
            return user.profile

        profile = UserProfile(
            user_id=user.id,
            language="English",
        )

        db.add(profile)
        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def calculate_completion(
        user: User,
        profile: UserProfile,
    ) -> int:
        common_fields = [
            profile.name,
            profile.mobile,
            profile.language,
            profile.location,
        ]

        preference_fields = [
            profile.preferred_product_category,
            profile.maximum_investment,
            profile.minimum_roi,
            profile.preferred_risk,
            profile.preferred_market,
            profile.preferred_raw_material,
        ]

        if user.role == "FARMER":
            role_fields = [
                profile.farm_size,
                profile.primary_crops,
                profile.secondary_crops,
                profile.irrigation_type,
                profile.raw_materials,
                profile.production_quantity,
            ]

        elif user.role == "AGRI_ENTREPRENEUR":
            role_fields = [
                profile.business_name,
                profile.business_type,
                profile.business_location,
                profile.budget,
                profile.production_capacity,
                profile.existing_products,
                profile.target_market,
            ]

        else:
            role_fields = []

        all_fields = (
            common_fields
            + role_fields
            + preference_fields
        )

        completed = sum(
            1
            for value in all_fields
            if value is not None
            and str(value).strip() != ""
        )

        if not all_fields:
            return 0

        return round(
            completed / len(all_fields) * 100
        )

    @staticmethod
    def update_farmer_profile(
        db: Session,
        user: User,
        data: FarmerProfileUpdate,
    ) -> UserProfile:

        profile = ProfileService.get_or_create_profile(
            db,
            user,
        )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(profile, field, value)

        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def update_entrepreneur_profile(
        db: Session,
        user: User,
        data: EntrepreneurProfileUpdate,
    ) -> UserProfile:

        profile = ProfileService.get_or_create_profile(
            db,
            user,
        )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(profile, field, value)

        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def change_password(
        db: Session,
        user: User,
        data: ChangePasswordRequest,
    ) -> None:

        if not verify_password(
            data.current_password,
            user.password_hash,
        ):
            raise ValueError(
                "Current password is incorrect."
            )

        if data.current_password == data.new_password:
            raise ValueError(
                "New password must be different from the current password."
            )

        user.password_hash = hash_password(
            data.new_password
        )

        db.commit()

    @staticmethod
    def update_settings(
        db: Session,
        user: User,
        data: SettingsUpdate,
    ) -> UserProfile:

        profile = ProfileService.get_or_create_profile(
            db,
            user,
        )

        update_data = data.model_dump(
            exclude_unset=True
        )

        for field, value in update_data.items():
            setattr(profile, field, value)

        db.commit()
        db.refresh(profile)

        return profile