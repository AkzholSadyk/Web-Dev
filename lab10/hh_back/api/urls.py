from django.urls import path
from . import views
from .CBV import (
    CompanyListCreateView, CompanyDetailView, CompanyVacanciesView,
    VacancyListCreateView, VacancyDetailView, TopTenVacanciesView
)

urlpatterns = [
    # path('companies/', views.company_list, name='company-list'),
    # path('companies/<int:company_id>/',views.company_detail, name='company-detail'),
    # path('companies/<int:company_id>/vacancies/',   views.company_vacancies, name='company-vacancies'),
    # path('vacancies/', views.vacancy_list, name='vacancy-list'),
    # path('vacancies/<int:vacancy_id>/', views.vacancy_detail, name='vacancy-detail'),
    # path('vacancies/top_ten/', views.top_ten_vacancies, name='top-ten-vacancies'),
    #


    path('companies/', CompanyListCreateView.as_view(), name='company_list_create'),
    path('companies/<int:company_id>/', CompanyDetailView.as_view(), name='company_detail'),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesView.as_view(), name='company_vacancies'),

    path('vacancies/', VacancyListCreateView.as_view(), name='vacancy_list_create'),
    path('vacancies/<int:vacancy_id>/', VacancyDetailView.as_view(), name='vacancy_detail'),
    path('vacancies/top_ten/', TopTenVacanciesView.as_view(), name='top_ten_vacancies'),
]


