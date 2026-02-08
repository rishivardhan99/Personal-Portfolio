# backend/portfolio/serializers.py
from rest_framework import serializers
from .models import About, Skill, Project, ProjectImage, ContactMessage, Experience, Certificate

class ProjectImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    class Meta:
        model = ProjectImage
        fields = ['id','caption','image_url']
    def get_image_url(self,obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url if obj.image else None

class ProjectSerializer(serializers.ModelSerializer):
    cover_url = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "short_description",
            "description",
            "tech_stack",
            "github",
            "live",
            "cover_url",
            "featured",
            "status",
            "created_at",
            "order",
        ]

    def get_cover_url(self, obj):
        request = self.context.get("request")
        if obj.cover and request:
            return request.build_absolute_uri(obj.cover.url)
        return None

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id','name','proficiency','category']

class AboutSerializer(serializers.ModelSerializer):
    resume_url = serializers.SerializerMethodField()
    avatar_url = serializers.SerializerMethodField()
    class Meta:
        model = About
        fields = ['id','name','title','bio','resume_url','avatar_url']
    def get_resume_url(self,obj):
        request = self.context.get('request')
        if obj.resume and request:
            return request.build_absolute_uri(obj.resume.url)
        return obj.resume.url if obj.resume else None
    def get_avatar_url(self,obj):
        request = self.context.get('request')
        if obj.avatar and request:
            return request.build_absolute_uri(obj.avatar.url)
        return obj.avatar.url if obj.avatar else None

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id','name','email','subject','message','created_at']


class ExperienceSerializer(serializers.ModelSerializer):
    logo_url = serializers.SerializerMethodField()
    class Meta:
        model = Experience
        fields = ['id','title','organization','description','start_date','end_date','is_current','order','logo_url']
    def get_logo_url(self, obj):
        request = self.context.get('request')
        if obj.logo and request:
            return request.build_absolute_uri(obj.logo.url)
        return obj.logo.url if obj.logo else None


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = "__all__"