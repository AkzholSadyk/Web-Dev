from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Company, Vacancy, Application

@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "city", "address")


@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "salary", "company")


@admin.register(Application)
class ApplicationAdmin(admin.ModelAdmin):
    list_display = ("full_name", "email", "vacancy" , "created_at")

