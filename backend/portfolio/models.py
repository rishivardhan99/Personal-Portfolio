# backend/portfolio/models.py
from django.db import models

class About(models.Model):
    name = models.CharField(max_length=120, default="Your Name")
    title = models.CharField(max_length=120, blank=True)
    bio = models.TextField(blank=True)
    resume = models.FileField(upload_to='resume/', blank=True, null=True)
    avatar = models.ImageField(upload_to='avatars/', blank=True, null=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=80)
    proficiency = models.PositiveSmallIntegerField(default=60)  # 0 - 100
    category = models.CharField(max_length=80, blank=True)  # e.g. "Frontend", "Backend"

    def __str__(self):
        return f"{self.name} ({self.proficiency}%)"

class Project(models.Model):
    title = models.CharField(max_length=200)
    short_description = models.CharField(max_length=255, blank=True)
    description = models.TextField(blank=True)
    tech_stack = models.CharField(max_length=255, blank=True)
    github = models.URLField(blank=True)
    live = models.URLField(blank=True)
    cover = models.ImageField(upload_to='projects/covers/', blank=True, null=True)

    featured = models.BooleanField(default=False)   # ✅ REQUIRED
    status = models.CharField(
        max_length=20,
        choices=[
            ("completed", "Completed"),
            ("planned", "Planned"),
        ],
        default="completed",
    )

    created_at = models.DateTimeField(auto_now_add=True)
    order = models.PositiveIntegerField(default=0)


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/images/')
    caption = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"{self.project.title} - {self.caption or 'image'}"

class ContactMessage(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} - {self.email}"
class Experience(models.Model):
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    is_current = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    logo = models.ImageField(upload_to="experiences/logos/", blank=True, null=True)  # <-- new
    # __str__ etc remain same

class Certificate(models.Model):
    title = models.CharField(max_length=255)
    issuer = models.CharField(max_length=200)
    year = models.PositiveIntegerField()
    category = models.CharField(max_length=100, blank=True)  # AI / Web / Hackathon
    credential_url = models.URLField(blank=True)

    def __str__(self):
        return self.title
