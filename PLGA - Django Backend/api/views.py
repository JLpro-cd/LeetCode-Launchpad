from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login

@api_view(['POST'])
def user_signup(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if User.objects.filter(username=username).exists():
        return JsonResponse({'message': 'Username already taken'}, status = 400)

    user = User.objects.create_user(username=username, passwoord=password)
    user.save()

    return JsonResponse({'message': 'User successfully registered!'}, status = 201)

@api_view(['POST'])
def user_signin(request):
    username = request.data.get('username')
    password = request.data.get('password')
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful!'}, status=200)
    else:
        return JsonResponse({'message': 'Invalid credentials'}, status=400)


        


