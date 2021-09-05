import json
import os
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import firebase_admin
from dotenv import load_dotenv
from firebase_admin import credentials, firestore

from utils import download_csv, extract_csv


def generate_club_docs():
    load_dotenv()
    path_to_private_key = os.environ.get('FIREBASE_PRIVATE_KEY_JSON')
    if not path_to_private_key:
        print('Get the private key json from the firebase console first')
        exit(-1)

    cred = credentials.Certificate(path_to_private_key)
    firebase_admin.initialize_app(cred)

    db = firestore.client()
    clubs_ref = db.collection(u'clubs')
    members_ref = db.collection(u'members')

    with open('club_members.json', 'r', encoding="utf8") as f:
        data = json.load(f)
        print(data)

        for key in data:
            ref = clubs_ref.document(key)
            ref.set({
                u'members': [],
                u'posts': []
            })
            member_list = []
            for member in data[key]['members']:
                print(member)
                mem_ref = members_ref.document(member['email'])
                member_list.append(mem_ref)
                mem_ref.set({
                    u'club': ref,
                    u'name': member['name'],
                    u'studentId': member['studentId'],
                    u'year': member['year'],
                })

            ref.update({u'members': member_list})


    


def update_static_info():
    category_base_csv_url = other_csv_url = 'https://docs.google.com/spreadsheets/d/1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE/export?format=csv&id=1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE&gid='
    other_csv_url = f'{category_base_csv_url}168970715'
    wichakarn_csv_url = f'{category_base_csv_url}1451517396'
    pat_csv_url = f'{category_base_csv_url}1863263145'
    silpvat_csv_url = f'{category_base_csv_url}1957563667'
    geela_csv_url = f'{category_base_csv_url}1989655880'

    csv_urls = [(other_csv_url, 'other'), (wichakarn_csv_url, 'wichakarn'),
                (pat_csv_url, 'pat'), (silpvat_csv_url, 'silpvat'), (geela_csv_url, 'geela')]

    csv_files = []
    with ThreadPoolExecutor() as ex:
        urls = [e[0] for e in csv_urls]
        csv_files = [f for f in ex.map(download_csv, urls)]

    registered_routes_file_content = ''
    for e in zip(csv_files, csv_urls):
        f = e[0]
        category = e[1][1]

        club_data = extract_csv(f)
        dir = Path(f'src/assets/clubs/{category}')
        dir.mkdir(parents=True, exist_ok=True)

        routes = []
        # updates each club static info
        for route, doc in club_data.items():
            routes.append(route)
            content = 'export const info = ' + \
                json.dumps(doc, indent=2, ensure_ascii=False)
            path = dir.joinpath(f'{route}.js')
            with open(path, 'w', encoding='utf8') as f:
                f.write(content)

        registered_routes_file_content += f'export const {category}Routes = new Set<string>(' + json.dumps(
            routes, indent=2).replace('"', "'") + ')\n'
    
    # updates registered routes
    dir = Path(f'src/components/pages/club')
    dir.mkdir(parents=True, exist_ok=True)
    file_path = dir.joinpath('routes.ts')
    with open(file_path, 'w', encoding='utf8') as f:
        f.write(registered_routes_file_content)
