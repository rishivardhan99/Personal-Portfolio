# backend/portfolio/admin.py
from django.contrib import admin
from .models import About, Skill, Project, ProjectImage, ContactMessage,Experience, Certificate

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title','short_description','featured','status','order','created_at')
    list_editable = ('featured','status','order')
    inlines = [ProjectImageInline]
    ordering = ('-featured','order','-created_at')

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name','proficiency','category')
    list_editable = ('proficiency',)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("title", "organization", "start_date", "end_date", "is_current", "order")
    ordering = ("order", "-start_date")


@admin.register(Certificate)
class CertificateAdmin(admin.ModelAdmin):
    list_display = ("title", "issuer", "year", "category")
    list_filter = ("category", "year")


admin.site.register(About)
admin.site.register(ContactMessage)
