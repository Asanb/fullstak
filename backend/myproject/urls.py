from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView
from .views import register_user, get_protected_data

urlpatterns = [
    path('admin/', admin.site.urls),
    # Маршруты для нашего React-фронтенда
    path('api/register/', register_user, name='register'),
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/dashboard/', get_protected_data, name='dashboard'),
]
