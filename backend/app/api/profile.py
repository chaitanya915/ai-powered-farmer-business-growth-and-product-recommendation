from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.api.auth import get_current_user
from app.database.session import get_db
from app.models.user import User
from app.schemas.profile import (
    ChangePasswordRequest,
    EntrepreneurProfileUpdate,
    FarmerProfileUpdate,
    ProfileResponse,
    SettingsResponse,
    SettingsUpdate,
)
from app.services.profile_service import ProfileService


router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)


def build_profile_response(
    user: User,
    profile,
) -> dict:

    completion = ProfileService.calculate_completion(
        user,
        profile,
    )

    response = {
        "id": profile.id,
        "user_id": profile.user_id,

        "name": profile.name,
        "mobile": profile.mobile,
        "language": profile.language,
        "location": profile.location,

        "farm_size": profile.farm_size,
        "primary_crops": profile.primary_crops,
        "secondary_crops": profile.secondary_crops,
        "irrigation_type": profile.irrigation_type,
        "raw_materials": profile.raw_materials,
        "production_quantity": profile.production_quantity,

        "business_name": profile.business_name,
        "business_type": profile.business_type,
        "business_location": profile.business_location,
        "budget": profile.budget,
        "production_capacity": profile.production_capacity,
        "existing_products": profile.existing_products,
        "target_market": profile.target_market,

        "preferred_product_category":
            profile.preferred_product_category,
        "maximum_investment":
            profile.maximum_investment,
        "minimum_roi": profile.minimum_roi,
        "preferred_risk": profile.preferred_risk,
        "preferred_market": profile.preferred_market,
        "preferred_raw_material":
            profile.preferred_raw_material,

        "completion_percentage": completion,
    }

    return response


@router.get(
    "",
    response_model=ProfileResponse,
)
def get_profile(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    profile = ProfileService.get_or_create_profile(
        db,
        current_user,
    )

    return build_profile_response(
        current_user,
        profile,
    )


@router.put(
    "/farmer",
    response_model=ProfileResponse,
)
def update_farmer_profile(
    data: FarmerProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if current_user.role != "FARMER":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This profile endpoint is only available to farmers.",
        )

    profile = ProfileService.update_farmer_profile(
        db,
        current_user,
        data,
    )

    return build_profile_response(
        current_user,
        profile,
    )


@router.put(
    "/entrepreneur",
    response_model=ProfileResponse,
)
def update_entrepreneur_profile(
    data: EntrepreneurProfileUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    if current_user.role != "AGRI_ENTREPRENEUR":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=(
                "This profile endpoint is only available "
                "to agri-entrepreneurs."
            ),
        )

    profile = ProfileService.update_entrepreneur_profile(
        db,
        current_user,
        data,
    )

    return build_profile_response(
        current_user,
        profile,
    )


@router.get(
    "/settings",
    response_model=SettingsResponse,
)
def get_settings(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    profile = ProfileService.get_or_create_profile(
        db,
        current_user,
    )

    return {
        "language": profile.language,
        "location": profile.location,
    }


@router.put(
    "/settings",
    response_model=SettingsResponse,
)
def update_settings(
    data: SettingsUpdate,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    profile = ProfileService.update_settings(
        db,
        current_user,
        data,
    )

    return {
        "language": profile.language,
        "location": profile.location,
    }


@router.post(
    "/change-password",
)
def change_password(
    data: ChangePasswordRequest,
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db),
):
    try:
        ProfileService.change_password(
            db,
            current_user,
            data,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        ) from exc

    return {
        "message": "Password changed successfully."
    }