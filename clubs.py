import json
from utils import download_csv, extract_csv
from concurrent.futures import ThreadPoolExecutor

# The output json of this will populate the clubMembers collection which store personal info of each club's representatives.
category_base_csv_url = other_csv_url = 'https://docs.google.com/spreadsheets/d/1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE/export?format=csv&id=1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE&gid='
other_csv_url = f'{category_base_csv_url}168970715'
wichakarn_csv_url = f'{category_base_csv_url}1451517396'
pat_csv_url = f'{category_base_csv_url}1863263145'
silpvat_csv_url = f'{category_base_csv_url}1957563667'
geela_csv_url = f'{category_base_csv_url}1989655880'

csv_urls = [(other_csv_url, 'other'), (wichakarn_csv_url, 'wichakarn'),
                (pat_csv_url, 'pat'), (silpvat_csv_url, 'silpvat'), (geela_csv_url, 'geela')]

clubs_collection = []
csv_files = []
with ThreadPoolExecutor() as ex:
    urls = [e[0] for e in csv_urls]
    csv_files = [f for f in ex.map(download_csv, urls)]

registered_routes_file_content = ''
for e in zip(csv_files, csv_urls):
    f = e[0]
    category = e[1][1]

    club_data = extract_csv(f)
    for key, value in club_data.items():
        clubs_collection.append({
            'url': f'{category}/{key}',
            'name': value['name'],
            'category': value['category'],
            'logo': ""
        })

with open('clubs.json', 'w', encoding="utf8") as f:
    json.dump(clubs_collection, f, indent=4, ensure_ascii=False)