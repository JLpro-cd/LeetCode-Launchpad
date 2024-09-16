from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout

@api_view(['POST']) # A
def user_signup(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return JsonResponse({'message': 'Username already taken'}, status = 400)

    user = User.objects.create_user(username=username, password=password)
    user.save()
    login(request, user)

    return JsonResponse({'message': 'User successfully registered!'}, status = 201)

@api_view(['POST'])
def user_signin(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        print(login(request, user))
        
        return JsonResponse({'message': 'Login successful!'}, status=200)
    else:
        return JsonResponse({'message': 'Invalid credentials'}, status=400)
    
@api_view(['GET'])
def check_authentication(request):
    if request.user.is_authenticated:
        return JsonResponse({'isAuthenticated': True, 'username': request.user.username}, status = 200)
    else:
        return JsonResponse({'isAuthenticated': False}, status=200)

@api_view(['DELETE'])
def user_logout(request):
    logout(request)
    return JsonResponse({"message": "Sucessfully logged out"}, status=200)




        


