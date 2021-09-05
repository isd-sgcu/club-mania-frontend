import csv
import json
from utils import get_club_route, download_contact_list_csv
import requests

# The output json of this will populate the clubMembers collection which store personal info of each club's representatives.

downloaded_csv = download_contact_list_csv()

clubMembers_collection = {}

# with open(downloaded_csv, encoding='utf8') as f:
reader = csv.DictReader(downloaded_csv)
for line in reader:
    processed_club_name = get_club_route(line['ชื่อชมรมแบบเป็นภาษาอังกฤษ (สามารถใช้ภาษาคาราโอเกะได้ถ้าไม่มีจริงๆ)'])
    email = line['e-mail จุฬาฯ']

    if processed_club_name not in clubMembers_collection:
        clubMembers_collection[processed_club_name] = {
            'members': [],
            'posts': []
        }

    clubMembers_collection[processed_club_name]['members'].append(
        '/members/' + email
    )

with open('clubs.json', 'w', encoding="utf8") as f:
    json.dump(clubMembers_collection, f, indent=4, ensure_ascii=False)