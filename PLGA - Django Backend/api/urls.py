from django.urls import path
from .views import user_signup, user_signin, check_authentication, user_logout

urlpatterns = [
    path('signup/', user_signup),
    path('signin/', user_signin),
    path('check-auth/', check_authentication),
    path('logout/', user_logout),
]