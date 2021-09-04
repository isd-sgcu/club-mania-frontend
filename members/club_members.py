import csv
import json
from utils import get_club_route

# The output json of this will populate the clubMembers collection which store personal info of each club's representatives.

clubToMembers = {}
with open('yo.csv', encoding='utf8') as f:
    reader = csv.DictReader(f)
    for line in reader:
        processed_club_name = get_club_route(line['ชื่อชมรมแบบเป็นภาษาอังกฤษ (สามารถใช้ภาษาคาราโอเกะได้ถ้าไม่มีจริงๆ)'])
        nickname = line['ชื่อเล่น']
        year = int(line['ชั้นปี'].replace(' ', '').replace('ปี', ''))
        id = line['รหัสนิสิตของตัวแทนชมรม']

        if processed_club_name not in clubToMembers:
            clubToMembers[processed_club_name] = []

        clubToMembers[processed_club_name].append({
            'name': nickname,
            'studentId': id,
            year: year
        })

with open('out.json', 'w', encoding="utf8") as f:
    json.dump(clubToMembers, f, indent=4)
