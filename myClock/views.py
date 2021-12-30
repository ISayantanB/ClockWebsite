from django.http import response
from django.http.response import HttpResponseServerError
from django.shortcuts import render, HttpResponse

# Create your views here.
def clock(request):
    return render(request, "clock.html")

def analogClock(request):
    return render(request, "analogclock.html")

def digitalClock(request):
    return render(request, "digitalclock.html")

def alarmClock(request):
    return render(request, "alarm.html")

def stopwatchClock(request):
    return render(request, "stopwatch.html")

def timerClock(request):
    return render(request, 'timer.html')

def worldClock(request):
    return render(request, "worldclock.html")