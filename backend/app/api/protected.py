from fastapi import APIRouter, Depends

from app.api.auth import (
    require_admin,
    require_farmer,
    require_farmer_or_entrepreneur,
    require_agri_entrepreneur,
)
from app.models.user import User


router = APIRouter(
    prefix="/protected",
    tags=["Protected"],
)


@router.get("/farmer")
def farmer_only(
    current_user: User = Depends(require_farmer),
):
    return {
        "message": "Farmer protected route accessed.",
        "user_id": current_user.id,
        "role": current_user.role,
    }


@router.get("/business")
def entrepreneur_only(
    current_user: User = Depends(require_agri_entrepreneur),
):
    return {
        "message": "Business protected route accessed.",
        "user_id": current_user.id,
        "role": current_user.role,
    }


@router.get("/farmer-business")
def farmer_business_route(
    current_user: User = Depends(
        require_farmer_or_entrepreneur
    ),
):
    return {
        "message": "Farmer/business protected route accessed.",
        "user_id": current_user.id,
        "role": current_user.role,
    }


@router.get("/admin")
def admin_only(
    current_user: User = Depends(require_admin),
):
    return {
        "message": "Admin protected route accessed.",
        "user_id": current_user.id,
        "role": current_user.role,
    }