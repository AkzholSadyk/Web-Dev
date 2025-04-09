from idlelib.debugobj_r import remote_object_tree_item
from unittest.loader import VALID_MODULE_NAME

from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, related_name='vacancies', on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company.name
        }



class Application(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.TextField()
    vacancy = models.FloatField()
    created_at = models.ForeignKey(Vacancy, related_name='vacancies', on_delete=models.CASCADE)

    def __str__(self):
        return self.full_name

    def to_json(self):
        return {
            'id': self.id,
            'full_name': self.full_name,
            'email': self.email,
            'vacancy': self.vacancy,
            'company': self.created_at,
        }