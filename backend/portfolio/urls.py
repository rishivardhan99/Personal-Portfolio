# backend/portfolio/urls.py
from django.urls import path
from .views import (
    AboutView,
    SkillListView,
    ProjectListView,
    ProjectDetailView,
    ContactCreateView,
    ExperienceList,
    CertificateList,
    ping,
)


urlpatterns = [
    path("ping/", ping),
    path("about/", AboutView.as_view()),
    path("skills/", SkillListView.as_view()),
    path("projects/", ProjectListView.as_view()),
    path("projects/<int:pk>/", ProjectDetailView.as_view()),
    path("contact/", ContactCreateView.as_view()),
    path("experience/", ExperienceList.as_view()),
    path("certificates/", CertificateList.as_view()),

]
