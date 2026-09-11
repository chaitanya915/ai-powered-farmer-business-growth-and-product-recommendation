from getpass import getpass

from app.core.security import hash_password
from app.database.session import SessionLocal
from app.models.user import User
from app.models.user_profile import UserProfile


def main():
    email = input("Admin email: ").strip().lower()
    name = input("Admin name: ").strip()
    password = getpass("Admin password: ")

    db = SessionLocal()

    try:
        existing = (
            db.query(User)
            .filter(User.email == email)
            .first()
        )

        if existing:
            print("A user with this email already exists.")
            return

        user = User(
            email=email,
            password_hash=hash_password(password),
            role="ADMIN",
            is_active=True,
        )

        db.add(user)
        db.flush()

        profile = UserProfile(
            user_id=user.id,
            name=name,
            language="English",
        )

        db.add(profile)
        db.commit()

        print("Admin account created successfully.")

    finally:
        db.close()


if __name__ == "__main__":
    main()