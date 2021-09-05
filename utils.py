import csv
from typing import List

import requests


# club route is the key of each club
def get_club_route(clubname_en: str):
    return '-'.join(
        clubname_en.lower().replace(',', '').replace('(', '').replace(')', '').split())


def download_contact_list_csv():
    url = 'https://docs.google.com/spreadsheets/u/1/d/1l8FlP4FULZFxI9df-XwpmHG1_gK3OOPFqg3Uwpf4XeM/export?format=csv'
    return download_csv(url)


def download_csv(url: str):
    return requests.get(url).content.decode('utf-8').splitlines()


def extract_csv(file: List[str]):
    reader = csv.DictReader(file)
    category_clubs = {}
    for line in reader:
        club = {}
        club_name = line['ชื่อชมรม']
        category = line['เป็นชมรมสังกัดในฝ่ายใดของอบจ.']
        about = line['ข้อมูลชมรม']
        what_to_expect = line['สิ่งที่น้องๆจะได้รับ']
        contact = line['ช่องทางการติดต่อ']
        recruitment_period = line['ระยะเวลาในการเปิดรับสมัคร']
        route = get_club_route(line['ชื่อชมรมแบบเป็นภาษาอังกฤษ'])
        badge = line['badge']

        club['name'] = club_name
        club['category'] = category
        club['about'] = about
        club['whatToExpect'] = what_to_expect
        club['recruitmentPeriod'] = recruitment_period
        club['contact'] = contact
        club['badge'] = badge
        club['images'] = [] # TODO

        # route is the key for each club
        category_clubs[route] = club

    return category_clubs
