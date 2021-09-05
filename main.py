from typing import List
from utils import get_club_route
from concurrent.futures import ThreadPoolExecutor
from utils import download_csv
import csv

base_csv_url = other_csv_url = 'https://docs.google.com/spreadsheets/d/1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE/export?format=csv&id=1nD2hRoXo-khHlwb73b_iR-jRMPHqUViLAdbJGmtCZWE&gid='
other_csv_url = f'{base_csv_url}168970715'
wichakarn_csv_url = f'{base_csv_url}1451517396'
pat_csv_url = f'{base_csv_url}1863263145'
silpvat_csv_url = f'{base_csv_url}1957563667'
geela_csv_url = f'{base_csv_url}1989655880'


def main():
    csv_urls = [(other_csv_url, 'other'), (wichakarn_csv_url, 'wichakarn'),
                (pat_csv_url, 'pat'), (silpvat_csv_url, 'slipvat'), (geela_csv_url, 'geela')]

    csv_files = []
    with ThreadPoolExecutor() as ex:
        urls = [e[0] for e in csv_urls]
        csv_files = [f for f in ex.map(download_csv, urls)]

    for e in zip(csv_files, csv_urls):
        f = e[0]
        category = e[1][1]
        print(category)
        extract_csv(f)
        # break


def extract_csv(file: List[str]):
    reader = csv.DictReader(file)
    # for e in file[0].split(','):
    #     print(e)
    # print(file[0].split(','))
    for line in reader:
        category = line['เป็นชมรมสังกัดในฝ่ายใดของอบจ.']
        club_name = line['ชื่อชมรม']
        about = line['ข้อมูลชมรม']
        what_to_expect = line['สิ่งที่น้องๆจะได้รับ']
        contact = line['ช่องทางการติดต่อ']
        recruitment_period = line['ระยะเวลาในการเปิดรับสมัคร']
        route = get_club_route(line['ชื่อชมรมแบบเป็นภาษาอังกฤษ'])


if __name__ == '__main__':
    main()
