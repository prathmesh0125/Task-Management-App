from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from backend.database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String, index=True)
    status = Column(String, default="todo")
    created_at = Column(DateTime, default=datetime.utcnow)
