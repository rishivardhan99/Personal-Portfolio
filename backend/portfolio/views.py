# backend/portfolio/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .models import About, Skill, Project, ContactMessage, Experience, Certificate
from .serializers import AboutSerializer, SkillSerializer, ProjectSerializer, ContactMessageSerializer, ExperienceSerializer, CertificateSerializer 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

class AboutView(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all().order_by('-proficiency')
    serializer_class = SkillSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all().order_by('order','-created_at')
    serializer_class = ProjectSerializer

class ProjectDetailView(generics.RetrieveAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer

class ExperienceList(APIView):
    def get(self, request):
        qs = Experience.objects.all().order_by("order", "-start_date")
        return Response(ExperienceSerializer(qs, many=True).data)


class CertificateList(APIView):
    def get(self, request):
        qs = Certificate.objects.all().order_by("-year")
        return Response(CertificateSerializer(qs, many=True).data)

# small health check
@api_view(['GET'])
def ping(request):
    return Response({"status":"ok"})
