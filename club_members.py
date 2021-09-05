import csv
import json
from utils import get_club_route
import requests

# The output json of this will populate the clubMembers collection which store personal info of each club's representatives.

url = 'https://docs.google.com/spreadsheets/u/1/d/1l8FlP4FULZFxI9df-XwpmHG1_gK3OOPFqg3Uwpf4XeM/export?format=csv'
downloaded_csv = requests.get(url).content.decode('utf-8').splitlines()

clubMembers_collection = {}
field_name = 'members'
# with open(downloaded_csv, encoding='utf8') as f:
reader = csv.DictReader(downloaded_csv)
for line in reader:
    processed_club_name = get_club_route(line['ชื่อชมรมแบบเป็นภาษาอังกฤษ (สามารถใช้ภาษาคาราโอเกะได้ถ้าไม่มีจริงๆ)'])
    nickname = line['ชื่อเล่น']
    year = int(line['ชั้นปี'].replace(' ', '').replace('ปี', ''))
    id = line['รหัสนิสิตของตัวแทนชมรม']

    if processed_club_name not in clubMembers_collection:
        clubMembers_collection[processed_club_name] = {
            field_name: []
        }

    clubMembers_collection[processed_club_name][field_name].append({
        'name': nickname,
        'studentId': id,
        year: year
    })

with open('club_members.json', 'w', encoding="utf8") as f:
    json.dump(clubMembers_collection, f, indent=4, ensure_ascii=False)
