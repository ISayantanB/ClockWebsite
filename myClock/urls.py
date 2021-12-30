from django.contrib import admin
from django.urls import path, include
from myClock import views

urlpatterns = [
    path('', views.clock, name='clock'),
    path('analogClock', views.analogClock, name='analogClock'),
    path('digitalClock', views.digitalClock, name='digitalClock'),
    path('alarmClock', views.alarmClock, name='alarmClock'),
    path('stopwatchClock', views.stopwatchClock, name='stopwatchClock'),
    path('timerClock', views.timerClock, name='timerClock'),
    path('worldClock', views.worldClock, name='worldClock')
]
