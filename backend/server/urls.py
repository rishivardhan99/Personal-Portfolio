# backend/server/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

def root(request):
    return JsonResponse({"status": "API running"})


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("portfolio.urls")),
    path("", root),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
