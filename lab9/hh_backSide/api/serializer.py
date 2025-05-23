from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields =  ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.ModelSerializer):
    company_name = serializers.CharField(source='company.name', read_only=True)  # Добавляем имя компании

    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company', 'company_name']



class ApplicationSerializer(serializers.ModelSerializer):
    vacancy_name = serializers.CharField(source='vacancy.name', read_only=True)  # Добавляем имя компании

    class Meta:
        model = Vacancy
        fields = ['id', 'full_name', 'email', 'vacancy', 'created_at', 'vacancy_name']