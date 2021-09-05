from typing import List
from utils import extract_csv
from concurrent.futures import ThreadPoolExecutor
from utils import download_csv
import csv
import json
from pathlib import Path
# import os

base_csv_url = other_csv_url = 'https://docs.google.com/spreadsheets/d/1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE/export?format=csv&id=1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE&gid='
other_csv_url = f'{base_csv_url}168970715'
wichakarn_csv_url = f'{base_csv_url}1451517396'
pat_csv_url = f'{base_csv_url}1863263145'
silpvat_csv_url = f'{base_csv_url}1957563667'
geela_csv_url = f'{base_csv_url}1989655880'


def main():
    # updates the src/assets/clubs
    update_static_info()


def update_static_info():
    csv_urls = [(other_csv_url, 'other'), (wichakarn_csv_url, 'wichakarn'),
                (pat_csv_url, 'pat'), (silpvat_csv_url, 'slipvat'), (geela_csv_url, 'geela')]

    csv_files = []
    with ThreadPoolExecutor() as ex:
        urls = [e[0] for e in csv_urls]
        csv_files = [f for f in ex.map(download_csv, urls)]

    for e in zip(csv_files, csv_urls):
        f = e[0]
        category = e[1][1]

        club_data = extract_csv(f)
        dir = Path(f'src/assets/clubs/{category}')
        dir.mkdir(parents=True, exist_ok=True)

        for route, doc in club_data.items():
            content = 'export const info = ' + \
                json.dumps(doc, indent=2, ensure_ascii=False)
            path = dir.joinpath(f'{route}.js')
            with open(path, 'w', encoding='utf8') as f:
                f.write(content)


if __name__ == '__main__':
    main()
